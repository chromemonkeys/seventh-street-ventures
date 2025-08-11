"use client"

import Slide from "@/components/slide"

export default function SlideTwelveGetStarted() {
  return (
    <Slide className="relative bg-[#FDFBF8] p-4 md:p-8 lg:p-12 overflow-hidden flex flex-col justify-center items-center">
      {/* Subtle background gradient similar to other theme slides */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to left, rgba(243, 205, 162, 0.5), rgba(216, 207, 240, 0.5))", // Peach to Soft Lavender with 50% opacity
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
        <div className="space-y-4 sm:space-y-8 text-left">
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-6xl text-gray-900">Let's chat</h1>
          
          <div className="space-y-4 sm:space-y-6">
          <p className="text-xl font-medium text-gray-800 sm:text-2xl lg:text-3xl leading-relaxed max-w-4xl">
              Ready to contribute to something that actually matters. 
              <br /><br />
              Plus+ working on defense tech that operates in contested environments sounds way cooler than optimizing click-through rates.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl lg:text-4xl leading-tight">
              What do you think? 
              <br />
              Where can I be most useful?
            </h2>
          </div>
        </div>
      </div>
    </Slide>
  )
}
