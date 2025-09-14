"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { modalVariants } from "./animation-variants"
import type { Project } from "./project-data"

interface ScreenshotGalleryProps {
  project: Project | null
  isOpen: boolean
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  onSelectIndex: (index: number) => void
}

export function ScreenshotGallery({
  project,
  isOpen,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  onSelectIndex,
}: ScreenshotGalleryProps) {
  if (!project) return null

  return (
    <AnimatePresence aria-label="Project screenshots">
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="w-[95vw] max-w-[95vw] sm:w-[90vw] sm:max-w-[90vw] md:w-[85vw] md:max-w-6xl lg:w-[80vw] lg:max-w-7xl max-h-[95vh] overflow-hidden p-0 gap-0 flex flex-col">
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
              className="h-full flex flex-col"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-4 sm:p-6 border-b">
                <DialogHeader>
                  <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-bold pr-12">
                    {project.title} - Screenshots
                  </DialogTitle>
                </DialogHeader>
              </div>

              <div className="flex-1 flex items-center justify-center relative bg-muted/20">
                {/* Navigation Buttons */}
                {project.screenshots.length > 1 && (
                  <>
                    <motion.button
                      className="absolute left-4 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-3 shadow-lg hover:bg-background transition-colors"
                      onClick={onPrev}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                      className="absolute right-4 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-3 shadow-lg hover:bg-background transition-colors"
                      onClick={onNext}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.button>
                  </>
                )}

                <motion.div
                  key={currentIndex}
                  className="max-w-full max-h-full p-4"
                  initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="text-center">
                    <Image
                      src={project.screenshots[currentIndex]?.src || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${currentIndex + 1}`}
                      width={1200}
                      height={800}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                      priority
                    />
                    <div className="mt-4 px-4">
                      <motion.h3
                        className="text-lg font-semibold text-foreground"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {project.screenshots[currentIndex]?.name}
                      </motion.h3>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Screenshot Counter and Thumbnails */}
              {project.screenshots.length > 1 && (
                <div className="p-4 border-t bg-background/50">
                  <div className="text-center mb-4">
                    <span className="text-sm text-muted-foreground">
                      {currentIndex + 1} of {project.screenshots.length}
                    </span>
                  </div>

                  <div className="flex justify-center gap-2 overflow-x-auto pb-2">
                    {project.screenshots.map((screenshot, index) => (
                      <motion.button
                        key={index}
                        className={`flex-shrink-0 w-16 h-12 rounded border-2 overflow-hidden transition-all duration-300 ${
                          index === currentIndex
                            ? "border-primary ring-2 ring-primary/20 shadow-lg"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => onSelectIndex(index)}
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        title={screenshot.name}
                      >
                        <Image
                          src={screenshot.src || "/placeholder.svg"}
                          alt={`Thumbnail ${index + 1}`}
                          width={64}
                          height={48}
                          className="w-full h-full object-cover transition-transform duration-300"
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
