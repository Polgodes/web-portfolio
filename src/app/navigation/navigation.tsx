"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Moon, Sun, ChevronRight } from "lucide-react"
import { useTheme } from "next-themes"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const { scrollY } = useScroll()

  // Wrap navItems in useMemo to prevent re-creation on every render
  const navItems = useMemo(
    () => [
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
    ],
    [],
  )

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 150 // Increased offset for better detection

      // Handle hero section first
      if (window.scrollY < 200) {
        setActiveSection("")
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(`#${section}`)
            return
          }
        }
      }
    }

    // Debounce scroll events for better performance
    let timeoutId: NodeJS.Timeout
    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(handleScroll, 10)
    }

    window.addEventListener("scroll", debouncedHandleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll)
      clearTimeout(timeoutId)
    }
  }, [navItems])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const sectionId = href.substring(1)

    if (sectionId === "") {
      // Handle home/hero section
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      return
    }

    const element = document.getElementById(sectionId)

    if (element) {
      // Get the current scroll position and element position
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset
      const navHeight = 120 // Account for floating nav + padding
      const targetPosition = elementTop - navHeight

      // Ensure smooth scrolling is enabled
      document.documentElement.style.scrollBehavior = "smooth"

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      })

      // Reset scroll behavior after animation
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = "auto"
      }, 1000)
    } else {
      console.warn(`Could not find element for section: ${sectionId}`)
    }
  }

  return (
    <motion.nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? "w-full max-w-4xl" : "w-full max-w-2xl"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <div className="mx-4">
        <div
          className={`bg-background/20 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl transition-all duration-500 ${
            isScrolled ? "py-3 px-6" : "py-4 px-8"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Terminal Effect*/}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 text-xl font-bold tracking-tight hover:text-primary transition-colors"
              >
                <motion.div className="flex items-center space-x-1">
                  {/* Chevron prompt */}
                  <ChevronRight className="h-5 w-5 text-primary" />

                  {/* Blinking underscore cursor */}
                  <motion.span
                    className="text-primary text-lg font-mono"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  >
                    _
                  </motion.span>
                </motion.div>

                {/* Brand name */}
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  adrian.dev
                </span>
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-white/10 ${
                      activeSection === item.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.href && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl border border-primary/20"
                        layoutId="activeGlass"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-2">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="h-9 w-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10"
                >
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
              </motion.div>

              {/* Mobile Menu */}
              <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <motion.div whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10"
                      >
                        <Menu className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-xl p-0 overflow-hidden">
                    <motion.div
                      initial={{ x: "100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: "100%", opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="h-full flex flex-col space-y-6 mt-8"
                    >
                      <div className="text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                          className="flex items-center justify-center space-x-1 mb-2"
                        >
                          <ChevronRight className="h-8 w-8 text-primary" />
                          <motion.span
                            className="text-primary text-2xl font-mono"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          >
                            _
                          </motion.span>
                        </motion.div>

                        <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
                      </div>

                      <div className="space-y-2">
                        {navItems.map((item, index) => (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                          >
                            <button
                              onClick={() => handleNavClick(item.href)}
                              className={`w-full text-left block text-lg font-medium py-4 px-6 rounded-xl transition-all duration-300 ${
                                activeSection === item.href
                                  ? "text-primary bg-primary/10 border border-primary/20"
                                  : "text-foreground hover:text-primary hover:bg-white/5"
                              }`}
                            >
                              {item.label}
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
