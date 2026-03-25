"use client"

import Slide from "@/components/slide"
import { ArrowRight, ExternalLink, Linkedin } from "lucide-react"

export default function SlideContact() {
  return (
    <Slide className="relative bg-[#FDFBF8]/80 p-4 md:p-8 lg:p-12 overflow-hidden flex flex-col justify-center items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to left, rgba(243, 205, 162, 0.5), rgba(216, 207, 240, 0.5))",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto space-y-2 sm:space-y-6 lg:space-y-8">
        <div className="space-y-2 sm:space-y-6 text-left">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-6xl text-gray-900">Let's chat</h1>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">
                This presentation is a Next.js app built with Claude Code. You're looking at the proof.
              </p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-5 sm:w-5" />
              <p className="text-sm text-gray-700 sm:text-base">
                The design, content, and engineering were all done by me and my AI toolkit. The same way I'd build software for your portfolio companies.
              </p>
            </div>
          </div>

          <div className="pt-2 sm:pt-4">
            <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl lg:text-4xl leading-tight">
              Chris Milner
            </h2>

            <div className="space-y-2 sm:space-y-3 mt-3">
              <p className="text-sm sm:text-base text-gray-700">
                chris.milner@protonmail.com
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                +61 423 403 440
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="https://badgerlabs.tech" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-[#6B46C1] hover:text-[#553C9A] transition-colors flex items-center gap-1">
                  badgerlabs.tech <ExternalLink className="w-3 h-3" />
                </a>
                <a href="https://github.com/chromemonkeys" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-[#6B46C1] hover:text-[#553C9A] transition-colors flex items-center gap-1">
                  github.com/chromemonkeys <ExternalLink className="w-3 h-3" />
                </a>
                <a href="https://www.linkedin.com/in/christopher-milner-50463229/" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-[#6B46C1] hover:text-[#553C9A] transition-colors flex items-center gap-1">
                  LinkedIn <Linkedin className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
