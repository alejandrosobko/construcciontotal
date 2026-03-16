import { MetadataRoute } from "next"
import { servicesData } from "@/lib/services-data"

const baseUrl = "https://construcciontotal.com.ar"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]

  const servicesRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/servicios/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  return [...routes, ...servicesRoutes]
}
