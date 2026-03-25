"use client"

import Slide from "@/components/slide"
import { ArrowRight } from "lucide-react"

export default function SilosAreDead() {
  return (
    <Slide className="relative bg-[#FDFBF8]/80 p-4 md:p-8 lg:p-12">
      <div className="relative z-10 w-full max-w-4xl mx-auto space-y-2 sm:space-y-6 lg:space-y-8">
        <div className="space-y-2 sm:space-y-6 text-left">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-6xl text-gray-900">Silos Are Dead</h1>
          <h2 className="text-lg font-semibold text-gray-800 sm:text-2xl lg:text-4xl">The lines between disciplines are blurring fast.</h2>
          <div className="space-y-1.5 sm:space-y-4">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">The traditional split between frontend, backend, and design is becoming less rigid. AI agents mean one person with the right skills and the right tools can cover what used to require a cross-functional team.</p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">Every project on the previous slide. I did the design, the branding, the content, the engineering, and the deployment. No Figma handoffs. No waiting on another team. No outsourcing.</p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">Stack agnosticism matters too. Deep expertise in one framework matters less than it used to. The skill is knowing what to build and how to architect it, then using the right tool for the job.</p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3 font-bold text-gray-800">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm sm:text-base">I've been proving this for the last 12 months. Six products, six different domains, one person.</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
