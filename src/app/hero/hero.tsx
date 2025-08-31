/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Code, Palette, Sparkles, Loader2, Check } from "lucide-react"
import { easeOut } from "framer-motion"
import Link from "next/link"

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [downloading, setDownloading] = useState(false)
  const [completed, setCompleted] = useState(false)

  const dynamicTexts = [
    { text: "Full-Stack Web Developer & UI/UX Specialist", icon: Code },
    { text: "I design, develop, and deploy digital solutions", icon: Palette },
    { text: "Building high-impact web experiences", icon: Sparkles },
    { text: "Turning ideas into scalable digital products", icon: Code },
    { text: "Code meets design, user meets value", icon: Palette },
  ]


  useEffect(() => {

    const currentTextObj = dynamicTexts[currentTextIndex]
    const fullText = currentTextObj.text
    let timeoutId: NodeJS.Timeout

    if (isTyping) {
      if (displayedText.length < fullText.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1))
        }, 50)
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 30)
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [displayedText, isTyping, currentTextIndex, dynamicTexts])

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
        ease: easeOut,
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

            {/* Typing Animation Text */}
            <div className="relative h-16 md:h-20 flex items-center justify-center overflow-hidden">
              <p className="text-xl md:text-2xl text-muted-foreground flex items-center justify-center px-4">
                {(() => {
                  const Icon = dynamicTexts[currentTextIndex].icon
                  return <Icon className="w-5 h-5 mr-2 text-primary" />
                })()}
                {displayedText}
                <motion.span
                  className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              </p>
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
            {/* View Work button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="cursor-pointer text-lg px-8 py-3" onClick={handleScrollToProjects}>
                View My Work
              </Button>
            </motion.div>

            {/* Download Resume button with skeleton animation */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="cursor-pointer text-lg px-8 py-3 bg-transparent flex items-center gap-2"
                onClick={() => {
                  // Start download
                  const link = document.createElement("a")
                  link.href = "/resume/adrain.dev-resume.pdf"
                  link.download = "adrian.dev-resume.pdf"
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)

                  // Animate skeleton state
                  setDownloading(true)
                  setCompleted(false)

                  setTimeout(() => {
                    setDownloading(false)
                    setCompleted(true)

                    setTimeout(() => {
                      setCompleted(false)
                    }, 2000)
                  }, 2000)
                }}
                disabled={downloading}
              >
                {downloading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Downloading...
                  </>
                ) : completed ? (
                  <>
                    <Check className="w-5 h-5 text-green-500" />
                    Download Complete
                  </>
                ) : (
                  "Download Resume"
                )}
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
          className="absolute pt-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
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
          <ArrowDown className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors" />
        </motion.div>
      </div>
    </section>
  )
}
