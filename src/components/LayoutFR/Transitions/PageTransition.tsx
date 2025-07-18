"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { ReactNode, useEffect, useState } from "react"

interface PageTransitionProps {
  children: ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [pathname])

  // Variants pour les transitions de page
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98,
      filter: "blur(4px)",
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    },
    out: {
      opacity: 0,
      y: -20,
      scale: 1.02,
      filter: "blur(4px)",
    },
  }

  const pageTransition = {
    type: "tween",
    ease: [0.25, 0.46, 0.45, 0.94],
    duration: 0.6,
  }

  // Variants pour l'overlay de transition
  const overlayVariants = {
    initial: {
      scaleX: 0,
      originX: 0,
    },
    animate: {
      scaleX: 1,
      originX: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    exit: {
      scaleX: 0,
      originX: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
  }

  // Variants pour les particules de transition
  const particleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="relative"
      >
        {/* Overlay de transition */}
        <AnimatePresence>
          {isLoading && (
            <>
              <motion.div
                className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
                variants={overlayVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              />

              {/* Particules de transition */}
              <div className="pointer-events-none fixed inset-0 z-50">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-2 w-2 rounded-full bg-[#f5c034]"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    variants={particleVariants}
                    initial="initial"
                    animate="animate"
                    transition={{
                      delay: Math.random() * 0.5,
                      duration: 1,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>

              {/* Logo de chargement */}
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <motion.div
                    className="mx-auto mb-4 h-16 w-16 rounded-full border-4 border-[#f5c034]/20 border-t-[#f5c034]"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.p
                    className="text-lg font-light text-white"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Chargement...
                  </motion.p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Contenu de la page */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.3, delay: isLoading ? 0 : 0.3 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
