"use client"

import type { Variants, Transition } from "framer-motion"

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    } as Transition,
  },
}

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    } as Transition,
  },
}

export const hoverOverlayVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    backdropFilter: "blur(0px)",
    rotateY: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    backdropFilter: "blur(8px)",
    rotateY: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    } as Transition,
  },
}

export const sparkleVariants: Variants = {
  hidden: { scale: 0, rotate: 0, opacity: 0 },
  visible: {
    scale: [0, 1.3, 1],
    rotate: [0, 270, 360],
    opacity: [0, 1, 0.8],
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    } as Transition,
  },
}

export const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    } as Transition,
  },
}

export const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 60,
    rotateX: 15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    } as Transition,
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    y: 60,
    rotateX: -15,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    } as Transition,
  },
}
