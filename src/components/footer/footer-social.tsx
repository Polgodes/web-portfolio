"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function FooterSocial() {
  return (
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
  )
}

