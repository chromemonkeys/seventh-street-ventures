"use client"

import { useRef, useEffect, useState, useCallback, lazy, Suspense } from "react"
import SlideIntro from "../slide-five"
import SlideProjects from "../slide-seven"
import SlideSilos from "../slide-eight"
import SlideHowIWork from "../slide-nine"
import SlideProduction from "../slide-ten"
import SlideWhyThisRole from "../slide-eleven"
import SlideContact from "../slide-twelve"
import VerticalNavigation from "@/components/vertical-navigation"
import AmbientMusic from "@/components/ambient-music"
import { AppSettingsProvider } from "@/context/app-settings-context"
const CrowBackground = lazy(() => import("@/components/crow-background"))

export default function Page() {
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const slides = [
    { id: "intro", Component: SlideIntro },
    { id: "projects", Component: SlideProjects },
    { id: "silos", Component: SlideSilos },
    { id: "how-i-work", Component: SlideHowIWork },
    { id: "production", Component: SlideProduction },
    { id: "why-this-role", Component: SlideWhyThisRole },
    { id: "contact", Component: SlideContact },
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
      <Suspense fallback={null}>
        <CrowBackground />
      </Suspense>

      {/* Tree silhouette on left */}
      <div
        className="fixed left-0 bottom-0 -z-5 pointer-events-none hidden lg:block"
        style={{ width: "30vw", height: "100vh" }}
      >
        <img
          src="/tree.svg"
          alt=""
          className="absolute left-0 h-full w-auto object-contain object-left-bottom opacity-60"
          style={{ filter: "brightness(0.3)", bottom: "-35vh" }}
        />
      </div>

      {/* Tree silhouette on right (mirrored) */}
      <div
        className="fixed right-0 bottom-0 -z-5 pointer-events-none hidden lg:block"
        style={{ width: "30vw", height: "100vh" }}
      >
        <img
          src="/tree.svg"
          alt=""
          className="absolute right-0 h-full w-auto object-contain object-right-bottom opacity-60"
          style={{ filter: "brightness(0.3)", bottom: "-35vh", transform: "scaleX(-1)" }}
        />
      </div>

      <div className="h-screen overflow-y-scroll snap-y snap-mandatory pb-20">
        {slides.map((slide, index) => (
          <div key={slide.id} id={slide.id} ref={(el) => (slideRefs.current[index] = el)} className="snap-start">
            <slide.Component />
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
      <AmbientMusic />
    </AppSettingsProvider>
  )
}
