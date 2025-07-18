import { useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

interface ScrollAnimationOptions {
  offset?: ["start end", "end start"] | ["start center", "end center"]
  spring?: {
    stiffness?: number
    damping?: number
  }
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const ref = useRef<HTMLElement>(null)
  const { offset = ["start end", "end start"], spring } = options

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  })

  // Animations de base
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const yReverse = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8],
  )

  // Animations avancées
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15])
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10])
  const skewX = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5])

  // Animations de morphing
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0px", "20px", "0px"],
  )

  // Animations de couleur
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "rgba(245, 192, 52, 0.1)",
      "rgba(56, 189, 248, 0.1)",
      "rgba(168, 85, 247, 0.1)",
    ],
  )

  // Animations avec spring pour plus de fluidité
  const springConfig = spring || { stiffness: 100, damping: 30 }
  const springY = useSpring(y, springConfig)
  const springScale = useSpring(scale, springConfig)
  const springOpacity = useSpring(opacity, springConfig)

  return {
    ref,
    scrollYProgress,
    animations: {
      y: springY,
      yReverse,
      opacity: springOpacity,
      scale: springScale,
      rotateX,
      rotateY,
      skewX,
      borderRadius,
      backgroundColor,
    },
  }
}

// Hook simplifié pour les animations de parallaxe
export const useParallaxAnimation = (depth: number = 0.5) => {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [depth * 100, -depth * 100])
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3 + depth * 0.2, 1, 1, 0.3 + depth * 0.2],
  )
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1 - depth * 0.1, 1, 1 - depth * 0.1],
  )

  return {
    ref,
    scrollYProgress,
    y,
    opacity,
    scale,
  }
}

// Hook pour les animations de morphing
export const useMorphingAnimation = () => {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["0px", "50px", "0px", "25px", "0px"],
  )
  const width = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["100%", "80%", "100%"],
  )
  const height = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["100%", "120%", "100%"],
  )
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 0])
  const skewX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 2, 0])

  return {
    ref,
    scrollYProgress,
    borderRadius,
    width,
    height,
    rotate,
    skewX,
  }
}

// Hook pour les animations de révélation
export const useRevealAnimation = () => {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0])

  return {
    ref,
    scrollYProgress,
    y,
    opacity,
    scale,
    rotateX,
  }
}
