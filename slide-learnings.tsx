"use client"

import Slide from "@/components/slide"
import { ArrowRight } from "lucide-react"

export default function SlideLearnings() {
  return (
    <Slide className="relative bg-[#FDFBF8] p-4 md:p-8 lg:p-12">
      <div className="relative z-10 w-full max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
        <div className="space-y-4 sm:space-y-8 text-left">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-6xl text-gray-900">Learnings</h1>
          
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">
                If you can estimate the location of an anomaly you can train other sensors to magnify on that area to help with identification
              </p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">
                Clock sync of microphones is critical and needs to be solved differently depending on the context
              </p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">
                Even with synced clocks, aligning events is difficult. This basic system just detects volumes above a threshold but a more sophisticated one would want to use a shazam-style algorithm to identify spectral peaks and align the audio fingerprints from each device
              </p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">
                Need ways of filtering background noise, basic methods can work but will probably fail in noisy, windy or otherwise complex environments
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
