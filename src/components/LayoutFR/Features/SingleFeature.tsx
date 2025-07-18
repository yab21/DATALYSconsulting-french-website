"use client"

import { motion } from "framer-motion"
import { Feature } from "@/types/feature"
import { useRef, useState } from "react"

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const { icon, title, paragraph } = feature

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      className="h-full w-full"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative h-full overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-8 shadow-lg backdrop-blur-sm"
        whileHover={{
          y: -5,
          scale: 1.02,
          boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        ref={scrollRef}
      >
        {/* Effet de lueur subtil au hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#f5c034]/10 via-transparent to-[#eab308]/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10 flex h-full flex-col items-center text-center">
          {/* Icône avec animation simple */}
          <motion.div
            className="relative mb-6 flex items-center justify-center"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="relative rounded-full border border-white/30 bg-gradient-to-br from-[#f5c034]/20 to-[#eab308]/20 p-4"
              animate={{
                boxShadow: isHovered
                  ? "0 0 20px rgba(245, 192, 52, 0.3)"
                  : "0 0 10px rgba(245, 192, 52, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl text-[#f5c034]">{icon}</div>
            </motion.div>
          </motion.div>

          {/* Titre avec animation simple */}
          <motion.h3
            className="relative mb-5 text-center text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl"
            whileHover={{
              color: "#f5c034",
              transition: { duration: 0.2 },
            }}
          >
            {title}
          </motion.h3>

          {/* Paragraphe avec texte clair */}
          <motion.div className="flex flex-1 items-center">
            <p className="text-center text-base font-light leading-relaxed text-gray-200">
              {paragraph}
            </p>
          </motion.div>

          {/* Bouton "En savoir plus" optionnel */}
          <motion.a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#f5c034]/30 bg-[#f5c034]/10 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#f5c034]/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            En savoir plus
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default SingleFeature
