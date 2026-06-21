import { CalloutSection } from "@/components/callout-section"
import { ContactSection } from "@/components/contact-section"
import Footer from "@/components/Footer"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { ProjectsCarousel } from "@/components/projects-carousel"
import { ServicesSection } from "@/components/services-section"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default:
      'Albañilería, Herrería y Aires Acondicionados en Zona Sur | Construcción Total',
    template: '%s | Construcción Total',
  },
  description:
    'Especialistas en albañilería, herrería e instalación de aires acondicionados. Brindamos servicios en Quilmes, Bernal, Berazategui y toda la Zona Sur. Presupuestos sin cargo.',
  keywords: [
    'albañilería zona sur',
    'herrería zona sur',
    'instalación aires acondicionados',
    'construcción quilmes',
    'albañil bernal',
    'herrero berazategui',
    'construcción integral',
    'remodelaciones',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://construcciontotal.com.ar',
    siteName: 'Construcción Total',
    title: 'Albañilería, Herrería y Aires Acondicionados en Zona Sur',
    description:
      'Especialistas en albañilería, herrería e instalación de aires acondicionados en Quilmes, Bernal, Berazategui y Zona Sur.',
    images: [
      {
        url: '/assets/construccion/35.webp',
        width: 1200,
        height: 630,
        alt: 'Servicios de Construcción en Zona Sur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Albañilería, Herrería y Aires Acondicionados en Zona Sur',
    description:
      'Especialistas en albañilería, herrería e instalación de aires acondicionados en Quilmes, Bernal, Berazategui y Zona Sur.',
    images: ['/assets/construccion/35.webp'],
  },
  alternates: {
    canonical: 'https://construcciontotal.com.ar',
    languages: {
      es: 'https://construcciontotal.com.ar',
    },
  },
}

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
