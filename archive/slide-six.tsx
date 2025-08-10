"use client"

import Slide from "@/components/slide"

export default function SlideSix() {
  return (
    <Slide className="relative bg-[#FDFBF8] p-4 md:p-8 lg:p-12">
      <div className="relative z-10 w-full max-w-7xl">
        {/* Content Section - Centered */}
        <div className="space-y-4 sm:space-y-8 text-left">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-6xl text-gray-900">What Caught My Eye About Mulga</h1>
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <span className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5">→</span>
              <p className="text-sm text-gray-700 sm:text-base">You're solving actual important problems</p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <span className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5">→</span>
              <p className="text-sm text-gray-700 sm:text-base">Defense tech combines my interest in geopolitics and technology</p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <span className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5">→</span>
              <p className="text-sm text-gray-700 sm:text-base">Advances in robotics are creating rapidly evolving threat problems that nimble fast startups are best positioned to solve</p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <span className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5">→</span>
              <p className="text-sm text-gray-700 sm:text-base">Ground zero startup energy - creating something from nothing is exactly what excites me</p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3 font-bold text-gray-800">
              <span className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5">→</span>
              <p className="text-sm sm:text-base">Collaborative team structures without corporate politics are where I thrive and enjoy my work most</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
