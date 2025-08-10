"use client"

import Slide from "@/components/slide"
import { motion } from "framer-motion"
import { Target, FileText, Bot, TrendingUp, ReceiptText, Users } from "lucide-react"

export default function SlideNine() {
  const onboardingSteps = [
    {
      title: "Deep tech research",
      description:
        "Investigate latest technology challenges across domains. What are the latest threats and challenges faced? • What's currently being used in military and civilian environments. • Who are the Australian, US and Worldwide players? • What are their strengths and weaknesses?",
      icon: Target,
    },
    {
      title: "Data strategy and collection",
      description:
        "Collecting data to train models is crucial and takes time. With a strong archive, methodologies can be calibrated, adjusted, and reinvented faster to validate models. More data is generally better here.",
      icon: FileText,
    },
    {
      title: "Field research and deployment",
      description:
        "Find areas to set up sensors. Deploy different sensors and calibrate them to ensure accurate data collection. (We could even start testing in my yard with ~1km view and low background noise.)",
      icon: TrendingUp,
    },
    {
      title: "Building proof of concepts",
      description:
        "Start building now - getting hands dirty early surfaces all the complexities of the problem.",
      icon: Bot,
    },
    {
      title: "Network research",
      description:
        "Identify the right people to reach out to - the same way I found Mulga.",
      icon: Users,
    },
    {
      title: "Policies and compliance",
      description:
        "It's boring as hell, but crucial for clients - certifications and compliance will matter.",
      icon: ReceiptText,
    },
  ]

  return (
    <Slide className="relative bg-[#FDFBF8] p-4 md:p-8 lg:p-12 overflow-hidden flex flex-col justify-center items-center">
      {/* Subtle background gradient similar to Slide 5, but more transparent */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to left, rgba(243, 205, 162, 0.2), rgba(216, 207, 240, 0.2))",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto py-4 md:py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-8 text-center tracking-tight"
        >
          Immediate stuff I could dive into
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
