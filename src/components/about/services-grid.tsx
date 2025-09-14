"use client"

import { Code, Zap, Database, Settings } from "lucide-react"
import { motion } from "framer-motion"
import { ServiceCard } from "./service-card"

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
    },
  },
}

interface ServicesGridProps {
  isInView: boolean
}

export function ServicesGrid({ isInView }: ServicesGridProps) {
  return (
    <div className="flex justify-center">
      <motion.div
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            color={service.color}
            core={service.core}
            additional={service.additional}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  )
}
