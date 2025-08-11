"use client"

import Slide from "@/components/slide"
import { ArrowRight, Play } from "lucide-react"

export default function SlideExample() {
  return (
    <Slide className="relative bg-[#FDFBF8] p-4 md:p-8 lg:p-12 overflow-hidden flex flex-col justify-center items-center">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to left, rgba(243, 205, 162, 0.1), rgba(216, 207, 240, 0.1))",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 md:space-y-6">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-6xl text-gray-900">Weekend Hackathon Example</h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Attempting to create a system that finds the location of ANY acoustic anomaly using Time Delay of Arrival logic to triangulate the object in a 2D or 3D space. But actually just in my room.
          </p>
        </div>

        {/* Video Section */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-5xl">
            <div className="relative">
              <video 
                className="w-full aspect-video rounded-2xl shadow-xl border border-gray-200/50 bg-black"
                controls
                preload="metadata"
                poster=""
              >
                <source src="/videos/TDOA-triangulation.webm" type="video/webm" />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl">
                  <div className="text-center space-y-2 p-6">
                    <p className="text-sm md:text-base text-gray-600">
                      Your browser doesn't support video playback.
                    </p>
                    <a 
                      href="/videos/TDOA-triangulation.webm" 
                      className="inline-block text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Download the video instead
                    </a>
                  </div>
                </div>
              </video>
              
              {/* Video overlay for better visual appeal */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
