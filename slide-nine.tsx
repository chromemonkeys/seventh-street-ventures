"use client"

import Slide from "@/components/slide"
import { ArrowRight } from "lucide-react"

export default function SlideHowIWork() {
  return (
    <Slide className="relative bg-[#FDFBF8]/80 p-4 md:p-8 lg:p-12">
      <div className="relative z-10 w-full max-w-4xl mx-auto space-y-2 sm:space-y-6 lg:space-y-8">
        <div className="space-y-2 sm:space-y-6 text-left">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-6xl text-gray-900">How I Work</h1>
          <h2 className="text-lg font-semibold text-gray-800 sm:text-2xl lg:text-4xl">I treat AI agents like employees, not magic.</h2>
          <div className="space-y-1.5 sm:space-y-4">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">You still need to scope, plan, design, and think things through. Build detailed scaffolding and rails. Set up proper testing. The AI handles the volume. I handle the architecture and the decisions.</p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">Multiple agents, structured workflows. Breakneck speed coding without discipline creates tech debt that costs you more time than it saves. I've learned where the line is.</p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">The before and after: at GlowPay I managed a team of external developers to build an Android app and serverless backend. Ditch Digital Detox is the same kind of output. Full Android app, live on the Play Store. I built it solo in 7 days.</p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3 font-bold text-gray-800">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm sm:text-base">The skill isn't prompting. It's knowing what to build, how to architect it, and when to slow down.</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
