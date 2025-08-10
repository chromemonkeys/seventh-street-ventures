"use client"

import Image from "next/image"
import Slide from "@/components/slide"
import { Button } from "@/components/ui/button"
import { useAppSettings } from "@/context/app-settings-context" // Import useAppSettings

export default function SlideOne() {
  const { contentSet, setContentSet } = useAppSettings() // Use context

  return (
    <Slide className="relative p-4 md:p-8 lg:p-12">
      {/* Background Image */}
      <Image
        src="/placeholder.svg"
        alt="Placeholder background"
        fill
        className="absolute inset-0 object-cover"
        priority // Load background image with high priority
      />

      {/* Company Logo */}
      <div className="absolute left-4 top-4 sm:left-8 sm:top-8 z-20">
        <Image
          src="/placeholder-logo.svg"
          alt="Company ABC Logo"
          width={120} // Set to original intrinsic width
          height={40} // Set to original intrinsic height
          className="w-20 sm:w-[120px]" // Control rendered width, height will scale proportionally
        />
      </div>

      {/* Abstract bubbles background, positioned on the right */}
      <Image
        src="/placeholder.svg"
        alt="Decorative graphic"
        width={300} // Smaller on mobile
        height={300} // Smaller on mobile
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 opacity-50 sm:w-[600px] sm:h-[600px]" // Larger on desktop
        style={{ objectFit: "contain" }}
      />

      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-4 sm:gap-8 md:grid-cols-2 lg:gap-16">
        {/* Smaller gap on mobile */}
        {/* Content Section - Left Aligned */}
        <div className="space-y-2 sm:space-y-4 text-left md:col-span-1">
          {/* Smaller space on mobile */}
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-6xl">Hi, I\'m Chris</h1>
          {/* Smaller on mobile */}
          <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl lg:text-4xl">I want to help Mulga build the future of defense tech in Australia</h2>

          {/* TL;DR Section */}
          <div className="pt-1 sm:pt-2 lg:pt-3">
            <p className="text-[11px] sm:text-xs uppercase tracking-wide text-gray-600">TL;DR</p>
            <p className="mt-1 text-sm sm:text-base text-gray-900 max-w-prose">
              Former startup founder + data scientist eager to move into defense tech. Looking to contribute my skills while
              learning the industry and building something genuinely important.
            </p>
          </div>
        </div>
        {/* The second column implicitly holds the space for the absolutely positioned bubbles */}
        <div className="md:col-span-1" />
      </div>

      {/* Distributor / Direct Selector */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-1.5 rounded-full bg-white/10 p-0.5 backdrop-blur-xs border border-gray-100/50">
        <Button
          variant="ghost" // Use ghost variant for no background/border
          onClick={() => setContentSet("set1")}
          className={`h-7 px-3 text-xs rounded-full transition-colors duration-200 ${
            contentSet === "set1"
              ? "text-gray-900 font-semibold" // Active: slightly darker, bold text
              : "text-gray-500" // Inactive: lighter text
          } hover:bg-transparent hover:text-gray-700`}
        >
          Content Set 1
        </Button>
        <Button
          variant="ghost" // Use ghost variant for no background/border
          onClick={() => setContentSet("set2")}
          className={`h-7 px-3 text-xs rounded-full transition-colors duration-200 ${
            contentSet === "set2"
              ? "text-gray-900 font-semibold" // Active: slightly darker, bold text
              : "text-gray-500" // Inactive: lighter text
          } hover:bg-transparent hover:text-gray-700`}
        >
          Content Set 2
        </Button>
      </div>
    </Slide>
  )
}
