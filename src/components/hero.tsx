import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            John Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full-Stack Developer & UI/UX Enthusiast
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            I craft beautiful, functional web experiences with modern technologies. Passionate about clean code, user
            experience, and bringing ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Link href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:john@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
