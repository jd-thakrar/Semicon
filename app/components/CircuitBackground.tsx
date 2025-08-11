"use client"
import { motion } from "framer-motion"

export default function CircuitBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <motion.path
              d="M10 10 L190 10 L190 190 L10 190 Z"
              fill="none"
              stroke="#f5f7ff"
              strokeWidth="0.5"
              
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            />
           
            <motion.path
              d="M10 100 H190 M100 10 V190"
              fill="none"
              stroke="#f5f7ff"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: 1 }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  )
}

