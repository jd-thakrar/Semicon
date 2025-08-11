"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Semiconductor Design and Development
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          The leading event in semiconductor design and Development.
        </p>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeieYJzi2zmccbzRSOwCH5wVjqf57m3keTkNk4NVfPM4Otehw/closedform">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors text-lg"
          >
            Register
          </motion.button>
        </Link>
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
      <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M50,100 L100,50 L150,100 L100,150 Z"
            fill="none"
            stroke="#4299e1"
            opacity="0.2"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="30"
            fill="#4299e1"
            opacity="0.2"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          />
        </svg>
      </motion.div>
    </section>
  )
}
