import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/homepage/hero-section"
import { AboutSection } from "@/components/homepage/about-section"
import { ServersSection } from "@/components/homepage/servers-section"
import { PlansSection } from "@/components/homepage/plans-section"
import { ContactSection } from "@/components/homepage/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <NavBar />
      <HeroSection />
      <AboutSection />
      {/* <ServersSection /> */}
      {/* <PlansSection /> */}
      {/* <ContactSection /> */}
      {/* <Footer /> */}
    </div>
  )
}

