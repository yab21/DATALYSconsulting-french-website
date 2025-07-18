"use client"
import ScrollUp from "@/components/LayoutFR/Common/ScrollUp"
import Features from "@/components/LayoutFR/Features"
import AboutSectionThree from "@/components/LayoutFR/About/AboutSectionThree"
import LastHero from "@/components/LayoutFR/LastHero"
import AnimatedReveal from "@/components/common/AnimatedReveal"
import { motion } from "framer-motion"

// Composant pour les particules de transition entre sections
const SectionTransition = () => {
  return (
    <motion.div
      className="relative h-24 w-full overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Particules de transition */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            <div
              className={`h-2 w-2 rounded-full ${
                i % 3 === 0
                  ? "bg-[#f5c034]/40"
                  : i % 3 === 1
                    ? "bg-blue-400/30"
                    : "bg-purple-400/35"
              } blur-sm`}
            />
          </motion.div>
        ))}
      </div>

      {/* Ligne de séparation animée */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-px w-0 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#f5c034] to-transparent"
        initial={{ width: 0 }}
        whileInView={{ width: "80%" }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Effet de brillance */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f5c034]/10 to-transparent"
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  )
}

// Composant pour les effets de morphing en arrière-plan
const MorphingBackground = () => {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* Formes morphing */}
      <motion.div
        className="absolute left-10 top-20 h-32 w-32 rounded-full bg-gradient-to-br from-[#f5c034]/5 to-blue-400/5 blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
          borderRadius: ["50%", "25%", "50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 h-48 w-48 rounded-full bg-gradient-to-br from-purple-400/5 to-[#f5c034]/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          borderRadius: ["50%", "30%", "50%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="from-blue-400/3 to-purple-400/3 absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -180, -360],
          borderRadius: ["50%", "40%", "50%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  )
}

export default function AnimatedHomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden"
    >
      {/* Arrière-plan morphing */}
      <MorphingBackground />

      {/* Contenu principal */}
      <div className="relative z-10">
        <ScrollUp />

        {/* Section Hero avec révélation */}
        <AnimatedReveal direction="scale" duration={1.2}>
          <LastHero />
        </AnimatedReveal>

        {/* Transition entre sections */}
        <SectionTransition />

        {/* Section About avec morphing */}
        <AnimatedReveal direction="morphing" duration={1.5} delay={0.2}>
          <AboutSectionThree />
        </AnimatedReveal>

        {/* Transition entre sections */}
        <SectionTransition />

        {/* Section Features avec rotation */}
        <AnimatedReveal direction="rotate" duration={1.3} delay={0.4}>
          <Features />
        </AnimatedReveal>

        {/* Effet de particules finales */}
        <motion.div
          className="relative h-32 w-full overflow-hidden bg-gradient-to-b from-gray-900 to-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Particules ascendantes */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: 0,
                }}
                animate={{
                  y: [0, -150],
                  opacity: [0, 1, 0],
                  scale: [0.3, 1, 0.3],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: Math.random() * 3,
                }}
              >
                <div
                  className={`h-2 w-2 rounded-full ${
                    i % 4 === 0
                      ? "bg-[#f5c034]/50"
                      : i % 4 === 1
                        ? "bg-blue-400/40"
                        : i % 4 === 2
                          ? "bg-purple-400/45"
                          : "bg-white/30"
                  } blur-sm`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.main>
  )
}
