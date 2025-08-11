{
    name: "Prof. John Doe",
    role: "Semiconductor Research Lead",
    company: "MIT",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Ms. Emily Chen",
    role: "VP of Innovation",
    company: "e-infochip",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Dr. Michael Johnson",
    role: "Quantum Computing Expert",
    company: "IBM",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function GuestPage() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Our Distinguished Guests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guests.map((guest, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-64">
                <Image
                  src={guest.image || "/placeholder.svg"}
                  alt={guest.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300 hover:opacity-80"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{guest.name}</h3>
                <p className="text-blue-400 mb-1">{guest.role}</p>
                <p className="text-gray-400">{guest.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

