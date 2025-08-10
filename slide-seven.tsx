"use client"

import Slide from "@/components/slide"
import { ArrowRight } from "lucide-react"
 

 

export default function SlideSeven() {

  return (
    <Slide className="relative bg-[#FDFBF8] p-4 md:p-8 lg:p-12">
      <div className="relative z-10 w-full max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
        <div className="space-y-4 sm:space-y-8 text-left">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-6xl text-gray-900">What Caught My Eye About Mulga</h1>
          <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl lg:text-4xl">Solving actual important problems</h2>
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">
              Defense tech combines a long term interest of mine in geopolitics and technology. 
              </p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">
              Advances in robotics are creating rapidly evolving threat problems that nimble fast startups are uniquely positioned to solve.
              </p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">Ground zero startup energy - creating something from nothing is exactly what excites me.              </p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3 font-bold text-gray-800">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm sm:text-base">
              Collaborative team structures without corporate politics are where I thrive and enjoy my work most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
