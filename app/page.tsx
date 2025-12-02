import { CalloutSection } from "@/components/callout-section"
import { ContactSection } from "@/components/contact-section"
import Footer from "@/components/Footer"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { ProjectsCarousel } from "@/components/projects-carousel"
import { ServicesSection } from "@/components/services-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CalloutSection />
      <ServicesSection />
      <ProjectsCarousel />
      <ContactSection />
      <Footer />
    </main>
  )
}
