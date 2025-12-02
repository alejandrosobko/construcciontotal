import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { ContactSection } from "@/components/contact-section"
import { servicesData, getServiceBySlug } from "@/lib/services-data"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {}
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.seoKeywords,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      type: "website",
      url: `https://construccion-app.vercel.app/servicios/${service.slug}`,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
      images: [service.image],
    },
    alternates: {
      canonical: `https://construccion-app.vercel.app/servicios/${service.slug}`,
    },
  }
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const IconComponent = service.icon

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden bg-gradient-to-b from-primary/20 to-background">
        <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="mb-6 bg-primary/80 p-4 rounded-full">
            <IconComponent className="h-12 w-12 text-primary-foreground" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance mb-4">{service.title}</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl text-pretty">{service.description}</p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="bg-muted/50 py-4 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-primary hover:underline flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Inicio
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/#services" className="text-primary hover:underline">
              Servicios
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{service.title}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Description */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
                Conoce nuestro servicio de {service.title.toLowerCase()}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.fullDescription}</p>

              {/* Features List */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground mb-6">Lo que ofrecemos</h3>
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image Gallery Placeholder */}
            <div className="flex flex-col gap-4">
              <div className="relative h-96 w-full overflow-hidden rounded-lg border border-border bg-muted">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Navigation */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center text-balance">
            Otros servicios que ofrecemos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((otherService) => {
                const OtherIcon = otherService.icon
                return (
                  <Link
                    key={otherService.id}
                    href={`/servicios/${otherService.slug}`}
                    className="group p-6 bg-card rounded-lg border border-border hover:shadow-lg hover:border-primary transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <OtherIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {otherService.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{otherService.description}</p>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
