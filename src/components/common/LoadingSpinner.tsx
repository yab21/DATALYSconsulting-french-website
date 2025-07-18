"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface LoadingSpinnerProps {
  message?: string
  isPageTransition?: boolean
}

const LoadingSpinner = ({
  message = "Chargement...",
  isPageTransition = false,
}: LoadingSpinnerProps) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Particules holographiques de fond */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#f5c034]/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Ondes holographiques */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(circle at ${30 + i * 20}% ${40 + i * 30}%, #f5c034 0%, transparent 60%)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo DATALYS animé */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="relative"
            animate={{
              filter: [
                "drop-shadow(0 0 20px rgba(245, 192, 52, 0.5))",
                "drop-shadow(0 0 40px rgba(245, 192, 52, 0.8))",
                "drop-shadow(0 0 20px rgba(245, 192, 52, 0.5))",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/images/logo/logo.png"
              alt="DATALYS Consulting"
              className="h-20 w-auto"
            />
          </motion.div>

          {/* Particules autour du logo */}
          <div className="pointer-events-none absolute inset-0">
            {Array.from({ length: 8 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-[#f5c034]/60"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 0.8, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: Math.random() * 2 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Spinner principal */}
        <motion.div
          className="relative mb-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="h-16 w-16 rounded-full border-4 border-[#f5c034]/20">
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#f5c034]"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          </div>

          {/* Anneau holographique */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#f5c034]/30"
            animate={{
              rotate: [0, -360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Barre de progression */}
        <div className="mb-4 w-64">
          <motion.div
            className="h-2 w-full overflow-hidden rounded-full bg-gray-800"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div
              className="relative h-full rounded-full bg-gradient-to-r from-[#f5c034] to-[#eab308]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            >
              {/* Effet de brillance */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: [-100, 100],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Message de chargement */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.p
            className="mb-2 text-lg font-light text-white"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {message}
          </motion.p>

          {isPageTransition && (
            <motion.p
              className="text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Transition en cours...
            </motion.p>
          )}
        </motion.div>

        {/* Pourcentage */}
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <motion.span
            className="text-2xl font-bold text-[#f5c034]"
            key={Math.floor(progress)}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {Math.floor(progress)}%
          </motion.span>
        </motion.div>
      </div>

      {/* Grille holographique de fond */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(245, 192, 52, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245, 192, 52, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </motion.div>
  )
}

export default LoadingSpinner
