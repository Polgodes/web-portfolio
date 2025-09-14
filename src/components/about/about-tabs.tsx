"use client"

import type React from "react"

import { useState } from "react"
import { Code, User, Heart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

interface TabContent {
  title: string
  description: string
  details: string[]
}

interface Tab {
  id: string
  label: string
  icon: React.ReactNode
  content: TabContent
}

const tabs: Tab[] = [
  {
    id: "developer",
    label: "Developer",
    icon: <Code className="w-5 h-5" />,
    content: {
      title: "The Developer",
      description:
        "I'm a Computer Science degree holder and passionate full-stack developer who loves creating digital solutions that make a difference.",
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
]

const tabContentVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99] as any,
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
      ease: [0.6, -0.05, 0.01, 0.99] as any,
    },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function AboutTabs() {
  const [activeTab, setActiveTab] = useState("developer")

  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="flex justify-center mb-8">
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
                className="cursor-pointer flex items-center gap-2 relative overflow-hidden"
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
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="space-y-6"
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h3 className="text-3xl font-bold">{tabs.find((tab) => tab.id === activeTab)?.content.title}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {tabs.find((tab) => tab.id === activeTab)?.content.description}
          </p>
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
    </div>
  )
}
