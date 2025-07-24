"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const dynamicTexts = [
    "Full-Stack Web Developer & UI/UX Specialist",
    "I design, develop, and deploy digital solutions",
    "Building high-impact web experiences",
    "Turning ideas into scalable digital products",
    "Code meets design, user meets value",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [dynamicTexts.length])

  const textVariants = {
    enter: {
      x: 300,
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: {
      x: -300,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const handleScrollToProjects = () => {
    const projectsElement = document.getElementById("projects")
    if (projectsElement) {
      const elementTop = projectsElement.getBoundingClientRect().top + window.pageYOffset
      const navHeight = 120
      const targetPosition = elementTop - navHeight

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
        <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
          <div className="space-y-4">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Paul Adrian L. Godes
            </motion.h1>

            {/* Dynamic Animated Text */}
            <div className="relative h-16 md:h-20 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTextIndex}
                  className="text-xl md:text-2xl text-muted-foreground absolute inset-0 flex items-center justify-center px-4"
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {dynamicTexts[currentTextIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center space-x-2 mt-4">
              {dynamicTexts.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentTextIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                />
              ))}
            </div>
          </div>

          <motion.p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" variants={itemVariants}>
            I craft beautiful, functional web experiences with modern technologies. Passionate about clean code, user
            experience, and bringing ideas to life.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="text-lg px-8 py-3" onClick={handleScrollToProjects}>
                View My Work
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div className="flex justify-center space-x-6" variants={itemVariants}>
            {[
              { href: "https://github.com/Polgodes", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/paul-adrian-godes/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:paulgodes11@gmail.com", icon: Mail, label: "Email" },
            ].map((social, index) => (
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
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -10, 0],
            opacity: 1,
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          onClick={() => {
            const aboutElement = document.getElementById("about")
            if (aboutElement) {
              const elementTop = aboutElement.getBoundingClientRect().top + window.pageYOffset
              const navHeight = 120
              const targetPosition = elementTop - navHeight

              window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: "smooth",
              })
            }
          }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
        </motion.div>
      </div>
    </section>
  )
}
