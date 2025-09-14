"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TechBadge } from "./tech-badge"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  core?: string[]
  additional?: string[]
  index: number
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as any,
    },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export function ServiceCard({ icon, title, description, color, core, additional, index }: ServiceCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300 h-full">
        <CardContent className="p-8 text-center h-full flex flex-col">
          <motion.div
            className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-primary`}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 1,
              delay: index * 0.2,
            }}
          >
            {icon}
          </motion.div>
          <motion.h3
            className="text-xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-muted-foreground leading-relaxed mb-4 flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {description}
          </motion.p>

          {/* Tech Stack Badges */}
          {(core || additional) && (
            <motion.div
              className="mt-6 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {core && core.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">Core</p>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {core.map((tech, i) => (
                      <TechBadge key={i} tech={tech} variant="default" index={i} />
                    ))}
                  </motion.div>
                </div>
              )}
              {additional && additional.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">Additional</p>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {additional.map((tech, i) => (
                      <TechBadge key={i} tech={tech} variant="outline" index={i} />
                    ))}
                  </motion.div>
                </div>
              )}
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
