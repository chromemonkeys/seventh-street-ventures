"use client" // Mark as a client component

import Slide from "@/components/slide"
import { Clock, Settings, XCircle } from "lucide-react" // Importing Lucide icons
import Image from "next/image" // Import Image component
import { useState } from "react" // Import useState for modal control
import DistributionModal from "@/components/distribution-modal" // Import the new modal component
import { useAppSettings } from "@/context/app-settings-context" // Import useAppSettings

export default function SlideTwo() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { contentSet } = useAppSettings() // Use context

  const problemStatement =
    contentSet === "set1"
      ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

  return (
    <Slide className="relative bg-[#FDFBF8] p-4 md:p-8 lg:p-12">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to right, rgba(243, 205, 162, 0.2), rgba(216, 207, 240, 0.2))", // Peach to Soft Lavender with 20% opacity for subtlety
        }}
      />

      {/* Decorative Image */}
      <Image
        src="/placeholder.svg"
        alt="Decorative graphic"
        width={250} // Smaller on mobile
        height={250} // Smaller on mobile
        className="absolute right-[-100px] top-1/2 -translate-y-1/2 z-0 object-contain opacity-70 sm:w-[450px] sm:h-[450px] sm:right-[-200px]" // Larger on desktop
      />

      <div className="relative z-10 w-full max-w-4xl space-y-4 text-left sm:space-y-8">
        {" "}
        {/* Smaller space on mobile */}
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-6xl">
          Lorem{" "}
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-gray-900 transition-colors duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 hover:text-gray-700"
            aria-label="Learn more"
          >
            ipsum
          </button>{" "}
          dolor sit amet.
        </h1>{" "}
        {/* Smaller on mobile */}
        <p className="text-base text-gray-700 sm:text-lg md:text-xl">{problemStatement}</p>
        <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-3">
          {" "}
          {/* Smaller gap on mobile */}
          <div className="flex flex-col items-start space-y-1.5 sm:space-y-2">
            {" "}
            {/* Smaller space on mobile */}
            <Clock className="h-6 w-6 flex-shrink-0 text-gray-600 sm:h-8 sm:w-8" /> {/* Smaller on mobile */}
            <h3 className="text-lg font-bold sm:text-xl">Lorem ipsum</h3> {/* Smaller on mobile */}
            <p className="text-sm text-gray-700 sm:text-base">Dolor sit amet, consectetur adipiscing elit.</p>{" "}
            {/* Smaller on mobile */}
          </div>
          <div className="flex flex-col items-start space-y-1.5 sm:space-y-2">
            <Settings className="h-6 w-6 flex-shrink-0 text-gray-600 sm:h-8 sm:w-8" />
            <h3 className="text-lg font-bold sm:text-xl">Consectetur</h3>
            <p className="text-sm text-gray-700 sm:text-base">Sed do eiusmod tempor incididunt ut labore.</p>
          </div>
          <div className="flex flex-col items-start space-y-1.5 sm:space-y-2">
            <XCircle className="h-6 w-6 flex-shrink-0 text-gray-600 sm:h-8 sm:w-8" />
            <h3 className="text-lg font-bold sm:text-xl">Adipiscing elit</h3>
            <p className="text-sm text-gray-700 sm:text-base">Ut enim ad minim veniam quis nostrud.</p>
          </div>
        </div>
      </div>

      {isModalOpen && <DistributionModal onClose={() => setIsModalOpen(false)} />}
    </Slide>
  )
}
