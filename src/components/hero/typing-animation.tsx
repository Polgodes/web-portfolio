/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Palette, Sparkles } from "lucide-react"

interface TypingAnimationProps {
  className?: string
}

export function TypingAnimation({ className }: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  const dynamicTexts = [
    { text: "Full-Stack Web Developer & UI/UX Specialist", icon: Code },
    { text: "I design, develop, and deploy digital solutions", icon: Palette },
    { text: "Building high-impact web experiences", icon: Sparkles },
    { text: "Turning ideas into scalable digital products", icon: Code },
    { text: "Code meets design, user meets value", icon: Palette },
  ]

  useEffect(() => {
    const currentTextObj = dynamicTexts[currentTextIndex]
    const fullText = currentTextObj.text
    let timeoutId: NodeJS.Timeout

    if (isTyping) {
      if (displayedText.length < fullText.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1))
        }, 50)
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 30)
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [displayedText, isTyping, currentTextIndex])

  return (
    <div className={className}>
      {/* Typing Animation Text */}
      <div className="relative h-16 md:h-20 flex items-center justify-center overflow-hidden">
        <p className="text-xl md:text-2xl text-muted-foreground flex items-center justify-center px-4">
          {(() => {
            const Icon = dynamicTexts[currentTextIndex].icon
            return <Icon className="w-5 h-5 mr-2 text-primary" />
          })()}
          {displayedText}
          <motion.span
            className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {dynamicTexts.map((_, index) => (
          <motion.div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentTextIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>
    </div>
  )
}
