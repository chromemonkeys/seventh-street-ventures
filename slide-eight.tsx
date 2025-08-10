"use client"

import Slide from "@/components/slide"
import { ArrowRight } from "lucide-react"

export default function SlideEight() {

  return (
    <Slide className="relative bg-[#FDFBF8] p-4 md:p-8 lg:p-12">
      <div className="relative z-10 w-full max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
        <div className="space-y-4 sm:space-y-8 text-left">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-6xl text-gray-900">How I Can Actually Help</h1>
          <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl lg:text-4xl">Data Science & ML Experience</h2>
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">Python ML and analytics with a generalist approach that lets me integrate across different systems</p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">Strong data fundamentals - know how to build quality datasets and avoid the pitfalls that kill ML projects</p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">Deployment context awareness - proof-of-concept vs data gathering vs forward-deployed systems need different approaches, but without wanting to redo work from scratch each time</p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3 font-bold text-gray-800">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm sm:text-base">Practical ML implementation - focused on what actually works rather than what's theoretically perfect</p>
            </div>
          </div>

          {/* Second section */}
          <div className="pt-2 sm:pt-4 lg:pt-6">
            <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl lg:text-4xl">Startup Generalist Skills</h2>
            <div className="mt-2 space-y-2 sm:mt-3 sm:space-y-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
                <p className="text-sm text-gray-700 sm:text-base">Two-person startup experience - wore every hat from compliance certifications to contractor management</p>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
                <p className="text-sm text-gray-700 sm:text-base">"Scrappy but not crappy" philosophy - build fit-for-purpose solutions that actually ship</p>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
                <p className="text-sm text-gray-700 sm:text-base">Technical specification and validation - experience writing specs for contractors and ensuring quality delivery</p>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3 font-bold text-gray-800">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
                <p className="text-sm sm:text-base">Getting stuff done - track record of figuring things out and actually delivering results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
