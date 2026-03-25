"use client"

import Slide from "@/components/slide"
import { ArrowRight } from "lucide-react"

export default function SlideWhyThisRole() {
  return (
    <Slide className="relative bg-[#FDFBF8] p-4 md:p-8 lg:p-12">
      <div className="relative z-10 w-full max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
        <div className="space-y-4 sm:space-y-8 text-left">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-6xl text-gray-900">Why This Role</h1>
          <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl lg:text-4xl">This is my dream role. Because it's how I already operate.</h2>
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">
                Most job descriptions ask you to be less than what you are. This one describes exactly what I've been doing on my own. Building across multiple businesses, owning everything end-to-end, using AI agents to move at a pace that shouldn't be possible for one person. You're not asking me to change how I work. You're asking me to do it for you.
              </p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">
                At GlowPay it was a two-person startup. I wore every hat. Engineering, compliance, architecture, contractor management, investor comms. I don't need a big team to feel productive. I need good problems and the room to solve them.
              </p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">
                My tech decisions have shaped business outcomes. SOC2 unlocked enterprise sales, serverless cut infrastructure costs, AI features became core product differentiators. That's what you want from a CTO.
              </p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3 font-bold text-gray-800">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm sm:text-base">
                I've spent the last two years building like this because I wanted to, not because someone was paying me to. Now someone is. That's why I'm here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
