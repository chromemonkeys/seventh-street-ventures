"use client"

import Slide from "@/components/slide"
import { motion } from "framer-motion"
import { Globe, Smartphone, FileText, Rocket, ExternalLink, Sparkles, MapPin } from "lucide-react"

export default function SlideProjects() {
  const projects = [
    {
      title: "solvo.com.au",
      description: "Idea to branding to content to production in 5 days. I wanted to see how fast one person could take something from nothing to live.",
      icon: Rocket,
      highlight: "5 days, end to end",
      url: "https://solvo.com.au",
    },
    {
      title: "Ditch Digital Detox",
      description: "Full Android app, live on the Play Store. Built in 7 days. I wanted to see if I could ship a native app solo.",
      icon: Smartphone,
      highlight: "7 days, live on Play Store",
      url: null,
    },
    {
      title: "basecore.co.uk",
      description: "A client-facing company website designed to stick in the mind of clients.",
      icon: Globe,
      highlight: "Brand-forward website",
      url: "https://basecore.co.uk",
    },
    {
      title: "Chronicle",
      description: "Cloud-based real-time document collaboration editor. I wanted to see how hard it would be to disrupt a core Atlassian product.",
      icon: FileText,
      highlight: "Real-time collaboration engine",
      url: "https://github.com/chromemonkeys/chronicle",
    },
    {
      title: "dreamcat.me",
      description: "AI-powered dream journal. Because not everything needs to be serious.",
      icon: Sparkles,
      highlight: "AI consumer app",
      url: "https://dreamcat.me",
    },
    {
      title: "streetle.click",
      description: "A geoguessing game. I like traveling to off the beaten track places.",
      icon: MapPin,
      highlight: "Browser game",
      url: "https://streetle.click",
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-2 md:mb-6"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            What I've Shipped Solo Recently
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mt-2">No team. No contractors. No agencies. Design, branding, content, code, deployment.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-4 w-full max-w-5xl">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start p-2 md:p-4 bg-white/50 backdrop-blur-xs rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#D8CFF0] flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                  <IconComponent className="w-3 h-3 md:w-4 md:h-4 text-[#6B46C1]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm md:text-base font-semibold text-gray-800 leading-tight">{project.title}</h3>
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-[#6B46C1] hover:text-[#553C9A] transition-colors">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-[#6B46C1] font-medium mt-0.5">{project.highlight}</p>
                  <p className="text-gray-700 text-xs md:text-sm mt-1 hidden md:block">{project.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 md:mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500"
        >
          <a href="https://github.com/chromemonkeys" target="_blank" rel="noopener noreferrer" className="hover:text-[#6B46C1] transition-colors flex items-center gap-1">
            github.com/chromemonkeys <ExternalLink className="w-3 h-3" />
          </a>
          <span className="hidden md:inline">|</span>
          <a href="https://badgerlabs.tech" target="_blank" rel="noopener noreferrer" className="hover:text-[#6B46C1] transition-colors flex items-center gap-1">
            badgerlabs.tech <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </Slide>
  )
}
