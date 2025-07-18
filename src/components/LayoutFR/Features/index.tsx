"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import SingleFeature from "./SingleFeature"
import featuresData from "./featuresData"
import { useRef } from "react"
import AnimatedReveal from "@/components/common/AnimatedReveal"

// Particules subtiles pour l'ambiance
const SubtleParticles = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#f5c034]/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, -100],
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

// Gradient de fond subtil
const SubtleGradient = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="absolute inset-0 bg-gradient-to-r from-[#f5c034]/5 via-transparent to-[#eab308]/5" />
    </div>
  )
}

const Features = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <>
      <section
        id="features"
        ref={containerRef}
        className="relative overflow-hidden py-20 md:py-28 lg:py-32"
      >
        {/* Effets de fond simplifiés */}
        <SubtleGradient />
        <SubtleParticles />

        <motion.div
          className="font-Title container relative z-10"
          style={{
            opacity,
            y,
          }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Titre principal simplifié */}
          <AnimatedReveal direction="up" delay={0}>
            <motion.div
              className="mx-auto mb-20 max-w-[600px] text-center"
              ref={scrollRef}
            >
              <motion.h2
                className="font-Title mb-6 text-center text-4xl font-bold !leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Nos{" "}
                <span className="bg-gradient-to-r from-[#f5c034] to-[#eab308] bg-clip-text text-transparent">
                  Expertises
                </span>
              </motion.h2>

              <motion.p
                className="mt-8 text-lg text-gray-300 sm:text-xl md:text-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Découvrez nos solutions innovantes qui transforment votre
                infrastructure
              </motion.p>
            </motion.div>
          </AnimatedReveal>

          {/* Grille des features simplifiée */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3">
              {featuresData.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative"
                >
                  <SingleFeature feature={feature} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

export default Features
