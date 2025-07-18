"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, ReactNode } from "react"

interface AnimatedRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "scale" | "rotate" | "morphing"
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  once?: boolean
}

const AnimatedReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
  threshold = 0.1,
  once = true,
}: AnimatedRevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: threshold,
    once,
    margin: "0px 0px -100px 0px",
  })

  // Scroll-based animations pour plus de dynamisme
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8])

  const getVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    }

    switch (direction) {
      case "up":
        return {
          hidden: {
            opacity: 0,
            y: 60,
            scale: 0.9,
            rotateX: 15,
            filter: "blur(4px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
            transition: {
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        }
      case "down":
        return {
          hidden: {
            opacity: 0,
            y: -60,
            scale: 0.9,
            rotateX: -15,
            filter: "blur(4px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
            transition: {
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        }
      case "left":
        return {
          hidden: {
            opacity: 0,
            x: -60,
            scale: 0.9,
            rotateY: -15,
            filter: "blur(4px)",
          },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            rotateY: 0,
            filter: "blur(0px)",
            transition: {
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        }
      case "right":
        return {
          hidden: {
            opacity: 0,
            x: 60,
            scale: 0.9,
            rotateY: 15,
            filter: "blur(4px)",
          },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            rotateY: 0,
            filter: "blur(0px)",
            transition: {
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        }
      case "scale":
        return {
          hidden: {
            opacity: 0,
            scale: 0.3,
            rotateZ: -180,
            filter: "blur(8px)",
          },
          visible: {
            opacity: 1,
            scale: 1,
            rotateZ: 0,
            filter: "blur(0px)",
            transition: {
              duration: duration * 1.2,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        }
      case "rotate":
        return {
          hidden: {
            opacity: 0,
            rotateZ: -180,
            scale: 0.8,
            filter: "blur(6px)",
          },
          visible: {
            opacity: 1,
            rotateZ: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
              duration: duration * 1.3,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        }
      case "morphing":
        return {
          hidden: {
            opacity: 0,
            scale: 0.5,
            borderRadius: "50%",
            rotateZ: 180,
            skewX: 20,
            filter: "blur(10px)",
          },
          visible: {
            opacity: 1,
            scale: 1,
            borderRadius: "0%",
            rotateZ: 0,
            skewX: 0,
            filter: "blur(0px)",
            transition: {
              duration: duration * 1.5,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        }
      default:
        return baseVariants
    }
  }

  const variants = getVariants()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      whileHover={{
        scale: 1.02,
        rotateX: 2,
        rotateY: 2,
        transition: { duration: 0.3 },
      }}
    >
      {children}

      {/* Effet de lueur dynamique */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-[#f5c034]/0 via-[#f5c034]/10 to-[#f5c034]/0 blur-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.5, scale: 1.2 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: duration * 1.5, delay: delay + 0.3 }}
      />
    </motion.div>
  )
}

export default AnimatedReveal
