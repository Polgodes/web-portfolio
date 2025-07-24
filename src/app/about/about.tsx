"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Code, User, Gamepad2, Zap, Database, Settings, Heart } from "lucide-react"
import { motion, AnimatePresence, useInView } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  const [activeTab, setActiveTab] = useState("developer")
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const tabs = [
    {
      id: "developer",
      label: "Developer",
      icon: <Code className="w-5 h-5" />,
      content: {
        title: "The Developer",
        description:
          "I'm a passionate full-stack developer who loves creating digital solutions that make a difference.",
        details: [
          "Fresh graduate with hands-on experience in web development",
          "Specialized in React, Next.js, and TypeScript",
          "Built the RTU - MIS Office Queueing System with my team",
          "Focused on performance, usability, and maintainability",
        ],
      },
    },
    {
      id: "person",
      label: "The Person",
      icon: <User className="w-5 h-5" />,
      content: {
        title: "Beyond Code",
        description: "Based in Pasig City, Philippines, I believe in work-life balance and meaningful connections.",
        details: [
          "Enjoys quality time with family and my cat",
          "Team player who loves collaboration",
          "Always eager to learn new technologies",
          "Believes in creating user-friendly solutions",
        ],
      },
    },
    {
      id: "gamer",
      label: "Gamer",
      icon: <Gamepad2 className="w-5 h-5" />,
      content: {
        title: "Gaming Enthusiast",
        description:
          "When I'm not immersed in code, you'll find me strategizing in Valorant or climbing ranks in League of Legends: Wild Rift. Gaming isn't just a hobby for me—it's where I learn teamwork, quick decision-making, and how to stay calm under pressure.",
        details: [
          "Valorant player - love the tactical gameplay",
          "League of Legends: Wild Rift enthusiast",
          "Enjoys various online multiplayer games",
          "Gaming helps me unwind and think creatively",
        ],
      },
    },
  ]

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks like React and Next.js.",
      color: "from-blue-500/20 to-blue-600/20",
      core: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "Canva", "Shadcn", "Lucide-react"],
      additional: ["JavaScript", "HTML/CSS"],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building scalable APIs and robust server-side applications using Node.js and Python.",
      color: "from-green-500/20 to-green-600/20",
      core: ["Node.js", "Python"],
      additional: ["Laravel", "Flask", "Socket.io"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Modeling and optimizing databases for performance and scalability.",
      color: "from-yellow-500/20 to-yellow-600/20",
      core: ["SQL"],
      additional: ["Firebase"],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Developer Tools",
      description: "Using productivity tools to streamline development workflows and deployments.",
      color: "from-gray-500/20 to-gray-600/20",
      core: ["Git", "GitHub", "VS Code", "Vercel"],
      additional: ["Docker", "Postman"],
    },
  ]

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
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const tabContentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.3,
      },
    },
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99],
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

        {/* Interactive Tabs */}
        <motion.div className="max-w-6xl mx-auto mb-20" variants={itemVariants}>
          <motion.div className="flex justify-center mb-8" variants={itemVariants}>
            <div className="flex bg-muted rounded-lg p-1">
              {tabs.map((tab, index) => (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Button
                    variant={activeTab === tab.id ? "default" : "ghost"}
                    onClick={() => setActiveTab(tab.id)}
                    className="flex items-center gap-2 relative overflow-hidden"
                  >
                    <motion.div
                      animate={{
                        scale: activeTab === tab.id ? 1.1 : 1,
                        rotate: activeTab === tab.id ? 360 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {tab.icon}
                    </motion.div>
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        className="absolute inset-0 bg-primary/10 rounded-md"
                        layoutId="activeTab"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="space-y-6"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.h3 className="text-3xl font-bold" variants={itemVariants}>
                  {tabs.find((tab) => tab.id === activeTab)?.content.title}
                </motion.h3>
                <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
                  {tabs.find((tab) => tab.id === activeTab)?.content.description}
                </motion.p>
                <motion.ul className="space-y-3" variants={containerVariants} initial="hidden" animate="visible">
                  {tabs
                    .find((tab) => tab.id === activeTab)
                    ?.content.details.map((detail, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3"
                        variants={listItemVariants}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 3,
                            delay: index * 0.2,
                          }}
                        >
                          <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        </motion.div>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                </motion.ul>
              </motion.div>
            </AnimatePresence>

            <motion.div className="relative" variants={itemVariants}>
              <motion.div
                className="aspect-square bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-8"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-full h-full bg-muted rounded-2xl flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20"></div>
                  <motion.div
                    className="relative w-full h-full"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                  >
                    <Image
                      src="/about-me-photo.jpg"
                      alt="Profile"
                      fill
                      className="object-cover rounded-2xl z-10"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="text-center" variants={itemVariants}>
          <motion.h3 className="text-2xl font-semibold mb-8" variants={itemVariants}>
            Technologies I Work With
          </motion.h3>
        </motion.div>

        {/* Services Grid */}
        <motion.div className="flex justify-center" variants={itemVariants}>
          <motion.div
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
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
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-primary`}
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
                      {service.icon}
                    </motion.div>
                    <motion.h3
                      className="text-xl font-semibold mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground leading-relaxed mb-4 flex-grow"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Tech Stack Badges */}
                    {(service.core || service.additional) && (
                      <motion.div
                        className="mt-6 text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {service.core && service.core.length > 0 && (
                          <div className="mb-4">
                            <p className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                              Core
                            </p>
                            <motion.div
                              className="flex flex-wrap gap-2"
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              {service.core.map((tech, i) => (
                                <motion.div
                                  key={i}
                                  variants={badgeVariants}
                                  whileHover={{
                                    scale: 1.1,
                                    y: -2,
                                    transition: { type: "spring", stiffness: 400 },
                                  }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Badge className="bg-foreground text-background hover:bg-foreground/90 px-4 py-1 text-xs font-medium cursor-pointer">
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </motion.div>
                          </div>
                        )}
                        {service.additional && service.additional.length > 0 && (
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                              Additional
                            </p>
                            <motion.div
                              className="flex flex-wrap gap-2"
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              {service.additional.map((tech, i) => (
                                <motion.div
                                  key={i}
                                  variants={badgeVariants}
                                  whileHover={{
                                    scale: 1.1,
                                    y: -2,
                                    transition: { type: "spring", stiffness: 400 },
                                  }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Badge
                                    variant="outline"
                                    className="border-muted-foreground/30 text-muted-foreground hover:bg-muted hover:text-foreground px-4 py-1 text-xs font-medium cursor-pointer"
                                  >
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </motion.div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
