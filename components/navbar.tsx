"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Link to Home */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              ConstruccionTotal
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="/"
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Inicio
              </a>
              <a
                href="/#services"
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Servicios
              </a>
              <a
                href="/#projects"
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Proyectos
              </a>
              <a
                href="/#contact"
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <a
              href="/#contact"
              className=" rounded-md px-2 py-2 bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
            >
              Solicitar Cotización
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <a
                href="/"
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                Inicio
              </a>
              <a
                href="/#services"
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                Servicios
              </a>
              <a
                href="/#projects"
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                Proyectos
              </a>
              <a
                href="/#contact"
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                Contacto
              </a>
              <div className="pt-2 py-8">
                <a
                  href="/#contact"
                  className="rounded-md px-2 py-2 bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                >
                  Solicitar Cotización
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
