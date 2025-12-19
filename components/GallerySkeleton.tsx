function GallerySkeleton() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-96 w-full rounded-lg bg-muted animate-pulse"
          />
        ))}
      </div>
    </section>
  )
}

export default GallerySkeleton
