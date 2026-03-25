"use client"

import Slide from "@/components/slide"
import { motion } from "framer-motion"
import { Shield, Server, Radio, Database } from "lucide-react"

export default function SlideProduction() {
  const items = [
    {
      title: "Mulga Defense, acoustic drone detection",
      description:
        "Employee #1 at a defense startup. Built an acoustic drone detection system using AI coding agents and hardware. TDOA algorithms for direction of arrival and deep learning for acoustic signature classification. Real product, real stakes.",
      icon: Radio,
      showMobileDescription: true,
    },
    {
      title: "GlowPay, fintech from scratch",
      description:
        "Co-founded a fintech. Python and TypeScript across the stack. AWS Lambda, API Gateway, DynamoDB. Four platform surfaces. SOC2 Type 1 in 8 weeks for $1,000 with no external consultants. Open banking activation.",
      icon: Server,
      showMobileDescription: false,
    },
    {
      title: "Infrastructure & DevOps",
      description:
        "Serverless by default. AWS Lambda, Cloudflare Workers, Vercel, Infrastructure as Code. CI/CD pipelines with automated testing. Monitoring, alerting, and logging so nothing breaks quietly. Build it right the first time.",
      icon: Shield,
      showMobileDescription: false,
    },
    {
      title: "Data & Security",
      description:
        "SQL and NoSQL database architecture. Python for AI/ML and data pipelines. Secure coding practices, dependency auditing. The boring stuff that keeps production systems alive.",
      icon: Database,
      showMobileDescription: false,
    },
  ]

  return (
    <Slide className="relative bg-[#FDFBF8]/80 p-4 md:p-8 lg:p-12 overflow-hidden flex flex-col justify-center items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to left, rgba(243, 205, 162, 0.2), rgba(216, 207, 240, 0.2))",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto py-2 md:py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-8 text-center tracking-tight"
        >
          Production Context
        </motion.h1>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-1.5 md:gap-6 w-full max-w-5xl">
          {items.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start p-2 md:p-4 bg-white/50 backdrop-blur-xs rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#D8CFF0] flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                  <IconComponent className="w-3 h-3 md:w-4 md:h-4 text-[#6B46C1]" />
                </div>
                <div>
                  <h3 className="text-sm md:text-lg font-semibold text-gray-800 leading-tight mb-1">{item.title}</h3>
                  <p className={`text-gray-700 text-xs md:text-sm ${item.showMobileDescription ? "" : "hidden md:block"}`}>{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Slide>
  )
}
