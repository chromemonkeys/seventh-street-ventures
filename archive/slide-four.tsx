"use client"

import Slide from "@/components/slide"
import { Bot, Zap, Globe, CheckCircle } from "lucide-react" // Importing Lucide icons
import { useAppSettings } from "@/context/app-settings-context" // Import useAppSettings

export default function SlideFour() {
  const { contentSet } = useAppSettings() // Use context

  const solutionStatement =
    contentSet === "set1"
      ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit:"
      : "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

  return (
    <Slide className="relative bg-[#FDFBF8] p-4 md:p-8 lg:p-12">
      <div className="relative z-10 w-full max-w-4xl space-y-4 sm:space-y-8 text-left">
        {" "}
        {/* Smaller space on mobile */}
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-6xl">Why Company ABC.</h1>{" "}
        {/* Smaller on mobile */}
        <p className="text-base text-gray-700 sm:text-lg md:text-xl">{solutionStatement}</p>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {" "}
          {/* Smaller gap on mobile */}
          <div className="flex items-start space-x-2 sm:space-x-3">
            {" "}
            {/* Smaller space on mobile */}
            <Bot className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-6 sm:w-6" />{" "}
            {/* Smaller on mobile */}
            <div>
              <h3 className="text-lg font-bold sm:text-xl">Lorem ipsum</h3> {/* Smaller on mobile */}
              <p className="text-sm text-gray-700 sm:text-base">Dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="flex items-start space-x-2 sm:space-x-3">
            <Zap className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-6 sm:w-6" />
            <div>
              <h3 className="text-lg font-bold sm:text-xl">Consectetur</h3>
              <p className="text-sm text-gray-700 sm:text-base">Sed do eiusmod tempor incididunt ut labore.</p>
            </div>
          </div>
          <div className="flex items-start space-x-2 sm:space-x-3">
            <Globe className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-6 sm:w-6" />
            <div>
              <h3 className="text-lg font-bold sm:text-xl">Adipiscing elit</h3>
              <p className="text-sm text-gray-700 sm:text-base">Ut enim ad minim veniam quis nostrud.</p>
            </div>
          </div>
          <div className="flex items-start space-x-2 sm:space-x-3">
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-6 sm:w-6" />
            <div>
              <h3 className="text-lg font-bold sm:text-xl">Duis aute</h3>
              <p className="text-sm text-gray-700 sm:text-base">Irure dolor in reprehenderit in voluptate.</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
