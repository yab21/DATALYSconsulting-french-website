"use client"
import { motion } from "framer-motion"

interface SkeletonLoaderProps {
  variant?: "text" | "circular" | "rectangular" | "card"
  width?: string | number
  height?: string | number
  className?: string
  lines?: number
}

const SkeletonLoader = ({
  variant = "text",
  width = "100%",
  height = "20px",
  className = "",
  lines = 3,
}: SkeletonLoaderProps) => {
  const shimmerVariants = {
    start: {
      x: "-100%",
    },
    end: {
      x: "100%",
    },
  }

  const pulseVariants = {
    pulse: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.02, 1],
    },
  }

  const baseClasses =
    "relative overflow-hidden bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"

  const getVariantClasses = () => {
    switch (variant) {
      case "circular":
        return "rounded-full"
      case "rectangular":
        return "rounded-md"
      case "card":
        return "rounded-lg"
      default:
        return "rounded"
    }
  }

  const getVariantSize = () => {
    switch (variant) {
      case "circular":
        return { width: width || "40px", height: height || "40px" }
      case "card":
        return { width: width || "100%", height: height || "200px" }
      default:
        return { width, height }
    }
  }

  if (variant === "text" && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {[...Array(lines)].map((_, index) => (
          <motion.div
            key={index}
            className={`${baseClasses} ${getVariantClasses()}`}
            style={{
              width: index === lines - 1 ? "75%" : "100%",
              height: height,
            }}
            animate="pulse"
            variants={pulseVariants}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              variants={shimmerVariants}
              animate="end"
              initial="start"
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
            />
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <motion.div
      className={`${baseClasses} ${getVariantClasses()} ${className}`}
      style={getVariantSize()}
      animate="pulse"
      variants={pulseVariants}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        variants={shimmerVariants}
        animate="end"
        initial="start"
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}

// Composant de skeleton pour une carte complète
export const SkeletonCard = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`rounded-lg border border-gray-200 p-6 dark:border-gray-700 ${className}`}
    >
      <div className="mb-4 flex items-center space-x-4">
        <SkeletonLoader variant="circular" width="50px" height="50px" />
        <div className="flex-1">
          <SkeletonLoader
            variant="text"
            width="60%"
            height="16px"
            className="mb-2"
          />
          <SkeletonLoader variant="text" width="40%" height="14px" />
        </div>
      </div>
      <SkeletonLoader variant="text" lines={3} height="14px" className="mb-4" />
      <SkeletonLoader
        variant="rectangular"
        width="100%"
        height="200px"
        className="mb-4"
      />
      <div className="flex space-x-2">
        <SkeletonLoader variant="rectangular" width="80px" height="32px" />
        <SkeletonLoader variant="rectangular" width="100px" height="32px" />
      </div>
    </div>
  )
}

export default SkeletonLoader
