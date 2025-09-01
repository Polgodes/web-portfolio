"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { motion, AnimatePresence, useInView, type Variants, type Transition } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ExternalLink,
  Github,
  AlertCircle,
  CheckCircle2,
  User2,
  Sparkles,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [openAccordions, setOpenAccordions] = useState<Record<string, string>>({})
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

  const projects = [
    {
      title: "Real-time Queueing System",
      description:
        "A local web application designed for RTU's MIS Office to manage queues in real-time. It supports dynamic form generation and efficiently handles hundreds of concurrent users with live updates.",
      image: "/rtu_queuing_system/admin-auth.png",
      screenshots: [
        { src: "/rtu_queuing_system/window-queue.png", name: "Queue Display Window" },
        { src: "/rtu_queuing_system/admin-auth.png", name: "Admin Authentication" },
        { src: "/rtu_queuing_system/admin-dashboard.png", name: "Admin Dashboard" },
        { src: "/rtu_queuing_system/admin-processed.png", name: "Admin - Processed Queue" },
        { src: "/rtu_queuing_system/admin-processing.png", name: "Admin - Processing Queue" },
        { src: "/rtu_queuing_system/form1.png", name: "Registration Form - Step 1" },
        { src: "/rtu_queuing_system/form2.png", name: "Registration Form - Step 2" },
        { src: "/rtu_queuing_system/form3.png", name: "Registration Form - Step 3" },
        { src: "/rtu_queuing_system/queue-number.png", name: "Queue Number Display" },
        { src: "/rtu_queuing_system/super-admin-concern-management.png", name: "Super Admin - Concern Management" },
        { src: "/rtu_queuing_system/super-admin-dashboard.png", name: "Super Admin Dashboard" },
        { src: "/rtu_queuing_system/super-admin-history.png", name: "Super Admin - History" },
        { src: "/rtu_queuing_system/super-admin-stats.png", name: "Super Admin - Statistics" },
        { src: "/rtu_queuing_system/super-admin-stats2.png", name: "Super Admin - Detailed Stats" },
        { src: "/rtu_queuing_system/super-admin-user-logs.png", name: "Super Admin - User Logs" },
        { src: "/rtu_queuing_system/super-admin-user-management.png", name: "Super Admin - User Management" },
      ],
      technologies: ["Next.js", "TypeScript", "Socket.IO", "Prisma", "Tailwind CSS", "Zustand"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      problem:
        "RTU's MIS Office was experiencing long wait times and inefficient queue management, leading to student frustration and administrative bottlenecks. There was no visibility into wait times or queue positions, causing confusion and overcrowding.",
      solution:
        "Developed a comprehensive real-time queueing system with live updates, dynamic form generation, and queue position tracking. The system supports hundreds of concurrent users with WebSocket connections for instant notifications and includes an admin dashboard for queue management.",
      contribution:
        "I designed and developed several key features for the super-admin interface, including real-time statistics, user logs, and queue management tools. I handled both frontend and backend development using technologies like Socket.IO for live updates and Prisma for database integration, ensuring the system could support 300+ concurrent users with 99.9% uptime.",
      challenges: [
        "Handling 300+ concurrent WebSocket connections efficiently",
        "Implementing real-time queue position updates without conflicts",
        "Creating a flexible dynamic form generation system",
        "Ensuring system reliability during peak usage hours",
      ],
      results: [
        "85% reduction in average wait time",
        "99.9% system uptime achieved",
        "Positive feedback from amongst users",
        "Eliminated queue confusion and overcrowding",
      ],
      featured: true,
    },
    {
      title: "Predicting Generalized Anxiety Levels",
      description:
        "A thesis project that serves to predict generalized anxiety levels amongst the Pamantasan ng Lungsod ng Pasig students.",
      image: "/anxicare/landing-page.png",
      screenshots: [
        { src: "/anxicare/landing-page.png", name: "Landing Page" },
        { src: "/anxicare/user-login.png", name: "User Login" },
        { src: "/anxicare/user-reg.png", name: "User Registration" },
        { src: "/anxicare/user-dashboard.png", name: "User Dashboard" },
        { src: "/anxicare/user-status.png", name: "Anxiety Status Display" },
        { src: "/anxicare/admin-login.png", name: "Admin Login" },
        { src: "/anxicare/admin-dashboard.png", name: "Admin Dashboard" },
        { src: "/anxicare/admin-manage-users.png", name: "User Management" },
      ],
      technologies: ["Laravel", "PHP", "SQL", "Python", "Flask", "Chart.js", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      problem:
        "Mental health assessment in academic institutions lacked systematic approaches to identify students at risk of generalized anxiety disorder, leading to delayed interventions and inadequate support systems.",
      solution:
        "Developed a machine learning-based prediction system using Laravel and Python Flask that analyzes student behavioral patterns and survey responses to predict anxiety levels, enabling early intervention and personalized support.",
      contribution:
        "Built the entire full-stack application including the Laravel backend, Python ML pipeline with Flask API, and interactive dashboard with Chart.js visualizations. Implemented data collection mechanisms and trained predictive models achieving 85% accuracy.",
      challenges: [
        "Ensuring data privacy and ethical handling of sensitive mental health information",
        "Integrating Python ML models with PHP Laravel backend",
        "Creating accurate predictive models with limited training data",
        "Designing user-friendly interfaces for both students and counselors",
      ],
      results: [
        "85% prediction accuracy achieved",
        "Helped identify 200+ at-risk students",
        "Reduced counseling wait times by 40%",
        "Implemented in university counseling services",
      ],
      featured: true,
    },
    {
      title: "CPU Scheduling Simulator",
      description:
        "A browser-based simulator that visualizes the execution of popular CPU scheduling algorithms like FCFS, SJF, and SRTF in real-time.",
      image: "/CPUScheduling.png",
      screenshots: [{ src: "/CPUScheduling.png", name: "CPU Scheduling Simulator" }],
      technologies: ["Vue.js", "JavaScript", "Chart.js", "Tailwind CSS"],
      liveUrl: "https://chupurplejr.vercel.app/",
      githubUrl: "https://github.com/hyemu/ChuPurpleJr",
      problem:
        "Understanding how CPU scheduling algorithms work can be difficult for students and educators due to a lack of interactive, real-time tools that clearly demonstrate process execution and decision-making.",
      solution:
        "Developed a lightweight and customizable simulator that provides real-time visualization of FCFS, SJF, and SRTF algorithms. The interface is intuitive, includes light/dark mode support, and is designed for ease of learning and extension.",
      contribution:
        "Built the entire simulator using Vue.js, implementing the core logic for all three scheduling algorithms and rendering their execution visually with Chart.js. Also added a theme toggle and designed the UI to support future enhancements and user-driven simulations.",
      challenges: [
        "Implementing SJF and SRTF with precise real-time updates",
        "Synchronizing chart rendering with algorithm execution",
        "Creating an accessible and responsive UI for students and instructors",
        "Ensuring modularity for future algorithm extensions",
      ],
      results: [
        "Enhanced understanding of scheduling algorithms through visualization",
        "Used by students in CS operating systems courses",
        "Positive feedback for clarity, ease of use, and responsiveness",
        "Built-in light/dark mode and modular code structure for easy customization",
      ],
      featured: false,
    },
    {
      title: "Chuupurple Component Library",
      description: "A comprehensive Vue.js component library with modern design patterns and accessibility features.",
      image: "/chuupurple.png",
      screenshots: [{ src: "/chuupurple.png", name: "Chuupurple Component Library" }],
      technologies: ["Vue.js", "Tailwind CSS", "HTML", "CSS", "JavaScript", "WebPack", "Node.js"],
      liveUrl: "https://chuupurple.vercel.app/",
      githubUrl: "https://github.com/Brhylle/chuupurple",
      problem:
        "Vue.js developers needed a comprehensive component library that provided consistent design patterns, accessibility features, and easy customization options without the complexity of larger frameworks.",
      solution:
        "Created a lightweight, modular component library with over 20 reusable components, comprehensive documentation, and built-in accessibility features. Includes theming support and responsive design patterns.",
      contribution:
        "Designed and developed the entire component library architecture, created comprehensive documentation with live examples, implemented accessibility standards (WCAG 2.1), and established the build pipeline with Webpack for optimal bundle sizes.",
      challenges: [
        "Ensuring cross-browser compatibility and accessibility compliance",
        "Creating flexible theming system without performance overhead",
        "Maintaining consistent API design across all components",
        "Optimizing bundle size while providing comprehensive functionality",
      ],
      results: [
        "20+ reusable components with full documentation",
        "WCAG 2.1 AA accessibility compliance achieved",
        "50+ developers using the library in production",
        "Featured in Vue.js community resources",
      ],
      featured: false,
    },
  ]

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05,
        ease: [0.16, 1, 0.3, 1], // Enhanced easing curve
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Smoother spring-like easing
      } as Transition,
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.9, rotateX: 15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      } as Transition,
    },
  }

  const hoverOverlayVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      backdropFilter: "blur(0px)",
      rotateY: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      backdropFilter: "blur(8px)",
      rotateY: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      } as Transition,
    },
  }

  const sparkleVariants: Variants = {
    hidden: { scale: 0, rotate: 0, opacity: 0 },
    visible: {
      scale: [0, 1.3, 1],
      rotate: [0, 270, 360],
      opacity: [0, 1, 0.8],
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      } as Transition,
    },
  }

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.7, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      } as Transition,
    },
  }

  const modalVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 60,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      } as Transition,
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      y: 60,
      rotateX: -15,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      } as Transition,
    },
  }

  const handleAccordionChange = (projectTitle: string, value: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [projectTitle]: prev[projectTitle] === value ? "" : value,
    }))
  }

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="py-20 overflow-hidden scroll-mt-24" // Added scroll-mt-24 for proper offset
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
            <motion.div key={project.title} variants={cardVariants}>
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="overflow-hidden">
                  {/* Project Header */}
                  <div className="relative group">
                    {/* Removed the scaling animation from the image container */}
                    <div className="overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={300}
                        className="w-full h-64 object-cover transition-transform duration-500"
                      />
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
                          <Button className="cursor-pointer" onClick={() => openScreenshots(project.title)}>
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
                      <motion.div
                        className="flex flex-wrap gap-2"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {project.technologies.map((tech, idx) => (
                          <motion.div
                            key={tech}
                            variants={badgeVariants}
                            whileHover={{
                              scale: 1.1,
                              y: -2,
                              transition: { duration: 0.2 },
                            }}
                            custom={idx}
                          >
                            <Badge variant="secondary">{tech}</Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <style jsx global>{`
                        .smooth-accordion [data-state="open"] > div[data-accordion-content] {
                          animation: accordion-down 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                        }
                        .smooth-accordion [data-state="closed"] > div[data-accordion-content] {
                          animation: accordion-up 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                        }
                        @keyframes accordion-down {
                          from {
                            height: 0;
                            opacity: 0;
                            transform: translateY(-10px);
                          }
                          to {
                            height: var(--radix-accordion-content-height);
                            opacity: 1;
                            transform: translateY(0);
                          }
                        }
                        @keyframes accordion-up {
                          from {
                            height: var(--radix-accordion-content-height);
                            opacity: 1;
                            transform: translateY(0);
                          }
                          to {
                            height: 0;
                            opacity: 0;
                            transform: translateY(-10px);
                          }
                        }
                        .smooth-accordion [data-accordion-trigger] {
                          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                          transform-origin: center;
                        }
                        .smooth-accordion [data-accordion-trigger]:hover {
                          background-color: hsl(var(--accent));
                          color: hsl(var(--accent-foreground));
                          transform: translateY(-1px);
                          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                        }
                        .smooth-accordion [data-accordion-trigger][data-state="open"] {
                          background-color: hsl(var(--accent)/0.5);
                        }
                        .smooth-accordion [data-accordion-trigger][data-state="open"] svg {
                          transform: rotate(180deg) scale(1.1);
                          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                        }
                        .smooth-accordion [data-accordion-trigger] svg {
                          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                        }
                        .smooth-accordion [data-accordion-content] {
                          overflow: hidden;
                        }
                      `}</style>
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full smooth-accordion"
                        value={openAccordions[project.title] || ""}
                        onValueChange={(value) => handleAccordionChange(project.title, value)}
                      >
                        <AccordionItem value="problem" className="border-b border-border/50">
                          <AccordionTrigger className="cursor-pointer hover:no-underline py-4 px-4 rounded-lg transition-all duration-400">
                            <div className="flex items-center gap-3 text-left">
                              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                              <span className="font-semibold">The Problem</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4">
                            <motion.div
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                              <p className="text-muted-foreground leading-relaxed mb-4">{project.problem}</p>
                              <div>
                                <h6 className="font-medium mb-2">Key Challenges:</h6>
                                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                  {project.challenges.map((challenge, idx) => (
                                    <motion.li
                                      key={idx}
                                      initial={{ opacity: 0, x: -15 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.2 + idx * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                      {challenge}
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="solution" className="border-b border-border/50">
                          <AccordionTrigger className="cursor-pointer hover:no-underline py-4 px-4 rounded-lg transition-all duration-400">
                            <div className="flex items-center gap-3 text-left">
                              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="font-semibold">The Solution</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4">
                            <motion.div
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                              <p className="text-muted-foreground leading-relaxed mb-4">{project.solution}</p>
                              <div>
                                <h6 className="font-medium mb-2">Key Results:</h6>
                                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                  {project.results.map((result, idx) => (
                                    <motion.li
                                      key={idx}
                                      initial={{ opacity: 0, x: -15 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.2 + idx * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                      {result}
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="contribution" className="border-b-0">
                          <AccordionTrigger className="cursor-pointer hover:no-underline py-4 px-4 rounded-lg transition-all duration-400">
                            <div className="flex items-center gap-3 text-left">
                              <User2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                              <span className="font-semibold">My Contribution</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4">
                            <motion.div
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                              <p className="text-muted-foreground leading-relaxed">{project.contribution}</p>
                            </motion.div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

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
              Stay tuned, I’m still adding more projects to this portfolio.
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
                      onMouseEnter={() => setHoveredProject(project.title)}
                      onMouseLeave={() => setHoveredProject(null)}
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
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.1, duration: 0.3 }}
                                >
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
                                <motion.div
                                  key={tech}
                                  variants={badgeVariants}
                                  whileHover={{
                                    scale: 1.1,
                                    y: -2,
                                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.2 },
                                  }}
                                  custom={techIndex}
                                >
                                  <Badge
                                    variant="outline"
                                    className="text-xs transition-colors hover:bg-primary hover:text-primary-foreground"
                                  >
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </motion.div>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </DialogTrigger>

                  <AnimatePresence>
                    {openModal === project.title && (
                      <DialogContent
                        className="w-[95vw] max-w-[95vw] h-[90vh] max-h-[90vh] sm:w-[90vw] sm:max-w-[90vw] md:w-[85vw] md:max-w-4xl lg:w-[80vw] lg:max-w-5xl xl:max-w-6xl overflow-hidden p-0 gap-0"
                        onPointerDownOutside={() => setOpenModal(null)}
                      >
                        {/* Fixed Exit Button */}
                        <motion.button
                          className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg hover:bg-background transition-colors"
                          onClick={() => setOpenModal(null)}
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
                              <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-bold pr-12">
                                {project.title}
                              </DialogTitle>
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
                                      <Badge variant="secondary" className="text-xs sm:text-sm">
                                        {tech}
                                      </Badge>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>

                              {/* Links */}
                              <motion.div
                                className="flex flex-col sm:flex-row gap-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                              >
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
                    )}
                  </AnimatePresence>
                </Dialog>
              ))}
            </motion.div>
          </motion.div>
        )}

        <AnimatePresence aria-label="Project screenshots">
          {openScreenshotModal && (
            <Dialog open={!!openScreenshotModal} onOpenChange={() => setOpenScreenshotModal(null)}>
              <DialogContent className="w-[95vw] max-w-[95vw] h-[90vh] max-h-[90vh] sm:w-[90vw] sm:max-w-[90vw] md:w-[85vw] md:max-w-6xl lg:w-[80vw] lg:max-w-7xl overflow-hidden p-0 gap-0">
                {/* Fixed Exit Button */}
                <motion.button
                  className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg hover:bg-background transition-colors"
                  onClick={() => setOpenScreenshotModal(null)}
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
                        {openScreenshotModal} - Screenshots
                      </DialogTitle>
                    </DialogHeader>
                  </div>

                  <div className="flex-1 flex items-center justify-center relative bg-muted/20">
                    {(() => {
                      const project = projects.find((p) => p.title === openScreenshotModal)
                      if (!project) return null

                      return (
                        <>
                          {/* Navigation Buttons */}
                          {project.screenshots.length > 1 && (
                            <>
                              <motion.button
                                className="absolute left-4 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-3 shadow-lg hover:bg-background transition-colors"
                                onClick={prevScreenshot}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <ChevronLeft className="w-6 h-6" />
                              </motion.button>
                              <motion.button
                                className="absolute right-4 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-3 shadow-lg hover:bg-background transition-colors"
                                onClick={nextScreenshot}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <ChevronRight className="w-6 h-6" />
                              </motion.button>
                            </>
                          )}

                          <motion.div
                            key={currentScreenshotIndex}
                            className="max-w-full max-h-full p-4"
                            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <div className="text-center">
                              <Image
                                src={project.screenshots[currentScreenshotIndex]?.src || "/placeholder.svg"}
                                alt={`${project.title} screenshot ${currentScreenshotIndex + 1}`}
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
                                  {project.screenshots[currentScreenshotIndex]?.name}
                                </motion.h3>
                              </div>
                            </div>
                          </motion.div>
                        </>
                      )
                    })()}
                  </div>

                  {/* Screenshot Counter and Thumbnails */}
                  {(() => {
                    const project = projects.find((p) => p.title === openScreenshotModal)
                    if (!project || project.screenshots.length <= 1) return null

                    return (
                      <div className="p-4 border-t bg-background/50">
                        <div className="text-center mb-4">
                          <span className="text-sm text-muted-foreground">
                            {currentScreenshotIndex + 1} of {project.screenshots.length}
                          </span>
                        </div>

                        <div className="flex justify-center gap-2 overflow-x-auto pb-2">
                          {project.screenshots.map((screenshot, index) => (
                            <motion.button
                              key={index}
                              className={`flex-shrink-0 w-16 h-12 rounded border-2 overflow-hidden transition-all duration-300 ${
                                index === currentScreenshotIndex
                                  ? "border-primary ring-2 ring-primary/20 shadow-lg"
                                  : "border-border hover:border-primary/50"
                              }`}
                              onClick={() => setCurrentScreenshotIndex(index)}
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
                    )
                  })()}
                </motion.div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
