import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import WorkshopDetails from "./components/WorkshopDetails"
import Timeline from "./components/Timeline"
import Sponsor from "./components/SponsorSection"
import Footer from "./components/Footer"
import CircuitBackground from "./components/CircuitBackground"
import FAQ from "./components/FAQSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <CircuitBackground />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <WorkshopDetails />
        <Timeline />
        <FAQ />
        <Sponsor />
        <Footer />
      </div>
    </main>
  )
}
