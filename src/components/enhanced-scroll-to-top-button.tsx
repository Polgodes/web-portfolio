"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUp, Sparkles } from "lucide-react"

export function EnhancedScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about")
      const footerSection = document.querySelector("footer")

      if (!aboutSection || !footerSection) return

      const scrollPosition = window.scrollY
      const aboutTop = aboutSection.offsetTop - 200
      const footerTop = footerSection.offsetTop - window.innerHeight + 100

      // Show/hide button logic
      const shouldShow = scrollPosition >= aboutTop && scrollPosition < footerTop
      setIsVisible(shouldShow)

      // Calculate scroll progress for the progress ring
      if (shouldShow) {
        const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = Math.min(scrollPosition / totalScrollableHeight, 1)
        setScrollProgress(progress)
      }
    }

    // Throttle scroll events for better performance
    let timeoutId: NodeJS.Timeout
    const throttledHandleScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(handleScroll, 16) // ~60fps
    }

    window.addEventListener("scroll", throttledHandleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll)
      clearTimeout(timeoutId)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const circumference = 2 * Math.PI * 20 // radius = 20
  const strokeDashoffset = circumference - scrollProgress * circumference

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            {/* Progress Ring */}
            <svg className="absolute inset-0 w-12 h-12 transform -rotate-90" viewBox="0 0 44 44">
              <circle
                cx="22"
                cy="22"
                r="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-muted-foreground/20"
              />
              <motion.circle
                cx="22"
                cy="22"
                r="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-primary"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.1 }}
              />
            </svg>

            <Button
              onClick={scrollToTop}
              size="icon"
              className="h-12 w-12 rounded-full shadow-lg bg-background/80 backdrop-blur-sm hover:bg-background border-2 border-primary/20 text-foreground hover:text-primary relative overflow-hidden group"
              aria-label="Scroll to top"
            >
              {/* Sparkle effect on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="absolute top-1 right-1 h-2 w-2 text-primary animate-pulse" />
                <Sparkles className="absolute bottom-1 left-1 h-2 w-2 text-primary animate-pulse delay-75" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <ArrowUp className="h-5 w-5" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
