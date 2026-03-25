"use client"

import Slide from "@/components/slide"

export default function SlideIntro() {
  return (
    <Slide className="relative bg-[#FDFBF8]/80 p-4 md:p-8 lg:p-12">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to left, rgba(243, 205, 162, 0.5), rgba(216, 207, 240, 0.5))",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl space-y-4 sm:space-y-8 lg:space-y-16 text-left">
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-6xl text-gray-900">Hi, I'm Chris</h1>

        <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl lg:text-4xl leading-tight">
          You said don't send a generic CV. So I built this instead.
        </h2>

        <div className="pt-2 sm:pt-6 lg:pt-8 space-y-2 sm:space-y-6">
          <h3 className="text-lg font-bold text-gray-700 sm:text-xl lg:text-2xl uppercase tracking-wider">TL;DR</h3>
          <p className="text-base font-medium text-gray-800 sm:text-2xl lg:text-3xl leading-relaxed max-w-4xl">
            I'm a builder. Not a frontend dev, not a backend dev, not a designer. I do the whole thing. Design, branding, content, engineering, deployment. 14 years of doing this across startups, fintech, defense tech, and consulting.
          </p>
        </div>
      </div>
    </Slide>
  )
}
