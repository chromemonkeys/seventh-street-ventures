"use client"

import Slide from "@/components/slide"
import { motion } from "framer-motion"
import { FileText, DollarSign, Target, Bot, ReceiptText, TrendingUp } from "lucide-react"

export default function SlideTenOnboarding() {
  const onboardingSteps = [
    {
      title: "Big picture strategy",
      description:
        "How to strategically position Mulga’s value prop when there’s lots of high well funded tech players competing in the space.",
      icon: Target,
    },
    {
      title: "Potential collaborators",
      description:
        "Inside or outside the defence space that could be leveraged — e.g. university partnerships, adjacent technologies and applications.",
      icon: FileText,
    },
  ]

  return (
    <Slide className="relative bg-[#FDFBF8] p-4 md:p-8 lg:p-12 overflow-hidden flex flex-col justify-center items-center">
      {/* Subtle background gradient similar to Slide 5, but more transparent */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to left, rgba(243, 205, 162, 0.2), rgba(216, 207, 240, 0.2))", // Peach to Soft Lavender with 20% opacity
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto py-4 md:py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-8 text-center tracking-tight"
        >
          Bigger picture ideas
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 md:gap-x-6 md:gap-y-8 w-full max-w-5xl">
          {onboardingSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start p-3 md:p-4 bg-white/50 backdrop-blur-xs rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#D8CFF0] flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                  <IconComponent className="w-3 h-3 md:w-4 md:h-4 text-[#6B46C1]" />
                </div>
                <div>
                  <h3 className="text-sm md:text-lg font-semibold text-gray-800 leading-tight mb-1">{step.title}</h3>
                  <p className="text-gray-700 text-xs md:text-sm">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Slide>
  )
}
