"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Eye, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cardVariants, containerVariants, hoverOverlayVariants, sparkleVariants } from "./animation-variants"
import { TechBadge } from "./tech-badge"
import type { Project } from "./project-data"

interface ProjectCardProps {
  project: Project
  projectIndex: number
  hoveredProject: string | null
  onHover: (projectTitle: string | null) => void
  onClick: () => void
}

export function ProjectCard({ project, projectIndex, hoveredProject, onHover, onClick }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.03,
        y: -8,
        rotateY: 2,
        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
      whileTap={{ scale: 0.98 }}
      className="h-full cursor-pointer perspective-1000"
      onMouseEnter={() => onHover(project.title)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
      custom={projectIndex}
    >
      <Card className="overflow-hidden h-full flex flex-col shadow-md transition-all duration-300 hover:shadow-2xl relative group">
        {/* Enhanced Hover overlay with multiple animations */}
        <AnimatePresence>
          {hoveredProject === project.title && (
            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center"
              variants={hoverOverlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{
                background: "radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)",
              }}
            >
              <motion.div
                className="text-white text-center relative"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Sparkle effects */}
                <motion.div
                  className="absolute -top-4 -left-4"
                  variants={sparkleVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                </motion.div>
                <motion.div
                  className="absolute -top-2 -right-6"
                  variants={sparkleVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.1 }}
                >
                  <Sparkles className="w-3 h-3 text-blue-400" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -right-2"
                  variants={sparkleVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                </motion.div>

                {/* Main content */}
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1, duration: 0.3 }}>
                  <Eye className="w-10 h-10 mx-auto mb-3" />
                </motion.div>
                <motion.p
                  className="font-semibold text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  Click for more info
                </motion.p>
                <motion.div
                  className="w-16 h-0.5 bg-white mx-auto mt-2"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-all duration-500 group-hover:brightness-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <motion.div
            className="absolute bottom-4 left-4 right-4 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: projectIndex * 0.1, duration: 0.5 }}
          >
            <motion.h4 className="text-xl font-bold text-white mb-1" whileHover={{ scale: 1.02 }}>
              {project.title}
            </motion.h4>
            <motion.p
              className="text-gray-200 text-sm mb-3 line-clamp-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: projectIndex * 0.1 + 0.2, duration: 0.5 }}
            >
              {project.description}
            </motion.p>
          </motion.div>
        </div>

        {/* Content */}
        <CardContent className="p-6 flex-grow flex flex-col">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: projectIndex * 0.1 + 0.3, duration: 0.5 }}
          >
            <h5 className="font-semibold mb-3 text-sm">Technologies Used</h5>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {project.technologies.map((tech, techIndex) => (
                <TechBadge key={tech} tech={tech} index={techIndex} variant="outline" size="sm" />
              ))}
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
