"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// Composant pour l'arrière-plan moderne avec les couleurs du site
const ModernBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient de base avec les couleurs du site */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Formes géométriques subtiles avec les couleurs du site */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#f5c034]/20 to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-[#eab308]/20 to-transparent"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#f5c034]/10 to-transparent"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Particules flottantes animées */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#f5c034]/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200, -300],
              x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0.8, 0],
              scale: [0, 1, 1.5, 0],
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

      {/* Grille subtile animée */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          x: [0, -50],
          y: [0, -50],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
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
      </motion.div>
    </div>
  )
}

// Composant pour les cartes avec images très visibles et animations sophistiquées
const GlassmorphismCard = ({ slide, isActive, index }) => {
  return (
    <motion.div
      className={`absolute inset-0 overflow-hidden rounded-3xl ${
        isActive ? "z-10" : "z-0"
      }`}
      initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
      animate={{
        opacity: isActive ? 1 : 0.1,
        scale: isActive ? 1 : 0.95,
        rotateY: isActive ? 0 : 5,
      }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1,
      }}
    >
      {/* Image de fond avec overlay minimal pour visibilité maximale */}
      <motion.div
        className="relative h-full w-full"
        animate={{
          scale: isActive ? 1.05 : 1,
        }}
        transition={{
          duration: 15,
          ease: "linear",
        }}
      >
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
        {/* Overlay très léger pour maintenir la lisibilité du texte */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/15 via-black/10 to-black/5"
          animate={{
            opacity: isActive ? 1 : 0.5,
          }}
          transition={{ duration: 0.8 }}
        />

        {/* Effet de lueur subtil */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#f5c034]/5 via-transparent to-[#eab308]/5"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Contenu avec animations sophistiquées */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="max-w-4xl text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 50,
              scale: isActive ? 1 : 0.8,
            }}
            transition={{
              duration: 0.8,
              delay: isActive ? 0.3 : 0,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mb-6"
          >
            {slide.title && (
              <motion.h3
                className="mb-2 text-xl font-light text-gray-200 sm:text-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  x: isActive ? 0 : -50,
                }}
                transition={{
                  duration: 0.6,
                  delay: isActive ? 0.5 : 0,
                }}
              >
                {slide.title}
              </motion.h3>
            )}
            <motion.h1
              className="mb-2 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 30,
                scale: isActive ? 1 : 0.9,
              }}
              transition={{
                duration: 0.8,
                delay: isActive ? 0.7 : 0,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {slide.title2}{" "}
              <motion.span
                className="bg-gradient-to-r from-[#f5c034] to-[#eab308] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Consulting
              </motion.span>
            </motion.h1>
            <motion.h2
              className="text-2xl font-medium text-gray-300 sm:text-3xl md:text-4xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : 50,
              }}
              transition={{
                duration: 0.6,
                delay: isActive ? 0.9 : 0,
              }}
            >
              {slide.title3}
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 30,
              scale: isActive ? 1 : 0.9,
            }}
            transition={{
              duration: 0.8,
              delay: isActive ? 1.1 : 0,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 sm:text-xl"
          >
            {slide.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 30,
              scale: isActive ? 1 : 0.8,
            }}
            transition={{
              duration: 0.8,
              delay: isActive ? 1.3 : 0,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href={slide.buttons[0].link}
              className="group relative overflow-hidden rounded-full border border-[#f5c034]/30 bg-[#f5c034]/10 px-8 py-4 font-medium text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#f5c034]/20"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(245, 192, 52, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : -50,
              }}
              transition={{
                duration: 0.6,
                delay: isActive ? 1.5 : 0,
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <motion.svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </motion.svg>
                {slide.buttons[0].text}
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#f5c034]/20 to-[#eab308]/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>

            <motion.a
              href={slide.buttons[1].link}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#f5c034] to-[#eab308] px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105"
              whileHover={{
                scale: 1.05,
                rotateY: -5,
                boxShadow: "0 20px 40px rgba(245, 192, 52, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : 50,
              }}
              transition={{
                duration: 0.6,
                delay: isActive ? 1.7 : 0,
              }}
            >
              <span className="relative z-10">{slide.buttons[1].text}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#eab308] to-[#f5c034]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// Navigation circulaire moderne avec les couleurs du site et animations
const ModernNavigation = ({ slides, currentIndex, goToSlide }) => {
  return (
    <motion.div
      className="absolute right-8 top-1/2 z-20 -translate-y-1/2"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="flex flex-col gap-4">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`group relative ${index === currentIndex ? "z-10" : ""}`}
            whileHover={{
              scale: 1.3,
              rotateY: 180,
            }}
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 1.2 + index * 0.1 },
            }}
          >
            <motion.div
              className={`h-4 w-4 rounded-full border-2 transition-all duration-300 ${
                index === currentIndex
                  ? "border-[#f5c034] bg-[#f5c034]"
                  : "border-white/30 bg-white/10 backdrop-blur-sm hover:border-white/60"
              }`}
              whileHover={{
                boxShadow:
                  index === currentIndex
                    ? "0 0 20px rgba(245, 192, 52, 0.6)"
                    : "0 0 15px rgba(255, 255, 255, 0.3)",
              }}
            />

            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 -m-2 rounded-full border border-[#f5c034]/50"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

// Indicateur de progression moderne avec les couleurs du site et animations
const ModernProgress = ({ currentIndex, totalSlides }) => {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      <div className="flex items-center gap-4">
        <motion.div
          className="h-1 w-32 overflow-hidden rounded-full bg-white/20 backdrop-blur-sm"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#f5c034] to-[#eab308]"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              boxShadow: "0 0 10px rgba(245, 192, 52, 0.5)",
            }}
          />

          {/* Effet shimmer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
        <motion.div
          className="text-sm font-medium text-white/80"
          whileHover={{ scale: 1.1, color: "#f5c034" }}
          transition={{ duration: 0.3 }}
        >
          {currentIndex + 1} / {totalSlides}
        </motion.div>
      </div>
    </motion.div>
  )
}

const LastHero = () => {
  const slides = [
    {
      id: 1,
      image: "/images/slider/new/infrastructure.jpg",
      title: "Bienvenue chez",
      title2: "DATALYS",
      title3: "Infrastructure & systèmes",
      description:
        "Redynamisez votre Infrastructure système, dégagez les points d'optimisation cruciaux.",
      buttons: [
        { text: "Parler à un Expert", link: "/contact" },
        { text: "Demander un Devis", link: "/contact" },
      ],
    },
    {
      id: 2,
      image: "/images/slider/Cloud_Accueil.PNG",
      title: "Solutions",
      title2: "DATALYS",
      title3: "Cloud",
      description:
        "Bénéficiez de votre investissement dans le Cloud. Maîtrisez vos factures, simplifiez vos migrations dans le Cloud.",
      buttons: [
        { text: "Parler à un Expert", link: "/contact" },
        { text: "Demander un Devis", link: "/contact" },
      ],
    },
    {
      id: 3,
      image: "/images/slider/new/datacenter1.jpg",
      title: "Expertise",
      title2: "DATALYS",
      title3: "Data Center",
      description:
        "Optez pour un Data center urbanisé et parfaitement structuré garantissant performance et sécurité du SI.",
      buttons: [
        { text: "Parler à un Expert", link: "/contact" },
        { text: "Demander un Devis", link: "/contact" },
      ],
    },
    {
      id: 4,
      image: "/images/slider/new/energie.jpg",
      title: "Innovation",
      title2: "DATALYS",
      title3: "Énergie",
      description:
        "Réduisez votre dépense Énergétique par le choix de solutions Énergétiques normalisées.",
      buttons: [
        { text: "Parler à un Expert", link: "/contact" },
        { text: "Demander un Devis", link: "/contact" },
      ],
    },
    {
      id: 5,
      image: "/images/slider/new/reseau&securite2.jpg",
      title: "Sécurité",
      title2: "DATALYS",
      title3: "Réseau & Sécurité",
      description:
        "La sécurité de votre SI est son maillon principal. Clarifiez vos architectures, optimisez vos règles de sécurité, facilitez l'administration de votre réseau.",
      buttons: [
        { text: "Parler à un Expert", link: "/contact" },
        { text: "Demander un Devis", link: "/contact" },
      ],
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
        )
      }, 6000)
    }
    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying, slides.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <motion.div
      className="relative h-[700px] w-full overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Arrière-plan moderne */}
      <ModernBackground />

      {/* Conteneur des cartes */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <GlassmorphismCard
            key={slide.id}
            slide={slide}
            isActive={index === currentIndex}
            index={index}
          />
        ))}
      </div>

      {/* Navigation */}
      <ModernNavigation
        slides={slides}
        currentIndex={currentIndex}
        goToSlide={goToSlide}
      />

      {/* Indicateur de progression */}
      <ModernProgress currentIndex={currentIndex} totalSlides={slides.length} />
    </motion.div>
  )
}

export default LastHero
