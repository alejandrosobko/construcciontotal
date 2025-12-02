"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/construction-site.jpg"
          alt="Sitio de construcción moderno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 sm:px-6 lg:px-8 text-center ">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Construcciones de{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text">Calidad</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Más de 15 años de experiencia en construcción residencial y comercial. Calidad garantizada, tiempos
            cumplidos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3 group"
            >
              Comenzar Proyecto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform cursor-pointer" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-3 backdrop-blur-sm cursor-pointer"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Proyectos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-300 text-sm">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-300 text-sm">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300 text-sm">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
