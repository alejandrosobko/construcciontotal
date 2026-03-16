import { Analytics } from "@vercel/analytics/next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import type React from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://construcciontotal.com.ar"),
  title: {
    default:
      "Albañilería, Herrería y Aires Acondicionados en Zona Sur | Construcción Total",
    template: "%s | Construcción Total",
  },
  description:
    "Especialistas en albañilería, herrería e instalación de aires acondicionados. Brindamos servicios en Quilmes, Bernal, Berazategui y toda la Zona Sur. Presupuestos sin cargo.",
  keywords: [
    "albañilería zona sur",
    "herrería zona sur",
    "instalación aires acondicionados",
    "construcción quilmes",
    "albañil bernal",
    "herrero berazategui",
    "construcción integral",
    "remodelaciones",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://construcciontotal.com.ar",
    siteName: "Construcción Total",
    title: "Albañilería, Herrería y Aires Acondicionados en Zona Sur",
    description:
      "Especialistas en albañilería, herrería e instalación de aires acondicionados en Quilmes, Bernal, Berazategui y Zona Sur.",
    images: [
      {
        url: "/assets/construccion/35.webp",
        width: 1200,
        height: 630,
        alt: "Servicios de Construcción en Zona Sur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Albañilería, Herrería y Aires Acondicionados en Zona Sur",
    description:
      "Especialistas en albañilería, herrería e instalación de aires acondicionados en Quilmes, Bernal, Berazategui y Zona Sur.",
    images: ["/assets/construccion/35.webp"],
  },
  alternates: {
    canonical: "https://construcciontotal.com.ar",
    languages: {
      es: "https://construcciontotal.com.ar",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#f5f5f5ff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=yes"
        />
      </head>
      <body
        className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
