"use client"

import Slide from "@/components/slide"
import { ArrowRight, Play } from "lucide-react"

export default function SlideExample() {
  return (
    <Slide className="relative bg-[#FDFBF8] p-4 md:p-8 lg:p-12">
      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - Content */}
          <div className="space-y-4 sm:space-y-8 text-left">
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-6xl text-gray-900">Example</h1>
            
            <div className="space-y-2 sm:space-y-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
                <p className="text-sm text-gray-700 sm:text-base">
                  Simple acoustic triangulation proof of concept - turned out to be way more complex than expected, which was actually really valuable
                </p>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
                <p className="text-sm text-gray-700 sm:text-base">
                  Event detection dilemma - do you try to identify threats first (more false negatives) or capture everything then classify (more false positives)?
                </p>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
                <p className="text-sm text-gray-700 sm:text-base">
                  Data capture strategy - focus on volume spikes above background noise, or track frequency changes, or both?
                </p>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
                <p className="text-sm text-gray-700 sm:text-base">
                  Background noise is brutal - how do you filter out wind, traffic, machinery without losing actual threats?
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Video Placeholder */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-video bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center space-y-4 hover:bg-gray-50 transition-colors duration-200">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-gray-500 ml-1" />
              </div>
              <div className="text-center space-y-1">
                <p className="text-sm font-medium text-gray-600">Video Placeholder</p>
                <p className="text-xs text-gray-500">Demo or explanation video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
