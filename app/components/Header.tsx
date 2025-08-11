"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-gray-800 bg-opacity-80 backdrop-blur-md fixed w-full z-50"
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          SemiCon 2025
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
          </li>
          
          <li>
            <Link href="/guests" className="hover:text-blue-400 transition-colors">
              Guests
            </Link>
          </li>
          <li>
            <Link href="/team" className="hover:text-blue-400 transition-colors">
              Team
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}

