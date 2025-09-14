"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AboutTabs } from "@/components/about/about-tabs"
import { ProfileImage } from "@/components/about/profile-image"
import { ServicesGrid } from "@/components/about/services-grid"

export function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
        ease: [0.6, -0.05, 0.01, 0.99] as any,
      },
    },
  }

  return (
    <motion.section
      id="about"
      className="py-20 bg-muted/30"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-12">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-6" variants={itemVariants}>
            Get to Know Me
          </motion.h2>
          <motion.p className="text-xl text-muted-foreground max-w-3xl mx-auto" variants={itemVariants}>
            I&apos;m more than just a developer - I&apos;m a person with passions, hobbies, and dreams
          </motion.p>
        </motion.div>

        {/* Interactive Tabs and Profile */}
        <motion.div className="grid lg:grid-cols-2 gap-12 items-center mb-20" variants={itemVariants}>
          <AboutTabs />
          <ProfileImage />
        </motion.div>

        <motion.div className="text-center mb-8" variants={itemVariants}>
          <motion.h3 className="text-2xl font-semibold" variants={itemVariants}>
            Technologies I Work With
          </motion.h3>
        </motion.div>

        {/* Services Grid */}
        <ServicesGrid isInView={isInView} />
      </div>
    </motion.section>
  )
}
