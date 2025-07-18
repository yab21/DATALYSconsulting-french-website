"use client"
import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import ScrollUp from "@/components/LayoutFR/Common/ScrollUp"

// Composant pour les vagues animées
const InteractiveWaves = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      return () => container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute bottom-0 left-0 h-32 w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(245, 192, 52, 0.3)" />
            <stop offset="50%" stopColor="rgba(245, 192, 52, 0.5)" />
            <stop offset="100%" stopColor="rgba(234, 179, 8, 0.3)" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.2)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
            <stop offset="100%" stopColor="rgba(37, 99, 235, 0.2)" />
          </linearGradient>
        </defs>

        {/* Première vague */}
        <motion.path
          d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
          fill="url(#waveGradient1)"
          animate={{
            d: [
              "M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z",
              "M0,50 Q300,80 600,50 T1200,50 L1200,120 L0,120 Z",
              "M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.05}px)`,
          }}
        />

        {/* Deuxième vague */}
        <motion.path
          d="M0,80 Q300,40 600,80 T1200,80 L1200,120 L0,120 Z"
          fill="url(#waveGradient2)"
          animate={{
            d: [
              "M0,80 Q300,40 600,80 T1200,80 L1200,120 L0,120 Z",
              "M0,70 Q300,100 600,70 T1200,70 L1200,120 L0,120 Z",
              "M0,80 Q300,40 600,80 T1200,80 L1200,120 L0,120 Z",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            transform: `translate(${-mousePosition.x * 0.08}px, ${-mousePosition.y * 0.03}px)`,
          }}
        />

        {/* Troisième vague */}
        <motion.path
          d="M0,100 Q300,60 600,100 T1200,100 L1200,120 L0,120 Z"
          fill="rgba(255, 255, 255, 0.1)"
          animate={{
            d: [
              "M0,100 Q300,60 600,100 T1200,100 L1200,120 L0,120 Z",
              "M0,90 Q300,120 600,90 T1200,90 L1200,120 L0,120 Z",
              "M0,100 Q300,60 600,100 T1200,100 L1200,120 L0,120 Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            transform: `translate(${mousePosition.x * 0.06}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
      </svg>
    </div>
  )
}

// Composant pour les particules flottantes interactives
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i)

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              i % 4 === 0
                ? "rgba(245, 192, 52, 0.6)"
                : i % 4 === 1
                  ? "rgba(255, 255, 255, 0.4)"
                  : i % 4 === 2
                    ? "rgba(56, 189, 248, 0.5)"
                    : "rgba(168, 85, 247, 0.4)"
            } 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -50, -100, -150, -200],
            x: [
              0,
              Math.random() * 40 - 20,
              Math.random() * 60 - 30,
              Math.random() * 40 - 20,
              0,
            ],
            opacity: [0, 0.6, 0.8, 0.4, 0],
            scale: [0.5, 1, 1.2, 0.8, 0.3],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  )
}

// Composant pour les liens sociaux animés
const AnimatedSocialLink = ({ href, children, color = "#f5c034" }) => {
  return (
    <motion.a
      href={href}
      onClick={(e) => e.preventDefault()}
      className="relative mr-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300"
      whileHover={{
        scale: 1.2,
        backgroundColor: color,
        boxShadow: `0 0 30px ${color}40`,
      }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        whileHover={{
          background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
        {children}
      </motion.div>

      {/* Effet de ripple */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/20"
        whileHover={{
          scale: [1, 1.5, 2],
          opacity: [0.5, 0.2, 0],
        }}
        transition={{ duration: 0.6 }}
      />
    </motion.a>
  )
}

// Composant pour les sections avec effet de profondeur
const DepthSection = ({ children, depth = 0 }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / rect.width)
    mouseY.set((e.clientY - centerY) / rect.height)
  }

  return (
    <motion.div
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0)
        mouseY.set(0)
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transform: `translateZ(${depth}px)`,
      }}
      whileHover={{ z: depth + 20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <motion.footer
      ref={footerRef}
      className="relative z-10 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 text-white md:pt-20 lg:pt-24"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      }}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Vagues interactives */}
      <InteractiveWaves />

      {/* Particules flottantes */}
      <FloatingParticles />

      {/* Effet de profondeur avec des couches */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      <div className="container relative z-10">
        <motion.div
          className="-mx-4 flex flex-wrap"
          variants={containerVariants}
        >
          {/* Section Logo et Description */}
          <motion.div
            className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-4/12"
            variants={itemVariants}
          >
            <DepthSection depth={20}>
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-5 inline-block">
                  <motion.img
                    src="/images/logo/logo.png"
                    alt="logo"
                    width={210}
                    height={90}
                    whileHover={{
                      scale: 1.05,
                      filter: "drop-shadow(0 0 20px rgba(245, 192, 52, 0.5))",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>

                <motion.p
                  className="mb-9 text-base leading-relaxed text-gray-300"
                  whileHover={{ x: 5, color: "#f5c034" }}
                  transition={{ duration: 0.3 }}
                >
                  Infrastructure et analyse des données.
                </motion.p>

                <div className="flex items-center">
                  <AnimatedSocialLink href="#" color="#3b82f6">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </AnimatedSocialLink>

                  <AnimatedSocialLink href="#" color="#ff0000">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className="fill-current"
                    >
                      <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                    </svg>
                  </AnimatedSocialLink>

                  <AnimatedSocialLink href="#" color="#0077b5">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </AnimatedSocialLink>
                </div>
              </div>
            </DepthSection>
          </motion.div>

          {/* Section Contact Info */}
          <motion.div
            className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12"
            variants={itemVariants}
          >
            <DepthSection depth={30}>
              <div className="mb-12 lg:mb-16">
                <motion.h2
                  className="mb-10 text-xl font-bold text-white"
                  whileHover={{ color: "#f5c034", scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Contact info
                </motion.h2>
                <ul className="space-y-4">
                  <li>
                    <motion.div
                      whileHover={{ x: 10, color: "#f5c034" }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href="/contact"
                        className="inline-block text-base text-gray-300 duration-300 hover:text-[#f5c034]"
                      >
                        Siège social <span className="uppercase">rci </span>:
                        Rivera Faya, Face du Collège Jules Vernes
                      </Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div
                      whileHover={{ x: 10, color: "#f5c034" }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href="/contact"
                        className="inline-block text-base text-gray-300 duration-300 hover:text-[#f5c034]"
                      >
                        Filiale{" "}
                        <span className="uppercase">Guinée Conakry</span>:
                        Almamyah Rue 028 N°466 COMMUNE DE KALOUM
                      </Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div
                      whileHover={{ x: 10, color: "#f5c034" }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href="mailto:infos@datalysconsulting.com"
                        className="inline-block text-base text-gray-300 duration-300 hover:text-[#f5c034]"
                      >
                        infos@datalysconsulting.com
                      </Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div
                      whileHover={{ x: 10, color: "#f5c034" }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href="tel:+225 07 08  92 39 61"
                        className="inline-block text-base text-gray-300 duration-300 hover:text-[#f5c034]"
                      >
                        +225 07 08 92 39 61 /
                      </Link>
                      <Link
                        href="tel:+224 610 45 68 68"
                        className="ml-1 inline-block text-base text-gray-300 duration-300 hover:text-[#f5c034]"
                      >
                        +224 610 45 68 68
                      </Link>
                    </motion.div>
                  </li>
                </ul>
              </div>
            </DepthSection>
          </motion.div>

          {/* Section Liens Utiles */}
          <motion.div
            className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12"
            variants={itemVariants}
          >
            <DepthSection depth={40}>
              <div className="mb-12 lg:mb-16">
                <motion.h2
                  className="mb-10 text-xl font-bold text-white"
                  whileHover={{ color: "#f5c034", scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Liens utiles
                </motion.h2>
                <ul className="space-y-4">
                  <li>
                    <motion.div
                      whileHover={{ x: 10, color: "#f5c034" }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href="/espace-entreprise"
                        className="inline-block text-base text-gray-300 duration-300 hover:text-[#f5c034]"
                      >
                        Espace entreprise
                      </Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div
                      whileHover={{ x: 10, color: "#f5c034" }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href="/notreexpertise/formations"
                        className="inline-block text-base text-gray-300 duration-300 hover:text-[#f5c034]"
                      >
                        Formations
                      </Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div
                      whileHover={{ x: 10, color: "#f5c034" }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href="/evenements"
                        className="inline-block text-base text-gray-300 duration-300 hover:text-[#f5c034]"
                      >
                        Evénements
                      </Link>
                    </motion.div>
                  </li>
                </ul>
              </div>
            </DepthSection>
          </motion.div>

          {/* Section Boutique */}
          <motion.div
            className="w-full px-4 md:w-1/2 lg:w-3/12 xl:w-3/12"
            variants={itemVariants}
          >
            <DepthSection depth={50}>
              <div className="mb-12 lg:mb-16">
                <motion.h2
                  className="mb-10 text-xl font-bold text-white"
                  whileHover={{ color: "#f5c034", scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Boutique
                </motion.h2>
                <div className="flex items-center justify-start">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/boutique"
                      className="group relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-[#f5c034] to-[#eab308] px-8 py-4 text-base font-semibold text-white shadow-2xl backdrop-blur-sm duration-300 ease-in-out"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#eab308] to-[#f59e0b]"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.4 }}
                      />
                      <span className="relative z-10">
                        Commander maintenant
                      </span>

                      {/* Effet de particules */}
                      <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        {[...Array(4)].map((_, i) => (
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
                              duration: Math.random() * 2 + 1,
                              repeat: Infinity,
                              delay: Math.random() * 2,
                            }}
                          />
                        ))}
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </DepthSection>
          </motion.div>
        </motion.div>

        {/* Séparateur animé */}
        <motion.div
          className="relative h-px w-full overflow-hidden bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f5c034]/50 to-transparent"
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

        {/* Copyright */}
        <motion.div className="py-8" variants={itemVariants}>
          <motion.p
            className="text-center text-base text-gray-400"
            whileHover={{ color: "#f5c034", scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            All Rights Reserved by
            <motion.span
              className="font-medium text-[#f5c034]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {" "}
              DATALYS Consulting
            </motion.span>
          </motion.p>
        </motion.div>
      </div>

      {/* Éléments décoratifs 3D */}
      <div className="absolute right-0 top-14 z-[-1]">
        <motion.svg
          width="55"
          height="99"
          viewBox="0 0 55 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#f5c034" />
          <mask
            id="mask0_94:899"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="99"
            height="99"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#f5c034" />
          </mask>
          <g mask="url(#mask0_94:899)">
            <circle
              opacity="0.8"
              cx="49.5"
              cy="49.5"
              r="49.5"
              fill="url(#paint0_radial_94:899)"
            />
            <g opacity="0.8" filter="url(#filter0_f_94:899)">
              <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_94:899"
              x="12.4852"
              y="-15.1763"
              width="82.7646"
              height="82.7646"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="10.5"
                result="effect1_foregroundBlur_94:899"
              />
            </filter>
            <radialGradient
              id="paint0_radial_94:899"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(49.5 49.5) rotate(90) scale(49.5)"
            >
              <stop stopColor="#f5c034" />
              <stop offset="1" stopColor="#f5c034" stopOpacity="0" />
            </radialGradient>
          </defs>
        </motion.svg>
      </div>

      {/* ScrollUp intégré dans le footer */}
      <ScrollUp />
    </motion.footer>
  )
}

export default Footer
