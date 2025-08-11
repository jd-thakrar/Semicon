import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center text-center">
            <Image
              src="https://github.com/jd-thakrar/CNCWorkshop/blob/main/DICB.jpeg?raw=true"
              alt="DIC Logo"
              className="mb-4 w-auto h-20"
            />
            <p className="text-sm text-gray-400">
              Design Innovation Center, AVPTI, Rajkot
              <br />© 2025 Semiconductor Workshop. All rights reserved.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400 mb-2">Email: dicavpti2025@gmail.com</p>
            <p className="text-sm text-gray-400"></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

