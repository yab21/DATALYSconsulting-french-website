"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import AnimatedReveal from "@/components/common/AnimatedReveal"

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
)

const List = ({ text }: { text: string }) => (
  <p className="mb-5 flex items-center text-lg font-light text-slate-300">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
)

// Composant pour les particules narratives thématiques
const NarrativeParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => i)

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.5, 0.5],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        >
          {i % 5 === 0 ? (
            <div className="h-3 w-3 rounded-full bg-[#f5c034]/40 blur-sm" />
          ) : i % 5 === 1 ? (
            <div className="h-2 w-2 rounded-full bg-blue-400/50" />
          ) : i % 5 === 2 ? (
            <div className="h-2.5 w-2.5 rounded-full bg-purple-400/40" />
          ) : i % 5 === 3 ? (
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400/30" />
          ) : (
            <div className="h-2 w-2 rounded-full bg-white/40" />
          )}
        </motion.div>
      ))}
    </div>
  )
}

// Composant pour les éléments géométriques animés
const GeometricElements = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Cercles orbitaux */}
      <motion.div
        className="absolute left-16 top-32 h-32 w-32 rounded-full border border-[#f5c034]/30"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-24 right-20 h-20 w-20 rounded-full border border-blue-400/40"
        animate={{
          rotate: [360, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Lignes narratives */}
      <motion.div
        className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-[#f5c034]/30 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 h-px w-full bg-gradient-to-l from-transparent via-purple-400/30 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Éléments décoratifs rotatifs */}
      <motion.div
        className="absolute right-32 top-16 h-4 w-4 rotate-45 border border-[#f5c034]/50"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-32 left-24 h-3 w-3 rotate-45 border border-blue-400/50"
        animate={{
          rotate: [45, -315],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}

// Composant pour l'animation de typing avec curseur
const TypewriterText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isVisible && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 60 + delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, delay, isVisible])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      transition={{ duration: 0.5 }}
    >
      {displayText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-1 inline-block h-6 w-1 bg-[#f5c034]"
        />
      )}
    </motion.span>
  )
}

// Composant pour les lignes narratives SVG
const NarrativeLines = () => {
  return (
    <motion.svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <defs>
        <linearGradient
          id="narrativeGradient"
          x1="0"
          y1="0"
          x2="1200"
          y2="800"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f5c034" stopOpacity="0.3" />
          <stop offset="0.5" stopColor="#38bdf8" stopOpacity="0.2" />
          <stop offset="1" stopColor="#a855f7" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Lignes narratives courbes */}
      <motion.path
        d="M100 200 Q600 100 1100 300"
        stroke="url(#narrativeGradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, delay: 1 }}
      />
      <motion.path
        d="M100 600 Q600 700 1100 500"
        stroke="url(#narrativeGradient)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, delay: 1.5 }}
      />

      {/* Points d'intersection */}
      <motion.circle
        cx="300"
        cy="250"
        r="5"
        fill="#f5c034"
        fillOpacity="0.6"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.5, 1] }}
        transition={{ duration: 0.8, delay: 2.5 }}
      />
      <motion.circle
        cx="900"
        cy="550"
        r="4"
        fill="#38bdf8"
        fillOpacity="0.5"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.5, 1] }}
        transition={{ duration: 0.8, delay: 3 }}
      />
    </motion.svg>
  )
}

const AboutSectionThree = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8],
  )

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24"
    >
      {/* Particules narratives */}
      <NarrativeParticles />

      {/* Éléments géométriques */}
      <GeometricElements />

      {/* Lignes narratives SVG */}
      <NarrativeLines />

      {/* Gradient overlay animé */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#f5c034]/10 via-transparent to-blue-600/10"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 50%, rgba(245, 192, 52, 0.15) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 50%, rgba(245, 192, 52, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Éléments décoratifs en arrière-plan avec plus de dynamisme */}
      <motion.div
        className="absolute left-10 top-20 h-32 w-32 rounded-full bg-gradient-to-br from-[#f5c034]/20 to-blue-400/20 blur-xl"
        style={{ y }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 h-48 w-48 rounded-full bg-gradient-to-br from-purple-400/20 to-[#f5c034]/20 blur-xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md md:flex-row"
        style={{ opacity, scale }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(245, 192, 52, 0.25)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Colonne image avec effet de fondu/dégradé amélioré */}
        <motion.div
          className="relative flex min-h-[340px] w-full items-stretch overflow-hidden md:min-h-[420px] md:w-1/2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-full w-full">
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full w-full"
            >
              <Image
                src="/images/about/8033207.jpg"
                alt="Datalys équipe"
                width={800}
                height={600}
                className="h-full w-full object-cover [mask-image:linear-gradient(to_right,black_70%,transparent_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%] md:[mask-image:linear-gradient(to_right,black_70%,transparent_100%)]"
                loading="lazy"
                priority={false}
              />
            </motion.div>

            {/* Overlay digital animé amélioré */}
            <motion.svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 800 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <defs>
                <linearGradient
                  id="digitalBlue"
                  x1="0"
                  y1="0"
                  x2="800"
                  y2="600"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#f5c034" stopOpacity="0.15" />
                  <stop offset="0.5" stopColor="#38bdf8" stopOpacity="0.10" />
                  <stop offset="1" stopColor="#6366f1" stopOpacity="0.08" />
                </linearGradient>
              </defs>
              <motion.line
                x1="100"
                y1="0"
                x2="700"
                y2="600"
                stroke="url(#digitalBlue)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
              <motion.line
                x1="0"
                y1="200"
                x2="800"
                y2="400"
                stroke="url(#digitalBlue)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
              />
              <motion.circle
                cx="180"
                cy="120"
                r="6"
                fill="#f5c034"
                fillOpacity="0.6"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                transition={{ duration: 0.8, delay: 2 }}
              />
              <motion.circle
                cx="650"
                cy="480"
                r="5"
                fill="#38bdf8"
                fillOpacity="0.5"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                transition={{ duration: 0.8, delay: 2.2 }}
              />
            </motion.svg>

            {/* Effet de lueur au hover amélioré */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#f5c034]/0 via-[#f5c034]/20 to-[#f5c034]/0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Colonne texte améliorée avec fond sombre harmonisé */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="relative flex w-full flex-col justify-center bg-gray-800/90 p-8 backdrop-blur-lg md:w-1/2 md:p-12"
        >
          {/* Effet de particules dans le texte */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-[#f5c034]/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <motion.h2
            variants={childVariants}
            className="relative mb-6 text-left font-sans text-2xl font-bold tracking-tight text-white md:text-3xl"
          >
            À propos de{" "}
            <span className="relative text-[#f5c034]">
              <TypewriterText text="Datalys Consulting" delay={0} />
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-[#f5c034]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                style={{
                  boxShadow: "0 0 10px rgba(245, 192, 52, 0.8)",
                }}
              />
            </span>
          </motion.h2>

          <AnimatedReveal direction="up" delay={0.2}>
            <motion.p
              variants={childVariants}
              className="mb-4 text-justify text-base font-normal text-slate-300 md:text-lg"
              whileHover={{ x: 5, color: "#e2e8f0" }}
              transition={{ duration: 0.2 }}
            >
              Fondée en 2023 par des consultants passionnés,{" "}
              <motion.strong
                whileHover={{ color: "#f5c034" }}
                transition={{ duration: 0.2 }}
                className="text-white"
              >
                DATALYS
              </motion.strong>{" "}
              Consulting est une Entreprise de Service IT qui apporte une
              expertise réinventée. Nous sommes spécialisés dans le{" "}
              <motion.strong
                whileHover={{ color: "#f5c034" }}
                transition={{ duration: 0.2 }}
                className="text-white"
              >
                Cloud
              </motion.strong>
              , l&apos;Infrastructure IT et les{" "}
              <motion.strong
                whileHover={{ color: "#f5c034" }}
                transition={{ duration: 0.2 }}
                className="text-white"
              >
                réseaux &amp; sécurités
              </motion.strong>
              , sujets clés du monde de la Digitalisation.
            </motion.p>
          </AnimatedReveal>

          <AnimatedReveal direction="up" delay={0.4}>
            <motion.p
              variants={childVariants}
              className="mb-4 text-justify text-base font-normal text-slate-300 md:text-lg"
              whileHover={{ x: 5, color: "#e2e8f0" }}
              transition={{ duration: 0.2 }}
            >
              Transformation digitale, gestion d&apos;infrastructures IT &amp;
              cloud, optimisation énergétique des Data Centers, déploiement
              efficace des systèmes de réseau et sécurité informatique :{" "}
              <motion.strong
                whileHover={{ color: "#f5c034" }}
                transition={{ duration: 0.2 }}
                className="text-white"
              >
                DATALYS
              </motion.strong>{" "}
              s&apos;engage à propulser votre entreprise vers l&apos;avenir
              numérique.
            </motion.p>
          </AnimatedReveal>

          <AnimatedReveal direction="up" delay={0.6}>
            <motion.p
              variants={childVariants}
              className="mb-8 text-justify text-base font-normal text-slate-300 md:text-lg"
              whileHover={{ x: 5, color: "#e2e8f0" }}
              transition={{ duration: 0.2 }}
            >
              L&apos;innovation est au cœur de notre ADN. Nous proposons à nos
              clients des solutions de nouvelle génération et des bonnes
              pratiques pour leur offrir un avantage concurrentiel durable.
            </motion.p>
          </AnimatedReveal>

          <AnimatedReveal direction="up" delay={0.8}>
            <motion.div
              variants={childVariants}
              className="flex w-full justify-start"
            >
              <motion.a
                href="/apropos"
                className="group relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-[#f5c034] to-[#eab308] px-8 py-4 text-base font-semibold text-white shadow-lg duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#f5c034]/60 focus:ring-offset-2"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(245, 192, 52, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="En savoir plus sur Datalys Consulting"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#eab308] to-[#f59e0b]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Voir plus</span>

                {/* Particules sur le bouton */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-1 w-1 rounded-full bg-white/60"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </motion.a>
            </motion.div>
          </AnimatedReveal>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutSectionThree
