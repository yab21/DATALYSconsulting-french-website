"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  delay?: number
  className?: string
  prefix?: string
  suffix?: string
  decimals?: number
  morphing?: boolean
}

const AnimatedCounter = ({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  className = "",
  prefix = "",
  suffix = "",
  decimals = 0,
  morphing = false,
}: AnimatedCounterProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3, once: true })
  const [count, setCount] = useState(from)
  const [isAnimating, setIsAnimating] = useState(false)

  // Scroll-based animations pour plus de dynamisme
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8])
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360])

  useEffect(() => {
    if (isInView && !isAnimating) {
      setIsAnimating(true)
      const startTime = Date.now()
      const startValue = from
      const endValue = to
      const totalDuration = duration * 1000

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / totalDuration, 1)

        // Easing function pour un mouvement plus naturel
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)

        const currentValue = startValue + (endValue - startValue) * easeOutQuart
        setCount(currentValue)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      const timeoutId = setTimeout(() => {
        animate()
      }, delay * 1000)

      return () => clearTimeout(timeoutId)
    }
  }, [isInView, from, to, duration, delay, isAnimating])

  const formatNumber = (num: number) => {
    return num.toFixed(decimals)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.8 }
      }
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      whileHover={{
        scale: 1.1,
        rotateY: 5,
        transition: { duration: 0.3 },
      }}
    >
      {/* Effet de lueur pulsante */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-[#f5c034]/20 via-[#f5c034]/40 to-[#f5c034]/20 blur-xl"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Particules flottantes autour du compteur */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#f5c034]/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Compteur principal avec effet de morphing */}
      <motion.span
        className="relative z-10 font-bold"
        animate={
          morphing
            ? {
                scaleY: [1, 1.2, 1],
                scaleX: [1, 0.9, 1],
                skewX: [0, 2, 0],
              }
            : {}
        }
        transition={{
          duration: 0.3,
          repeat: isAnimating ? Infinity : 0,
          repeatType: "reverse",
        }}
      >
        {prefix}
        <motion.span
          key={count}
          initial={{ opacity: 0, y: 20, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {formatNumber(count)}
        </motion.span>
        {suffix}
      </motion.span>

      {/* Effet de brillance qui traverse le compteur */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
      />

      {/* Bordure animée */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-transparent"
        animate={{
          borderColor: [
            "rgba(245, 192, 52, 0)",
            "rgba(245, 192, 52, 0.5)",
            "rgba(245, 192, 52, 0)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}

export default AnimatedCounter
