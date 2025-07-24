"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun, Sparkles } from "lucide-react"
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
      // Adjust scroll position to account for floating navigation
      const scrollPosition = window.scrollY + 120 // Increased offset for floating nav

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(`#${section}`)
            break
          }
        }
      }

      // Handle hero section (no ID, but at the top)
      if (window.scrollY < 100) {
        setActiveSection("")
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const sectionId = href.substring(1)
    const element = document.getElementById(sectionId)

    if (element) {
      // Calculate the exact position accounting for the floating navigation
      const elementTop = element.offsetTop
      const navHeight = 100 // Approximate height of floating nav + padding
      const targetPosition = elementTop - navHeight

      window.scrollTo({
        top: Math.max(0, targetPosition), // Ensure we don't scroll above the page
        behavior: "smooth",
      })
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
            {/* Logo with sparkle effect */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 text-xl font-bold tracking-tight hover:text-primary transition-colors"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="h-5 w-5 text-primary" />
                </motion.div>
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
                  <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-xl">
                    <div className="flex flex-col space-y-6 mt-8">
                      <div className="text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                        >
                          <Sparkles className="h-8 w-8 text-primary mx-auto mb-2" />
                        </motion.div>
                        <h2 className="text-xl font-bold">Menu</h2>
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
                    </div>
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
