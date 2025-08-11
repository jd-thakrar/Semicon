"use client"
import { useState } from "react"
import { motion } from "framer-motion"

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    year: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <section id="register" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Register for the Workshop</h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg border border-blue-500"
        >
          {Object.entries(formData).map(([key, value], index) => (
            <motion.div
              key={key}
              className="mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <label htmlFor={key} className="block mb-2 capitalize">
                {key}
              </label>
              <input
                type={key === "email" ? "email" : "text"}
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </motion.div>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors mt-6"
          >
            Submit Registration
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

