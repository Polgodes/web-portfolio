"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface TechBadgeProps {
  tech: string
  variant?: "default" | "outline"
  index?: number
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99] as any,
    },
  },
}

export function TechBadge({ tech, variant = "default", index = 0 }: TechBadgeProps) {
  return (
    <motion.div
      variants={badgeVariants}
      whileHover={{
        scale: 1.1,
        y: -2,
        transition: { type: "spring", stiffness: 400 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Badge
        variant={variant}
        className={
          variant === "default"
            ? "bg-foreground text-background hover:bg-foreground/90 px-4 py-1 text-xs font-medium cursor-pointer"
            : "border-muted-foreground/30 text-muted-foreground hover:bg-muted hover:text-foreground px-4 py-1 text-xs font-medium cursor-pointer"
        }
      >
        {tech}
      </Badge>
    </motion.div>
  )
}
