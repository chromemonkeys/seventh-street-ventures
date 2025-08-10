"use client"

import Slide from "@/components/slide"

interface SlideFiveProps {
  onJumpToSection: (index: number) => void // Function to jump to a specific slide index
}

export default function SlideFive({ onJumpToSection }: SlideFiveProps) {
  return (
    <Slide className="relative bg-[#FDFBF8] p-4 md:p-8 lg:p-12">
      {/* Right-to-left fade background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to left, rgba(243, 205, 162, 0.5), rgba(216, 207, 240, 0.5))", // Peach to Soft Lavender with 50% opacity
        }}
      />

      <div className="relative z-10 w-full max-w-6xl space-y-8 sm:space-y-12 lg:space-y-16 text-left">
        {/* Main heading */}
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-6xl text-gray-900">Hi, I'm Chris</h1>
        
        {/* Subheading */}
        <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl lg:text-4xl leading-tight">
          I Want to Help Mulga Build the Future of Defense Tech in Australia
        </h2>

        {/* TL;DR Section */}
        <div className="pt-4 sm:pt-6 lg:pt-8 space-y-4 sm:space-y-6">
          <h3 className="text-lg font-bold text-gray-700 sm:text-xl lg:text-2xl uppercase tracking-wider">TL;DR</h3>
          <p className="text-xl font-medium text-gray-800 sm:text-2xl lg:text-3xl leading-relaxed max-w-4xl">
            Former startup founder + data scientist eager to move into defense tech. Looking to contribute my skills while
            learning the industry and building something genuinely important.
          </p>
        </div>
      </div>
    </Slide>
  )
}
