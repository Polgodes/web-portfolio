"use client"

import { useState, useEffect } from "react"
import type { LucideIcon } from "lucide-react"

interface TypingText {
  text: string
  icon: LucideIcon
}

interface UseTypingAnimationProps {
  texts: TypingText[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function useTypingAnimation({
  texts,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000,
}: UseTypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentTextObj = texts[currentTextIndex]
    const fullText = currentTextObj.text
    let timeoutId: NodeJS.Timeout

    if (isTyping) {
      if (displayedText.length < fullText.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1))
        }, typingSpeed)
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false)
        }, pauseDuration)
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, deletingSpeed)
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [displayedText, isTyping, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration])

  return {
    displayedText,
    currentTextIndex,
    currentIcon: texts[currentTextIndex]?.icon,
    isTyping,
  }
}
