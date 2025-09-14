"use client"

import { useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { cardVariants, containerVariants } from "./animation-variants"
import { TechBadge } from "./tech-badge"
import { ProjectTabs } from "./project-tabs"
import type { Project } from "./project-data"

import gsap from "gsap"
import { Draggable } from "gsap/Draggable"

interface FeaturedProjectCardProps {
  project: Project
  onOpenScreenshots: (projectTitle: string) => void
}

export function FeaturedProjectCard({ project, onOpenScreenshots }: FeaturedProjectCardProps) {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(Draggable)

    if (imageRef.current) {
      // Slide in from right on mount
      gsap.fromTo(
        imageRef.current,
        { x: 300, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )

      // Make it draggable
      Draggable.create(imageRef.current, {
        type: "x",
        bounds: { minX: -300, maxX: 0 }, // limit drag distance
        inertia: true,
        onDrag() {
          gsap.to(imageRef.current, { scale: 1.05, duration: 0.2 })
        },
        onRelease() {
          gsap.to(imageRef.current, { scale: 1, duration: 0.3 })
        },
      })
    }
  }, [])

  return (
    <motion.div variants={cardVariants}>
      <motion.div
        className="rounded-lg"
        initial={{ borderWidth: 0, borderColor: "rgba(0,0,0,0)" }}
        whileHover={{
          y: -5,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          transition: { duration: 0.3 },
        }}
      >
        <Card className="overflow-hidden">
          {/* Project Header */}
          <div className="relative group">
            <div className="overflow-hidden">
              {/* Draggable + animated image */}
              <div ref={imageRef} className="cursor-grab active:cursor-grabbing">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <motion.div
              className="absolute bottom-6 left-6 right-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.h4 className="text-2xl font-bold text-white mb-2" whileHover={{ scale: 1.02 }}>
                {project.title}
              </motion.h4>
              <motion.p
                className="text-gray-200 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {project.description}
              </motion.p>
              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="cursor-pointer" onClick={() => onOpenScreenshots(project.title)}>
                    <Eye className="w-4 h-4 mr-2" />
                    See Screenshots
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <CardContent className="p-8">
            {/* Technologies */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h5 className="font-semibold mb-3">Technologies Used</h5>

              {/* Technologies Badges */}
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {project.technologies.map((tech, idx) => (
                  <TechBadge key={tech} tech={tech} index={idx} />
                ))}
              </motion.div>

              {/* Plan / Notes */}
              {project.plan && <p className="text-sm text-muted-foreground leading-relaxed italic">{project.plan}</p>}
            </motion.div>

            <ProjectTabs project={project} />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
