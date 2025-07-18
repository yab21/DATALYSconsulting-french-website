"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export interface ToastProps {
  id: string
  message: string
  type: "success" | "error" | "warning" | "info"
  duration?: number
  onClose: (id: string) => void
}

const Toast = ({ id, message, type, duration = 5000, onClose }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => onClose(id), 300)
    }, duration)

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev - 100 / (duration / 100)
        return newProgress <= 0 ? 0 : newProgress
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      clearInterval(progressTimer)
    }
  }, [id, duration, onClose])

  const typeStyles = {
    success: {
      bg: "bg-green-500/90",
      icon: "✓",
      progressBg: "bg-green-400",
    },
    error: {
      bg: "bg-red-500/90",
      icon: "✕",
      progressBg: "bg-red-400",
    },
    warning: {
      bg: "bg-yellow-500/90",
      icon: "⚠",
      progressBg: "bg-yellow-400",
    },
    info: {
      bg: "bg-blue-500/90",
      icon: "ℹ",
      progressBg: "bg-blue-400",
    },
  }

  const style = typeStyles[type]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`relative overflow-hidden rounded-lg ${style.bg} min-w-[300px] max-w-[500px] border border-white/20 shadow-lg backdrop-blur-md`}
        >
          {/* Progress bar */}
          <motion.div
            className={`absolute left-0 top-0 h-1 ${style.progressBg} origin-left`}
            initial={{ scaleX: 1 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.1, ease: "linear" }}
          />

          <div className="flex items-center p-4">
            {/* Icon */}
            <motion.div
              className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20 font-bold text-white"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {style.icon}
            </motion.div>

            {/* Message */}
            <div className="flex-1 font-medium text-white">{message}</div>

            {/* Close button */}
            <motion.button
              onClick={() => {
                setIsVisible(false)
                setTimeout(() => onClose(id), 300)
              }}
              className="ml-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>
          </div>

          {/* Particle effects */}
          <div className="pointer-events-none absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white/40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.4, 0.8, 0.4],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Toast
