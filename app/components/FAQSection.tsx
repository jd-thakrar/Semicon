"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "Who can attend the Semiconductor Workshop?",
    answer:
      "The workshop is open to all college students interested in semiconductor technology, regardless of their year of study or major.",
  },
  {
    question: "What topics will be covered in the workshop?",
    answer:
      "The workshop will cover a range of topics including semiconductor design, fabrication processes, industry trends, and hands-on experience with FPGA programming.",
  },
  {
    question: "Do I need prior knowledge of semiconductors to attend?",
    answer:
      "While some basic understanding of electronics is helpful, the workshop is designed to accommodate students with varying levels of knowledge.",
  },
  {
    question: "Will there be networking opportunities with industry professionals?",
    answer:
      "Yes, the workshop includes a networking session where you can interact with professionals from Intel, e-infochip, and other industry leaders.",
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="flex justify-between items-center w-full text-left p-4 bg-gray-800 rounded-lg focus:outline-none"
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="ml-6">{activeIndex === index ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-700 p-4 rounded-b-lg mt-1"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
