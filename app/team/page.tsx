import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"
import AnimatedHeading from "../components/AnimatedHeading"

interface TeamMember {
  name: string
  role: string
  company: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Parvez. K. Faruki",
    role: "Head of Department",
    company: "Information Technology, AVPTI- Rajkot",
    image:
      "https://github.com/jd-thakrar/CNCWorkshop/blob/main/WhatsApp%20Image%202025-01-19%20at%202.45.40%20PM.jpeg?raw=true",
  },
  {
    name: "Dr. P. P. Kotak",
    role: "Principal",
    company: "AVPTI- Rajkot",
    image: "https://dicrajkot.github.io/cnc_workshop/ppk.jpg",
  },
]

const team: TeamMember[] = [
  {
    name: "Mr. Niraj Trivedi",
    role: "",
    company: "Lecturer, CE Department, AVPTI- Rajkot",
    image: "https://dicrajkot.github.io/cnc_workshop/N%20R.jpeg",
  },
  {
    name: "Mr. Bhagirath Bhatt",
    role: "",
    company: "Lecturer, EC Department, AVPTI- Rajkot",
    image: "https://dicrajkot.github.io/cnc_workshop/Bh.jpeg",
  },
  {
    name: "Mr. Pragnesh Chavda",
    role: "",
    company: "Lecturer, ME (Workshop), AVPTI- Rajkot",
    image: "https://dicrajkot.github.io/cnc_workshop/C.jpeg",
  },
  {
    name: "Mr. Kirit Hothi",
    role: "",
    company: "Lecturer, Electrical Engineering, AVPTI- Rajkot",
    image: "https://dicrajkot.github.io/cnc_workshop/K%20H.jpeg",
  },
  {
    name: "Mr. Dhaval Dhokiya",
    role: "",
    company: "Lecturer, Instrumentation and control Engineering, AVPTI- Rajkot",
    image: "https://dicrajkot.github.io/cnc_workshop/D%20H.jpeg",
  },
  {
    name: "Mr. A.N. Katariya",
    role: "",
    company: "Lecturer, Bio-Medical Department, AVPTI- Rajkot",
    image: "https://dicrajkot.github.io/cnc_workshop/Ka.jpeg",
  },
]

const vol: TeamMember[] = [
  {
    name: "Vishwa Chauhan",
    role: "Dais Team",
    company: "",
    image: "https://dicrajkot.github.io/cnc_workshop/Vi.jpg",
  },
  {
    name: "Tulja Dhabaliya",
    role: "Dais Team",
    company: "",
    image: "https://dicrajkot.github.io/cnc_workshop/T%20J.jpg",
  },
  {
    name: "Vini Ashara",
    role: "Dais Team",
    company: "",
    image: "https://dicrajkot.github.io/cnc_workshop/Vini.jpg",
  },
  {
    name: "Chaitanya Thakara",
    role: "Coordinator",
    company: "",
    image: "https://dicrajkot.github.io/cnc_workshop/Ch.jpg",
  },
  {
    name: "Thakrar Jeet",
    role: "Coordinator",
    company: "",
    image: "https://dicrajkot.github.io/cnc_workshop/J%20T.jpeg",
  },
  {
    name: "Solanki Priyanshi",
    role: "Creative Team",
    company: "",
    image: "https://dicrajkot.github.io/cnc_workshop/P%20S.jpeg",
  },
  {
    name: "Lakhani Misri",
    role: "Creative Team",
    company: "",
    image: "https://dicrajkot.github.io/cnc_workshop/M.jpeg",
  },
  {
    name: "Pithadiya Janvi",
    role: "Web Developer",
    company: "",
    image: "https://dicrajkot.github.io/cnc_workshop/JhP.jpeg",
  },
  {
    name: "Bhavyaa Oza",
    role: "Participant Support Team",
    company: "",
    image: "https://dicrajkot.github.io/cnc_workshop/BH.jpg",
  },
  {
    name: "Drashty Patadiya",
    role: "Participant Support Team",
    company: "",
    image: "https://dicrajkot.github.io/cnc_workshop/D.jpeg",
  },
  {
    name: "Tanisha Rathod",
    role: "Participant Support Team",
    company: "",
    image: "https://dicrajkot.github.io/cnc_workshop/T%20RR.jpeg",
  },
  {
    name: "Kacha Sarang",
    role: "Videography Team",
    company: "",
    image: "https://dicrajkot.github.io/cnc_workshop/SA.jpg",
  },
  {
    name: "Helly sureja",
    role: "Participant Support Team",
    company: "",
    image: "https://dicrajkot.github.io/cnc_workshop/hel.jpg",
  },
  {
    name: "Saumya Dave",
    role: "Refreshment Supervisor",
    company: "",
    image: "https://dicrajkot.github.io/cnc_workshop/sam.jpg",
  },
  {
    name: "Vithlani Archiv",
    role: "Refreshment Supervisor",
    company: "",
    image: "https://dicrajkot.github.io/cnc_workshop/Archive.jpg",
  },
  {
    name: "Arhan Matari",
    role: "Refreshment Supervisor",
    company: "",
    image: "https://dicrajkot.github.io/cnc_workshop/Arhan.jpg",
  },
  {
    name: "Stuti Shah",
    role: "Stage Crew",
    company: "",
    image: "https://github.com/jd-thakrar/CNCWorkshop/blob/main/STUTi.jpeg?raw=true",
  },
  {
    name: "Pandya Shraddha",
    role: "Stage Crew",
    company: "",
    image: "https://github.com/jd-thakrar/CNCWorkshop/blob/main/PAndya.jpeg?raw=true",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Header />
      <section className="py-16 px-4">
        <div className="container mx-auto mb-16 mt-24">
          <div className="text-center mb-16">
            <AnimatedHeading>Patrons</AnimatedHeading>
            <p className="text-xl text-gray-400">Guiding Lights of Our Institution</p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 w-full max-w-md mx-auto"
                >
                  <div className="relative aspect-square w-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-opacity duration-300 hover:opacity-80"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-white mb-2">{member.name}</h2>
                    <p className="text-blue-400 mb-1">{member.role}</p>
                    <p className="text-gray-400">{member.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-16 mt-24">
            <AnimatedHeading>Our Team</AnimatedHeading>
            <p className="text-xl text-gray-400">Dedicated Professionals Driving Excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 hover:opacity-80"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-2">{member.name}</h2>
                  <p className="text-blue-400 mb-1">{member.role}</p>
                  <p className="text-gray-400">{member.company}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-16 mt-24">
            <AnimatedHeading>Our Volunteers</AnimatedHeading>
            <p className="text-xl text-gray-400">Passionate Individuals Making a Difference</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vol.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 hover:opacity-80"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-2">{member.name}</h2>
                  <p className="text-blue-400 mb-1">{member.role}</p>
                  <p className="text-gray-400">{member.company}</p>
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

