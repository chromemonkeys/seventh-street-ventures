"use client"

import { ChevronUp, ChevronDown, Maximize, Minimize } from "lucide-react"
import { useState } from "react"

interface VerticalNavigationProps {
  numSlides: number
  activeSlideIndex: number
  onDotClick: (index: number) => void
  isFullScreen: boolean
  toggleFullScreen: () => void
  className?: string
}

export default function VerticalNavigation({
  numSlides,
  activeSlideIndex,
  onDotClick,
  isFullScreen,
  toggleFullScreen,
  className = "",
}: VerticalNavigationProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // One-word descriptions for each slide
  const slideDescriptions = [
    "Section 1",
    "Section 2",
    "Section 3",
    "Section 4",
    "Section 5",
    "Section 6",
    "Section 7",
    "Section 8",
    "Section 9",
    "Section 10",
    "Section 11",
  ]

  return (
    <div className={`fixed top-1/2 right-6 -translate-y-1/2 flex flex-col items-end space-y-2 z-50 ${className}`}>
      {/* Full Screen Toggle Button - aligned to right */}
      <div className="flex justify-end">
        <button
          onClick={toggleFullScreen}
          className="h-4 w-4 rounded-full bg-[#CBD5E1] hover:bg-[#FFEDD5] hover:shadow-sm transition-colors duration-300 ease-out focus:outline-none flex items-center justify-center"
          aria-label={isFullScreen ? "Exit full screen" : "Enter full screen"}
        >
          {isFullScreen ? (
            <Minimize className="h-2.5 w-2.5 text-gray-700" />
          ) : (
            <Maximize className="h-2.5 w-2.5 text-gray-700" />
          )}
        </button>
      </div>

      {/* Up Arrow Button - aligned to right */}
      <div className="flex justify-end">
        <button
          className="h-4 w-4 rounded-full bg-[#CBD5E1] hover:bg-[#FFEDD5] hover:shadow-sm transition-colors duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          onClick={() => onDotClick(activeSlideIndex - 1)}
          disabled={activeSlideIndex === 0}
          aria-label="Go to previous slide"
        >
          <ChevronUp className="h-2.5 w-2.5 text-gray-700" />
        </button>
      </div>

      {/* Navigation Dots with Numbers and Labels */}
      <div className="flex flex-col space-y-2 items-end">
        {Array.from({ length: numSlides }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-end space-x-1.5"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <button
              className={`text-[10px] text-right transition-all duration-300 ease-out cursor-pointer ${
                activeSlideIndex === index
                  ? "text-gray-600 opacity-80"
                  : hoveredIndex === index
                    ? "text-gray-600 opacity-100"
                    : "text-gray-500 opacity-40"
              }`}
              onClick={() => onDotClick(index)}
              aria-label={`Go to slide ${index + 1}: ${slideDescriptions[index]}`}
            >
              {slideDescriptions[index]}
            </button>
            <button
              className={`h-4 w-4 rounded-full transition-all duration-300 ease-out focus:outline-none flex items-center justify-center text-[9px] font-medium ${
                activeSlideIndex === index
                  ? "bg-[#D8CFF0] shadow-md text-gray-800"
                  : hoveredIndex === index
                    ? "bg-[#FFEDD5] shadow-sm text-gray-700"
                    : "bg-[#CBD5E1] text-gray-600"
              }`}
              onClick={() => onDotClick(index)}
              aria-label={`Go to slide ${index + 1}: ${slideDescriptions[index]}`}
            >
              {index + 1}
            </button>
          </div>
        ))}
      </div>

      {/* Down Arrow Button - aligned to right */}
      <div className="flex justify-end">
        <button
          className="h-4 w-4 rounded-full bg-[#CBD5E1] hover:bg-[#FFEDD5] hover:shadow-sm transition-colors duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          onClick={() => onDotClick(activeSlideIndex + 1)}
          disabled={activeSlideIndex === numSlides - 1}
          aria-label="Go to next slide"
        >
          <ChevronDown className="h-2.5 w-2.5 text-gray-700" />
        </button>
      </div>
    </div>
  )
}
