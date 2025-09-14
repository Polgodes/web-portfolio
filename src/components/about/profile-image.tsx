"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as any,
    },
  },
}

export function ProfileImage() {
  return (
    <motion.div className="relative" variants={itemVariants}>
      <motion.div
        className="aspect-square bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-8"
        whileHover={{ scale: 1.02, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="w-full h-full bg-muted rounded-2xl flex items-center justify-center relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20"></div>
          <motion.div
            className="relative w-full h-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] as any }}
          >
            <Image
              src="/about-me-photo.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-2xl z-10"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
