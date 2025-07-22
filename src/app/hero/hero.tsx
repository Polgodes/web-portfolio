import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
        <div className="animate-fade-in space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Paul Adrian Godes
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">Full-Stack Developer & UI/UX Enthusiast</p>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I craft beautiful, functional web experiences with modern technologies. Passionate about clean code, user
            experience, and bringing ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-3" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/Polgodes"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/paul-adrian-godes/"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:paulgodes11@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
