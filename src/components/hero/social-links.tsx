"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
  const socialLinks = [
    { href: "https://github.com/Polgodes", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/paul-adrian-godes/", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:paulgodes11@gmail.com", icon: Mail, label: "Email" },
  ]

  return (
    <div className={`flex justify-center space-x-6 ${className}`}>
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.label}
          whileHover={{ scale: 1.2, y: -2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1 }}
        >
          <Link
            href={social.href}
            className="text-muted-foreground hover:text-primary transition-colors p-2 block"
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            <social.icon className="w-6 h-6" />
            <span className="sr-only">{social.label}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
