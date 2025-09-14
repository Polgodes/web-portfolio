"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { badgeVariants } from "./animation-variants"

interface TechBadgeProps {
  tech: string
  index: number
  variant?: "default" | "secondary" | "outline"
  size?: "sm" | "default"
}

export function TechBadge({ tech, index, variant = "secondary", size = "default" }: TechBadgeProps) {
  return (
    <motion.div
      variants={badgeVariants}
      whileHover={{
        scale: 1.1,
        y: -2,
        boxShadow: size === "sm" ? "0 4px 8px rgba(0,0,0,0.1)" : undefined,
        transition: { duration: 0.2 },
      }}
      custom={index}
    >
      <Badge
        variant={variant}
        className={`${size === "sm" ? "text-xs transition-colors hover:bg-primary hover:text-primary-foreground" : ""}`}
      >
        {tech}
      </Badge>
    </motion.div>
  )
}
