"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle2, User2 } from "lucide-react"
import { motion } from "framer-motion"
import type { Project } from "./project-data"

interface ProjectTabsProps {
  project: Project
}

export function ProjectTabs({ project }: ProjectTabsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Tabs defaultValue="problem" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="problem" className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-500" />
            <span className="hidden sm:inline">The Problem</span>
            <span className="sm:hidden">Problem</span>
          </TabsTrigger>
          <TabsTrigger value="solution" className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span className="hidden sm:inline">The Solution</span>
            <span className="sm:hidden">Solution</span>
          </TabsTrigger>
          <TabsTrigger value="contribution" className="flex items-center gap-2">
            <User2 className="w-4 h-4 text-blue-500" />
            <span className="hidden sm:inline">My Contribution</span>
            <span className="sm:hidden">Contribution</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="problem" className="mt-0">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-4 rounded-lg border bg-card"
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
        </TabsContent>

        <TabsContent value="solution" className="mt-0">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-4 rounded-lg border bg-card"
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
        </TabsContent>

        <TabsContent value="contribution" className="mt-0">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-4 rounded-lg border bg-card"
          >
            <p className="text-muted-foreground leading-relaxed">{project.contribution}</p>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
