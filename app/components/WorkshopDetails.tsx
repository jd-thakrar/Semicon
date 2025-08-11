"use client"
import { motion } from "framer-motion"

export default function WorkshopDetails() {
  const details = [
    { icon: "🗓️", title: "Date", content: "January 27-29, 2025" },
    { icon: "🏫", title: "Venue", content: "GISC, AVPTI, Rakot" },
    { icon: "👥", title: "Participants", content: "Limited to 70 students" },
    { icon: "💡", title: "Topics", content: "Semiconductor Design, Fabrication, and Future Technologies" },
  ]

  return (
    <section id="details" className="py-20 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Workshop Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{detail.icon}</span>
                <h3 className="text-xl font-semibold">{detail.title}</h3>
              </div>
              <p>{detail.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
