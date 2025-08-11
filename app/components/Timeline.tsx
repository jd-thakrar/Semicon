"use client"
import { motion } from "framer-motion"

const timelineEvents = [
{ time: "Day 1", event: "" },
  { time: "", event: "Registration & Welcome Coffee" },

  { time: "", event: "Keynote: Future of Semiconductors" },
  { time: "", event: "Workshop: Chip Design Fundamentals" },
  { time: "Day 2", event: "" },
  { time: "", event: "Overview of ATMP" },
  { time: "", event: "DFT Topics" },
  { time: "", event: "Expert Session" },
    { time: "Day 3", event: "" },
  { time: "", event: "Key insights of PD topics" },
  { time: "", event: "Physical Desing Veriffication" },
  { time: "", event: "Panel Discussion" },
  { time: "", event: "Valedictory Ceremony" },

]

export default function Timeline() {
  return (
    <section className="py-20 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Workshop Timeline</h2>
        <div className="relative">
          {timelineEvents.map((item, index) => (
            <motion.div
              key={index}
              className="mb-8 flex justify-between items-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-1/3 text-right pr-4">
                <h3 className="font-semibold text-blue-400">{item.time}</h3>
              </div>
              <div className="w-1/3 flex justify-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
              <div className="w-1/3 pl-4">
                <p>{item.event}</p>
              </div>
            </motion.div>
          ))}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500 transform -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  )
}

