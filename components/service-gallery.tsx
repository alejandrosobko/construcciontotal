import { shimmer, toBase64 } from "@/lib/imageBlur"
import fs from "fs"
import Image from "next/image"
import path from "path"

async function getGalleryImages(folder: string) {
  const dir = path.join(process.cwd(), "public", folder)
  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".webp"))
  return Promise.all(files.map((file) => ({ src: `/${folder}/${file}` })))
}

export default async function ServiceGallery({ slug }: { slug: string }) {
  const images = await getGalleryImages("assets/" + slug)

  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div
            key={img.src}
            className="relative h-96 rounded-lg overflow-hidden"
          >
            <Image
              src={img.src}
              alt="imagen de trabajo"
              width={600}
              height={400}
              className="object-cover"
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              priority={false}
              loading={"lazy"}
              sizes="(max-width: 768px) 600px, 300px"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
