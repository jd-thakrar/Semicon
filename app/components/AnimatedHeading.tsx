"use client"

import { motion } from "framer-motion"

interface AnimatedHeadingProps {
  children: React.ReactNode
}

export default function AnimatedHeading({ children }: AnimatedHeadingProps) {
  return (
    <motion.h1
      className="text-5xl font-bold text-blue-400 mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h1>
  )
}

