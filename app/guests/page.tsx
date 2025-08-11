"use client"

import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"
import AnimatedHeading from "../components/AnimatedHeading"

interface Guest {
  name: string
  role: string
  company: string
  image: string
}

const guests: Guest[] = [
  {
    name: "Mr. Nilesh Ranpura",
    role: "Chief Guest",
    company: "Director ASIC-intel",
    image:
      "https://github.com/jd-thakrar/CNCWorkshop/blob/main/WhatsApp%20Image%202025-01-26%20at%2011.15.08%20AM.jpeg?raw=true",
  },
  {
    name: "Dr. Ashwin Dudhrejiya",
    role: "Invited Guest",
    company: "Principal, B.K. Modi Govt. Pharmacy college Rajkot",
    image: "https://github.com/jd-thakrar/CNCWorkshop/blob/main/ashwin%20dudhrejiya.jpg?raw=true",
  },
  {
    name: "Mr. S.S. Jani",
    role: "Invited Guest",
    company: "Executive Engineer, R&B, Rajkot",
    image: "https://github.com/jd-thakrar/CNCWorkshop/blob/main/Mr.%20Jani.jpeg?raw=true",
  },
  {
    name: "Mr. Gaffar Qureshi",
    role: "Invited Guest",
    company: "Founder and CEO Srusti Dhara",
    image: "https://github.com/jd-thakrar/CNCWorkshop/blob/main/Mr.%20GAFFAR.jpeg?raw=true",
  },
]

const expert: Guest[] = [
  {
    name: "Mr. Chintan Panchal",
    role: "Invited Guest",
    company: "having more than 24 years of ASIC/VLSI/Semiconductor industry experience.",
    image: "https://github.com/jd-thakrar/CNCWorkshop/blob/main/Mr.%20Chintan%20Panchal.jpg?raw=true",
  },
  {
    name: "Mr. Marmik Bhatt",
    role: "Invited Guest",
    company: "MonTech Technologies Ptv. Ltd.",
    image: "https://github.com/jd-thakrar/CNCWorkshop/blob/main/vol.jpg?raw=true",
  },
  {
    name: "Dr. Jignesh Patoliya",
    role: "Invited Guest",
    company: "Manager at E-infochips",
    image: "https://github.com/jd-thakrar/CNCWorkshop/blob/main/Dr.%20Jignesh%20Patoliya.jpg?raw=true",
  },
  {
    name: "Mr. Jay Goraseeya",
    role: "Invited Guest",
    company: "ASIC Design for test (DFT) Engineer in E-Infochips Ltd",
    image: "https://github.com/jd-thakrar/CNCWorkshop/blob/main/Mr.%20Jay%20Goraseeya.jpg?raw=true",
  },
  {
    name: "Mr. Dhaval Fichadiya",
    role: "Invited Guest",
    company: "ASIC Design for test (DFT) Engineer in E-Infochips Ltd",
    image: "https://github.com/jd-thakrar/CNCWorkshop/blob/main/Mr.%20Dhaval%20Fichadia.jpeg?raw=true",
  },
  {
    name: "Mr. Sunil Bhatt",
    role: "Invited Guest",
    company: "DFT Design Engineer at Intel Corporation, Penang Malaysia",
    image: "https://github.com/jd-thakrar/CNCWorkshop/blob/main/vol.jpg?raw=true",
  },
  {
    name: "Dr. Dipesh Panchal",
    role: "Invited Guest",
    company: "ASIC Physical Design Engineer in eInfochips Ltd, Ahemdabad",
    image: "https://github.com/jd-thakrar/CNCWorkshop/blob/main/Dr.%20Dipesh%20Panchal.jpg?raw=true",
  },
  {
    name: "Dr. Jayesh Munjani",
    role: "Invited Guest",
    company: "ASIC Physical Design Engineer at E-Infochips Ltd, Ahmedabad",
    image: "https://github.com/jd-thakrar/CNCWorkshop/blob/main/Mr.%20Jayesh%20Munjani.jpeg?raw=true",
  },
]

export default function GuestsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Header />
      <section className="py-16 px-4">
        <div className="container mx-auto mb-16 mt-24">
          <div className="text-center mb-16">
            <AnimatedHeading>Our Distinguished Guests</AnimatedHeading>
            <p className="text-xl text-gray-400">Visionaries Shaping the Future of Semiconductors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guests.map((guest, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={guest.image || "/placeholder.svg"}
                    alt={guest.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 hover:opacity-80"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-2">{guest.name}</h2>
                  <p className="text-blue-400 mb-1">{guest.role}</p>
                  <p className="text-gray-400">{guest.company}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mb-16 mt-24">
            <AnimatedHeading>Our Experts</AnimatedHeading>
            <p className="text-xl text-gray-400">Leading Minds in Semiconductor Innovation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expert.map((expert, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={expert.image || "/placeholder.svg"}
                    alt={expert.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 hover:opacity-80"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-2">{expert.name}</h2>
                  <p className="text-blue-400 mb-1">{expert.role}</p>
                  <p className="text-gray-400">{expert.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
