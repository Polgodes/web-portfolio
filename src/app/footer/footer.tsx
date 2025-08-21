"use client"

import { Github, Linkedin, Mail} from "lucide-react"
import Link from "next/link"

export function Footer() {
  const handleNavClick = (href: string) => {
    const sectionId = href.substring(1)
    const element = document.getElementById(sectionId)

    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset
      const navHeight = 120
      const targetPosition = elementTop - navHeight

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      })
    }
  }

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">adrian.dev</h3>
            <p className="text-muted-foreground">
              Aspiring Full-stack Developer passionate about creating beautiful, functional web experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => handleNavClick("#about")}
                className="block text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("#projects")}
                className="block text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="block text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Polgodes"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/paul-adrian-godes/"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:paulgodes11@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Paul Adrian L. Godes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
