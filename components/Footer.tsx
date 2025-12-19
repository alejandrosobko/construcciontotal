const Footer = () => {
  return (
    <footer className="py-2 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-sm text-muted-foreground">
            Created by{" "}
            <a
              href="https://www.alejandrosobko.com"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline hover:text-accent transition-colors duration-200"
            >
              Alejandro Sobko
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
