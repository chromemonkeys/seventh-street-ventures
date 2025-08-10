"use client"

import { X, Factory, ArrowDown, ShoppingBag, CheckCircle, Package } from "lucide-react"
import { useEffect, useState } from "react"

interface DistributionModalProps {
  onClose: () => void
}

export default function DistributionModal({ onClose }: DistributionModalProps) {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Add a slight delay before showing content for a smoother transition
    const timer = setTimeout(() => setShowContent(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div
        className={`relative h-[95vh] w-[95vw] max-w-6xl transform overflow-hidden rounded-xl bg-[#FDFBF8] shadow-2xl transition-all duration-500 ease-out ${
          showContent ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200 sm:right-8 sm:top-8"
          aria-label="Close modal"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        <div className="relative z-10 grid h-full w-full grid-cols-1 items-center gap-4 p-4 md:grid-cols-2 md:gap-8 md:p-8 lg:p-12 overflow-y-auto">
          {/* Left Column: Main Heading, Sub-heading, and Why Distributors Matter */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="mb-2 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="mx-auto mb-4 max-w-2xl text-sm text-gray-700 sm:text-base md:mx-0 md:text-lg">Consectetur adipiscing elit.</p>

            {/* Why Distributors Matter */}
            <div className="mt-auto w-full max-w-md space-y-3 text-center md:text-left">
              <h3 className="text-lg font-bold text-gray-800 md:text-xl">Lorem ipsum</h3>
              <ul className="mx-auto list-disc space-y-1 text-left text-xs text-gray-700 sm:text-sm md:mx-0 md:text-base">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-0.5 h-3 w-3 flex-shrink-0 text-[#F3CDA2] sm:h-4 sm:w-4" />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-0.5 h-3 w-3 flex-shrink-0 text-[#F3CDA2] sm:h-4 sm:w-4" />
                  <span>Automate complex processes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-0.5 h-3 w-3 flex-shrink-0 text-[#F3CDA2] sm:h-4 sm:w-4" />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Tiered Flow */}
          <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6">
            {/* Tier 1 */}
            <div className="flex h-28 w-full max-w-xs items-center rounded-lg bg-[#D8CFF0] bg-opacity-20 p-3 shadow-sm sm:h-32 sm:max-w-sm sm:p-4">
              <Factory className="mr-3 h-7 w-7 flex-shrink-0 text-[#D8CFF0] sm:h-8 sm:w-8" />
              <div className="flex flex-col justify-center text-left">
                <h3 className="text-base font-bold text-gray-800 sm:text-lg md:text-xl">Lorem Ipsum</h3>
                <p className="text-xs text-gray-700 sm:text-sm md:text-base">Dolor sit amet</p>
              </div>
            </div>

            {/* Flow Arrow 1 */}
            <ArrowDown className="h-5 w-5 text-gray-500 animate-bounce-slow sm:h-6 sm:w-6" />

            {/* Tier 2 */}
            <div className="flex h-28 w-full max-w-xs items-center rounded-lg bg-[#F3CDA2] bg-opacity-20 p-3 shadow-sm sm:h-32 sm:max-w-sm sm:p-4">
              <Package className="mr-3 h-7 w-7 flex-shrink-0 text-[#F3CDA2] sm:h-8 sm:w-8" />
              <div className="flex flex-col justify-center text-left">
                <h3 className="text-base font-bold text-gray-800 sm:text-lg md:text-xl">Consectetur</h3>
                <ul className="list-none p-0 m-0 space-y-0.5 text-xs text-gray-700 sm:text-sm md:text-base">
                  <li>Adipiscing elit</li>
                  <li>Sed do eiusmod</li>
                  <li>Tempor incididunt</li>
                </ul>
              </div>
            </div>

            {/* Flow Arrow 2 */}
            <ArrowDown className="h-5 w-5 text-gray-500 animate-bounce-slow animation-delay-1000 sm:h-6 sm:w-6" />

            {/* Tier 3 */}
            <div className="flex h-28 w-full max-w-xs items-center rounded-lg bg-[#D8CFF0] bg-opacity-20 p-3 shadow-sm sm:h-32 sm:max-w-sm sm:p-4">
              <ShoppingBag className="mr-3 h-7 w-7 flex-shrink-0 text-[#D8CFF0] sm:h-8 sm:w-8" />
              <div className="flex flex-col justify-center text-left">
                <h3 className="text-base font-bold text-gray-800 sm:text-lg md:text-xl">Tempor</h3>
                <p className="text-xs text-gray-700 sm:text-sm md:text-base">Incididunt ut labore et dolore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
