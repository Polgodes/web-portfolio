"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, AlertCircle, CheckCircle2, User2, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { modalVariants } from "./animation-variants"
import { TechBadge } from "./tech-badge"
import type { Project } from "./project-data"

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent
            className="w-[95vw] max-w-[95vw] h-[90vh] max-h-[90vh] sm:w-[90vw] sm:max-w-[90vw] md:w-[85vw] md:max-w-4xl lg:w-[80vw] lg:max-w-5xl xl:max-w-6xl overflow-hidden p-0 gap-0"
            onPointerDownOutside={onClose}
          >
            {/* Fixed Exit Button */}
            <motion.button
              className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg hover:bg-background transition-colors"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5" />
            </motion.button>

            <motion.div
              className="h-full overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-4 sm:p-6 lg:p-8">
                <DialogHeader className="mb-6">
                  <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-bold pr-12">{project.title}</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Project Image */}
                  <motion.div
                    className="relative overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={400}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                    />
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    className="text-muted-foreground leading-relaxed text-sm sm:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h5 className="font-semibold mb-3 text-sm sm:text-base">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + idx * 0.05, duration: 0.3 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <TechBadge tech={tech} index={idx} variant="secondary" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Links */}
                  <motion.div className="flex flex-col sm:flex-row gap-3">
                    {project.liveUrl && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 sm:flex-none"
                      >
                        <Button asChild className="w-full sm:w-auto">
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      </motion.div>
                    )}

                    {project.githubUrl && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 sm:flex-none"
                      >
                        <Button variant="secondary" asChild className="w-full sm:w-auto">
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Link>
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Detailed Sections */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                        <h6 className="font-semibold text-base sm:text-lg">The Problem</h6>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                        {project.problem}
                      </p>
                      <div>
                        <h6 className="font-medium mb-2 text-sm sm:text-base">Key Challenges:</h6>
                        <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground">
                          {project.challenges.map((challenge, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 + idx * 0.1, duration: 0.3 }}
                            >
                              {challenge}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                        <h6 className="font-semibold text-base sm:text-lg">The Solution</h6>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                        {project.solution}
                      </p>
                      <div>
                        <h6 className="font-medium mb-2 text-sm sm:text-base">Key Results:</h6>
                        <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground">
                          {project.results.map((result, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.8 + idx * 0.1, duration: 0.3 }}
                            >
                              {result}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <User2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                        <h6 className="font-semibold text-base sm:text-lg">My Contribution</h6>
                      </div>
                      <motion.p
                        className="text-muted-foreground leading-relaxed text-sm sm:text-base"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                      >
                        {project.contribution}
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
