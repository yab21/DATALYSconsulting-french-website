"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const PageNotFound = () => {
  const [currentImage, setCurrentImage] = useState(0)

  const imageData = [
    {
      url: "/images/slider/new/infrastructure.jpg",
      title: "Infrastructure & systèmes",
      description: "Solutions d'infrastructure modernes",
    },
    {
      url: "/images/slider/new/datacenter1.jpg",
      title: "Data Center",
      description: "Centres de données haute performance",
    },
    {
      url: "/images/slider/new/energie.jpg",
      title: "Énergie",
      description: "Solutions énergétiques durables",
    },
    {
      url: "/images/slider/Cloud_Accueil.PNG",
      title: "Cloud",
      description: "Services cloud innovants",
    },
    {
      url: "/images/slider/new/reseau&securite2.jpg",
      title: "Réseau & Sécurité",
      description: "Sécurité réseau avancée",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageData.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="relative -mt-10 min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Particules de fond */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#f5c034]/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, -80],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Ondes holographiques */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute inset-0 opacity-5"
            style={{
              background: `radial-gradient(circle at ${30 + i * 25}% ${40 + i * 20}%, #f5c034 0%, transparent 60%)`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 10 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3,
            }}
          />
        ))}
      </div>

      {/* Grille holographique */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(rgba(245,192,52,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(245,192,52,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-6xl text-center">
          {/* Section titre principale */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-20"
          >
            <motion.h1
              className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-[#f5c034] via-[#eab308] to-[#f5c034] bg-clip-text text-transparent">
                Bientôt
              </span>
              <br />
              <span className="text-white">Disponible</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mx-auto max-w-2xl text-xl text-slate-300 md:text-2xl"
            >
              Nous travaillons actuellement sur une expérience exceptionnelle
              pour vous. Découvrez nos services en attendant.
            </motion.p>
          </motion.div>

          {/* Section services avec carousel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="mb-16"
          >
            {/* Carousel d'images */}
            <div className="relative">
              <div className="flex flex-wrap justify-center gap-8">
                {imageData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{
                      opacity: currentImage === index ? 1 : 0.3,
                      scale: currentImage === index ? 1 : 0.7,
                      y: currentImage === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group relative"
                  >
                    {/* Image principale */}
                    <motion.div
                      className="relative h-48 w-48 overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl backdrop-blur-sm md:h-56 md:w-56"
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={item.url}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Anneau holographique pour l'image active */}
                      {currentImage === index && (
                        <motion.div
                          className="absolute -inset-2 rounded-2xl border-2 border-[#f5c034]"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      )}
                    </motion.div>

                    {/* Titre et description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: currentImage === index ? 1 : 0.7,
                        y: currentImage === index ? 0 : 10,
                      }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute -bottom-16 left-1/2 -translate-x-1/2 transform text-center"
                    >
                      <div className="rounded-xl bg-gradient-to-r from-[#f5c034]/90 to-[#eab308]/90 px-6 py-3 shadow-lg backdrop-blur-sm">
                        <h3 className="text-lg font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-white/90">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>

                    {/* Particules décoratives */}
                    {currentImage === index && (
                      <>
                        <motion.div
                          className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-[#f5c034]/60"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.div
                          className="absolute -bottom-2 -left-2 h-3 w-3 rounded-full bg-[#eab308]/60"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                          }}
                        />
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Message de fin */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="mt-16"
          >
            <p className="text-lg text-slate-400">
              Restez connecté pour découvrir notre boutique exceptionnelle !
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default PageNotFound
