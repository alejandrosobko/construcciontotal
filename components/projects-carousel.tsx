"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MapPin, Calendar, X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Residencia Moderna Los Altos",
    location: "Los Altos, CA",
    date: "2024",
    image: "/placeholder-1wkvh.png",
    description: "Casa unifamiliar de 350m² con diseño contemporáneo y tecnología domótica integrada.",
  },
  {
    id: 2,
    title: "Centro Comercial Plaza Norte",
    location: "Ciudad de México",
    date: "2023",
    image: "/modern-commercial-building-with-glass-facade-and-r.jpg",
    description: "Complejo comercial de 5,000m² con 50 locales comerciales y estacionamiento subterráneo.",
  },
  {
    id: 3,
    title: "Remodelación Villa Esperanza",
    location: "Guadalajara, MX",
    date: "2024",
    image: "/placeholder-e9sda.png",
    description: "Renovación completa de casa colonial manteniendo elementos arquitectónicos originales.",
  },
  {
    id: 4,
    title: "Edificio Corporativo TechHub",
    location: "Monterrey, MX",
    date: "2023",
    image: "/placeholder-pobqq.png",
    description: "Torre de oficinas de 15 pisos con certificación LEED y espacios de trabajo colaborativo.",
  },
  {
    id: 5,
    title: "Conjunto Residencial Jardines",
    location: "Puebla, MX",
    date: "2024",
    image: "/placeholder-qtip1.png",
    description: "Desarrollo habitacional de 25 casas con áreas verdes y amenidades comunitarias.",
  },
]

export function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const openModal = (index: number) => {
    setModalIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextModalSlide = () => {
    setModalIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevModalSlide = () => {
    setModalIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextModalSlide()
    if (e.key === "ArrowLeft") prevModalSlide()
    if (e.key === "Escape") closeModal()
  }

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Proyectos Recientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Explora algunos de nuestros proyectos más destacados que demuestran nuestro compromiso con la calidad y la
            innovación.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div
                    className="relative cursor-pointer group"
                    onClick={() => {
                      openModal(index)
                    }}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Project Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                      <div className="max-w-2xl">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-balance">{project.title}</h3>
                        <p className="text-gray-200 mb-4 text-pretty leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {project.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {project.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Modal/Lightbox for full-size image viewing */}
        {isModalOpen && (
          <div>
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                  onClick={closeModal}
                >
                  <X className="h-4 w-4" />
                </Button>

                {/* Modal Navigation Arrows */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevModalSlide()
                  }}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextModalSlide()
                  }}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>

                {/* Modal Image */}
                <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
                  <img
                    src={projects[modalIndex].image || "/placeholder.svg"}
                    alt={projects[modalIndex].title}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  />

                  {/* Modal Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{projects[modalIndex].title}</h3>
                    <p className="text-gray-200 mb-3 text-sm sm:text-base">{projects[modalIndex].description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {projects[modalIndex].location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {projects[modalIndex].date}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation()
                        setModalIndex(index)
                      }}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === modalIndex ? "bg-white" : "bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
