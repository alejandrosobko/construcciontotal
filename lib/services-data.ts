import { Hammer, Home, Snowflake, Zap } from "lucide-react"

export interface Service {
  id: string
  slug: string
  icon: any
  title: string
  description: string
  fullDescription: string
  features: string[]
  image: string
  seoTitle: string
  seoDescription: string
  seoKeywords: string[]
}

export const servicesData: Service[] = [
  {
    id: "1",
    slug: "construccion",
    icon: Home,
    title: "Construcción Integral",
    description:
      "Casas familiares, duplex y locales con los más altos estándares de calidad.",
    fullDescription:
      "Nos especializamos en la construcción de viviendas residenciales de calidad superior. Desde casas familiares hasta complejos locales, somos un equipo que garantiza que cada proyecto se ejecute con precisión, creatividad y atención al detalle. Utilizamos materiales premium y técnicas modernas para crear hogares que perduran generaciones.",
    features: ["Diseño personalizado", "Hogares", "Locales", "Reparaciones"],
    image: "/assets/construccion/35.webp",
    seoTitle:
      "Construcción Residencial Profesional | Casas y Condominios de Calidad",
    seoDescription:
      "Especialistas en construcción residencial. Casas unifamiliares, duplex y condominios con materiales premium.",
    seoKeywords: [
      "construcción residencial",
      "casas construcción",
      "condominios",
      "viviendas de calidad",
    ],
  },
  {
    id: "2",
    slug: "herreria",
    icon: Hammer,
    title: "Herrería",
    description:
      "Rejas, portones, estructuras y trabajos metálicos a medida con terminaciones profesionales.",
    fullDescription:
      "Realizamos trabajos de herrería a medida para hogares, comercios y obras. Fabricamos rejas de seguridad, portones corredizos o automatizados, estructuras metálicas y trabajos especiales según necesidad del cliente. Utilizamos materiales resistentes y técnicas modernas para garantizar durabilidad, solidez y excelentes terminaciones.",
    features: [
      "Rejas de seguridad",
      "Portones corredizos",
      "Portones automáticos",
      "Estructuras metálicas",
      "Trabajos personalizados",
    ],
    image: "/herreria-logo.jpg",
    seoTitle: "Herrería Profesional | Portones, Rejas y Estructuras Metálicas",
    seoDescription:
      "Servicios de herrería para hogares y comercios. Rejas, portones, estructuras metálicas y trabajos personalizados con materiales de calidad.",
    seoKeywords: [
      "herrería",
      "portones",
      "rejas",
      "estructuras metálicas",
      "trabajos metálicos",
    ],
  },
  {
    id: "3",
    slug: "electricidad",
    icon: Zap,
    title: "Electricidad",
    description:
      "Instalaciones, reparaciones y mantenimiento eléctrico para hogares y comercios.",
    fullDescription:
      "Brindamos servicios eléctricos completos, desde instalaciones nuevas hasta mantenimiento y reparaciones en hogares, oficinas y comercios. Trabajamos bajo normas vigentes, garantizando seguridad, eficiencia y un funcionamiento óptimo de cada instalación. También realizamos ampliaciones, tableros, automatización y soluciones personalizadas.",
    features: [
      "Instalaciones domiciliarias",
      "Reparaciones y mantenimiento",
      "Tableros y circuitos",
      "Iluminación LED",
    ],
    image: "/electricidad-logo.webp",
    seoTitle:
      "Electricidad Domiciliaria y Comercial | Instalaciones y Reparaciones",
    seoDescription:
      "Servicios eléctricos profesionales. Instalaciones seguras, mantenimiento, iluminación LED y tableros para hogares y comercios.",
    seoKeywords: [
      "electricidad",
      "electricista",
      "instalaciones eléctricas",
      "tableros",
      "reparaciones eléctricas",
    ],
  },
  {
    id: "4",
    slug: "refrigeracion",
    icon: Snowflake,
    title: "Refrigeración & Aire Acondicionado",
    description:
      "Instalación, mantenimiento y carga de gas para equipos de aire acondicionado.",
    fullDescription:
      "Ofrecemos servicios completos para sistemas de refrigeración y aire acondicionado split. Realizamos instalación profesional, limpieza profunda, mantenimiento preventivo, reparación y carga de gas. Garantizamos un funcionamiento eficiente, silencioso y de bajo consumo energético, cuidando la vida útil del equipo.",
    features: [
      "Instalación de aire acondicionado",
      "Limpieza y mantenimiento",
      "Reparación de equipos",
      "Carga de gas",
    ],
    image: "/refrigeracion-logo.webp",
    seoTitle: "Aire Acondicionado | Instalación, Reparación y Mantenimiento",
    seoDescription:
      "Servicio profesional de aire acondicionado. Instalación, carga de gas, mantenimiento y reparación para hogares y comercios.",
    seoKeywords: [
      "aire acondicionado",
      "refrigeración",
      "carga de gas",
      "instalación de split",
      "mantenimiento de aire",
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((service) => service.slug === slug)
}
