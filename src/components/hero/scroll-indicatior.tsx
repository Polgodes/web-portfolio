"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

interface ScrollIndicatorProps {
  targetId: string
  className?: string
}

export function ScrollIndicator({ targetId, className }: ScrollIndicatorProps) {
  const handleScroll = () => {
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset
      const navHeight = 120
      const targetPosition = elementTop - navHeight
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      })
    }
  }

  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      initial={{ opacity: 0 }}
      animate={{
        y: [0, -10, 0],
        opacity: 1,
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
      onClick={handleScroll}
    >
      <ArrowDown className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors" />
    </motion.div>
  )
}
