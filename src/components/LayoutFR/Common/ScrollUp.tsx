"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop
      const maxHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / maxHeight) * 100

      setScrollProgress(progress)
      setIsVisible(scrolled > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: 20,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      y: 20,
      rotate: 180,
      transition: {
        duration: 0.3,
      },
    },
  }

  const progressVariants = {
    initial: { pathLength: 0 },
    animate: { pathLength: scrollProgress / 100 },
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.button
            onClick={scrollToTop}
            className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-[#f5c034] to-[#eab308] shadow-lg backdrop-blur-sm"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 20px 40px rgba(245, 192, 52, 0.4)",
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            {/* Cercle de progression */}
            <svg
              className="absolute inset-0 h-full w-full -rotate-90"
              viewBox="0 0 56 56"
            >
              <circle
                cx="28"
                cy="28"
                r="26"
                fill="none"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="2"
              />
              <motion.circle
                cx="28"
                cy="28"
                r="26"
                fill="none"
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth="2"
                strokeLinecap="round"
                variants={progressVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.1 }}
                style={{
                  pathLength: scrollProgress / 100,
                }}
              />
            </svg>

            {/* Icône flèche */}
            <motion.div
              className="relative z-10 text-white"
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </motion.div>

            {/* Effet de lueur */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{
                scale: 1.2,
                opacity: 0.3,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Particules au hover */}
            <div className="pointer-events-none absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-1 w-1 rounded-full bg-white/60"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.button>

          {/* Tooltip */}
          <motion.div
            className="absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg border border-white/10 bg-gray-900/90 px-3 py-1 text-sm text-white backdrop-blur-sm"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            whileHover={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            Retour en haut
            <div className="absolute right-4 top-full h-0 w-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900/90" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollUp
