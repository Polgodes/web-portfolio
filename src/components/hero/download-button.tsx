"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Loader2, Check } from "lucide-react"

interface DownloadButtonProps {
  className?: string
}

export function DownloadButton({ className }: DownloadButtonProps) {
  const [downloading, setDownloading] = useState(false)
  const [completed, setCompleted] = useState(false)

  const handleDownload = () => {
    // Start download
    const link = document.createElement("a")
    link.href = "/resume/adrain.dev-resume.pdf"
    link.download = "adrian.dev-resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Animate skeleton state
    setDownloading(true)
    setCompleted(false)

    setTimeout(() => {
      setDownloading(false)
      setCompleted(true)

      setTimeout(() => {
        setCompleted(false)
      }, 2000)
    }, 2000)
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={className}>
      <Button
        variant="outline"
        size="lg"
        className="cursor-pointer text-lg px-8 py-3 bg-transparent flex items-center gap-2"
        onClick={handleDownload}
        disabled={downloading}
      >
        {downloading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Downloading...
          </>
        ) : completed ? (
          <>
            <Check className="w-5 h-5 text-green-500" />
            Download Complete
          </>
        ) : (
          "Download Resume"
        )}
      </Button>
    </motion.div>
  )
}
