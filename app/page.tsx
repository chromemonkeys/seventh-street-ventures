"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import SlideFive from "../slide-five"
import SlideSeven from "../slide-seven"
import SlideEight from "../slide-eight"
import SlideNine from "../slide-nine"
import SlideTen from "../slide-ten"
import SlideExample from "../slide-example"
import SlideEleven from "../slide-eleven"
import SlideTwelve from "../slide-twelve"
import VerticalNavigation from "@/components/vertical-navigation"
import { AppSettingsProvider } from "@/context/app-settings-context"

export default function Page() {
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const slides = [
    { id: "slide-1", Component: SlideFive },
    { id: "slide-2", Component: SlideSeven },
    { id: "slide-3", Component: SlideEight },
    { id: "slide-4", Component: SlideNine },
    { id: "slide-5", Component: SlideTen },
    { id: "slide-6", Component: SlideExample },
    { id: "slide-7", Component: SlideEleven },
    { id: "slide-8", Component: SlideTwelve },
  ]

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = slideRefs.current.findIndex((ref) => ref === entry.target)
          if (index !== -1) {
            setActiveSlideIndex(index)
          }
        }
      })
    }, observerOptions)

    slideRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => {
      slideRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
    }
  }, [])

  const scrollToSlide = useCallback((index: number) => {
    if (slideRefs.current[index]) {
      slideRefs.current[index]?.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        event.preventDefault()
        if (activeSlideIndex < slides.length - 1) {
          scrollToSlide(activeSlideIndex + 1)
        }
      } else if (event.key === "ArrowUp") {
        event.preventDefault()
        if (activeSlideIndex > 0) {
          scrollToSlide(activeSlideIndex - 1)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeSlideIndex, slides.length, scrollToSlide])

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullScreenChange)

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange)
    }
  }, [])

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`)
      })
    } else {
      document.exitFullscreen()
    }
  }

  return (
    <AppSettingsProvider>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory pb-20">
        {slides.map((slide, index) => (
          <div key={slide.id} id={slide.id} ref={(el) => (slideRefs.current[index] = el)} className="snap-start">
            {slide.id === "slide-5" ? <slide.Component onJumpToSection={scrollToSlide} /> : <slide.Component />}
          </div>
        ))}
        <VerticalNavigation
          numSlides={slides.length}
          activeSlideIndex={activeSlideIndex}
          onDotClick={scrollToSlide}
          isFullScreen={isFullScreen}
          toggleFullScreen={toggleFullScreen}
          className="hidden md:block"
        />
      </div>
    </AppSettingsProvider>
  )
}
