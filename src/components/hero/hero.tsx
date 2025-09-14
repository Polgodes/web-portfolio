"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { easeOut } from "framer-motion"
import { TypingAnimation } from "@/components/hero/typing-animation"
import { SocialLinks } from "@/components/hero/social-links"
import { DownloadButton } from "@/components/hero/download-button"
import { ScrollIndicator } from "@/components/hero/scroll-indicatior"
import { useScrollToSection } from "@/hooks/use-scroll-to-section"

export function Hero() {
  const { scrollToSection } = useScrollToSection()

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

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
        <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
          <div className="space-y-4">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text [&:not(:hover)]:text-foreground hover:text-transparent"
              variants={itemVariants}
            >
              Paul Adrian L. Godes
            </motion.h1>

            <TypingAnimation />
          </div>

          <motion.p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" variants={itemVariants}>
            I craft beautiful, functional web experiences with modern technologies. Passionate about clean code, user
            experience, and bringing ideas to life.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={itemVariants}>
            {/* View Work button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="cursor-pointer text-lg px-8 py-3"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
            </motion.div>

            <DownloadButton />
          </motion.div>

          <SocialLinks />
        </motion.div>

        <ScrollIndicator targetId="about" className="absolute pt-8 left-1/2 transform -translate-x-1/2" />
      </div>
    </section>
  )
}
