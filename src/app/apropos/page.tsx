"use client"

import AboutSectionOne from "@/components/LayoutFR/About/AboutSectionOne"
import AboutSectionFour from "@/components/LayoutFR/About/AboutSectionFour"
import Breadcrumb from "@/components/LayoutFR/Common/Breadcrumb"
import Features from "@/components/LayoutFR/Features"
import { motion } from "framer-motion"

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Breadcrumb pageName="A propos de nous" />

      {/* Section Hero avec animation */}
      <motion.section
        className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Particules décoratives */}
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
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </motion.section>

      {/* Section About avec animations améliorées */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <AboutSectionFour />
      </motion.div>

      {/* Section Features avec animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Features />
      </motion.div>

      {/* Section AboutSectionOne avec animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <AboutSectionOne />
      </motion.div>
    </motion.div>
  )
}

export default AboutPage
