"use client"

import Slide from "@/components/slide"
import { ArrowRight } from "lucide-react"

export default function SlideElevenTheDeal() {
  return (
    <Slide className="relative bg-[#FDFBF8] p-4 md:p-8 lg:p-12">
      <div className="relative z-10 w-full max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
        <div className="space-y-4 sm:space-y-8 text-left">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-6xl text-gray-900">The Deal</h1>
          <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl lg:text-4xl">I want to volunteer my time initially because:</h2>
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">
                This tech is genuinely exciting
              </p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">
                I want to get hands on experience that I can use to help me move into the Defense and Robotics sector
              </p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">
                I believe in strengthening sovereign capabilities
              </p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3 font-bold text-gray-800">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm sm:text-base">
                You guys seem like you've got the skills and attitude to build something cool here and I would like to be a part of it
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
