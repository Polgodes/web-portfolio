"use client"

import { motion, useInView } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { containerVariants, itemVariants } from "@/components/projects/animation-variants"
import { FeaturedProjectCard } from "@/components/projects/featured-project-card"
import { ProjectCard } from "@/components/projects/project-card"
import { ProjectModal } from "@/components/projects/project-modal"
import { ScreenshotGallery } from "@/components/projects/screenshot-gallery"
import { projects } from "@/components/projects/project-data"

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [openModal, setOpenModal] = useState<string | null>(null)
  const [openScreenshotModal, setOpenScreenshotModal] = useState<string | null>(null)
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0)

  const sectionRef = useRef(null)
  const featuredRef = useRef(null)
  const otherRef = useRef(null)

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const featuredInView = useInView(featuredRef, { once: true, margin: "-50px" })
  const otherInView = useInView(otherRef, { once: true, margin: "-50px" })

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === "#projects") {
        const element = document.getElementById("projects")
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }, 100)
        }
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  const nextScreenshot = () => {
    const project = projects.find((p) => p.title === openScreenshotModal)
    if (project) {
      setCurrentScreenshotIndex((prev) => (prev === project.screenshots.length - 1 ? 0 : prev + 1))
    }
  }

  const prevScreenshot = () => {
    const project = projects.find((p) => p.title === openScreenshotModal)
    if (project) {
      setCurrentScreenshotIndex((prev) => (prev === 0 ? project.screenshots.length - 1 : prev - 1))
    }
  }

  const openScreenshots = (projectTitle: string) => {
    setOpenScreenshotModal(projectTitle)
    setCurrentScreenshotIndex(0)
  }

  const selectedProject = projects.find((p) => p.title === openModal) || null
  const screenshotProject = projects.find((p) => p.title === openScreenshotModal) || null

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="py-20 overflow-hidden scroll-mt-24"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            Project Deep Dives
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
            Comprehensive case studies showcasing problem-solving approach, technical solutions, and measurable impact.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          ref={featuredRef}
          className="max-w-4xl mx-auto space-y-16 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={featuredInView ? "visible" : "hidden"}
        >
          <motion.h3
            className="text-2xl font-bold text-center mb-8"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              color: "hsl(var(--primary))",
              transition: { duration: 0.2 },
            }}
          >
            Featured Projects
          </motion.h3>
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.title} project={project} onOpenScreenshots={openScreenshots} />
          ))}
        </motion.div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <motion.div
            ref={otherRef}
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={otherInView ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-2xl font-bold text-center mb-4"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                color: "hsl(var(--primary))",
                transition: { duration: 0.2 },
              }}
            >
              Other Projects
            </motion.h3>
            <p className="text-center text-sm text-muted-foreground mb-8">
              Stay tuned, I&apos;m still adding more projects to this portfolio.
            </p>
            <motion.div
              className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
            >
              {otherProjects.map((project, projectIndex) => (
                <Dialog
                  key={project.title}
                  open={openModal === project.title}
                  onOpenChange={(open) => setOpenModal(open ? project.title : null)}
                >
                  <DialogTrigger asChild>
                    <div>
                      <ProjectCard
                        project={project}
                        projectIndex={projectIndex}
                        hoveredProject={hoveredProject}
                        onHover={setHoveredProject}
                        onClick={() => setOpenModal(project.title)}
                      />
                    </div>
                  </DialogTrigger>
                </Dialog>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Project Modal */}
        <ProjectModal project={selectedProject} isOpen={!!openModal} onClose={() => setOpenModal(null)} />

        {/* Screenshot Gallery */}
        <ScreenshotGallery
          project={screenshotProject}
          isOpen={!!openScreenshotModal}
          currentIndex={currentScreenshotIndex}
          onClose={() => setOpenScreenshotModal(null)}
          onNext={nextScreenshot}
          onPrev={prevScreenshot}
          onSelectIndex={setCurrentScreenshotIndex}
        />
      </div>
    </motion.section>
  )
}
