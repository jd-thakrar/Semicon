"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedHeading from "./AnimatedHeading"

interface ProgramHighlight {
  title: string
  description: string
  icon: string
}

export default function SponsorSection() {
  const programHighlights: ProgramHighlight[] = [
    {
      title: "Expert-Led Workshops",
      description: "Hands-on sessions guided by industry professionals",
      icon: "🔬",
    },
    {
      title: "Networking Opportunities",
      description: "Connect with leaders in semiconductor industry",
      icon: "🤝",
    },
    {
      title: "Cutting-Edge Topics",
      description: "Explore the latest in semiconductor design and development",
      icon: "💡",
    },
    {
      title: "Career Insights",
      description: "Gain valuable perspectives on career paths in semiconductors",
      icon: "🚀",
    },
  ]

  return (
    <section className="py-20 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedHeading>Program Highlights</AnimatedHeading>
          <p className="text-xl text-gray-400">Key features of our Semiconductor Workshop</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {programHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-gray-400">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

