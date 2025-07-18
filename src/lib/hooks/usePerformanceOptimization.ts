import { useEffect, useCallback, useRef } from "react"

interface PerformanceOptions {
  enableGPUAcceleration?: boolean
  throttleAnimations?: boolean
  reducedMotion?: boolean
  maxFPS?: number
}

export const usePerformanceOptimization = (
  options: PerformanceOptions = {},
) => {
  const {
    enableGPUAcceleration = true,
    throttleAnimations = false,
    reducedMotion = false,
    maxFPS = 60,
  } = options

  const frameRef = useRef<number>()
  const lastFrameTimeRef = useRef<number>(0)
  const fpsInterval = 1000 / maxFPS

  // Détection du support GPU
  const hasGPUAcceleration = useCallback(() => {
    if (typeof window === "undefined") return false

    const canvas = document.createElement("canvas")
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    return !!gl
  }, [])

  // Optimisation des animations basée sur les performances
  const optimizeAnimation = useCallback(
    (callback: () => void) => {
      if (reducedMotion) {
        return
      }

      const animate = (currentTime: number) => {
        if (currentTime - lastFrameTimeRef.current >= fpsInterval) {
          lastFrameTimeRef.current = currentTime
          callback()
        }

        if (!throttleAnimations) {
          frameRef.current = requestAnimationFrame(animate)
        }
      }

      frameRef.current = requestAnimationFrame(animate)
    },
    [reducedMotion, throttleAnimations, fpsInterval],
  )

  // Configuration CSS pour l'accélération GPU
  const gpuStyles =
    enableGPUAcceleration && hasGPUAcceleration()
      ? {
          transform: "translateZ(0)",
          willChange: "transform",
          backfaceVisibility: "hidden" as const,
          perspective: "1000px",
        }
      : {}

  // Nettoyage des animations
  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  // Détection des préférences utilisateur
  useEffect(() => {
    if (typeof window === "undefined") return

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        // Réduire les animations
        document.documentElement.style.setProperty(
          "--animation-duration",
          "0.01s",
        )
      } else {
        // Restaurer les animations
        document.documentElement.style.removeProperty("--animation-duration")
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    handleChange(mediaQuery as any)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return {
    optimizeAnimation,
    gpuStyles,
    hasGPUAcceleration: hasGPUAcceleration(),
    isReducedMotion: reducedMotion,
  }
}

// Hook pour les animations fluides
export const useSmoothAnimation = () => {
  const { optimizeAnimation, gpuStyles } = usePerformanceOptimization({
    enableGPUAcceleration: true,
    maxFPS: 60,
  })

  const smoothTransition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  }

  const cinematicTransition = {
    duration: 0.8,
    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  }

  const microTransition = {
    duration: 0.2,
    ease: "easeOut" as const,
  }

  return {
    optimizeAnimation,
    gpuStyles,
    smoothTransition,
    cinematicTransition,
    microTransition,
  }
}
