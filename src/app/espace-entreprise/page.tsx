"use client"

import { motion } from "framer-motion"
import { useState } from "react"

// Données des fonctionnalités
const features = [
  {
    icon: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Pro activité",
    description:
      "Anticipation, résolution proactive des problèmes techniques et gestion d'incidents",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Efficacité",
    description: "Des solutions optimisées pour une performance maximale",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Planification",
    description: "Organisation et gestion efficace de vos projets IT",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 10h16M4 14h16M4 18h16"
        />
      </svg>
    ),
    title: "Gestion Simplifiée",
    description:
      "Interface intuitive pour une gestion efficace de vos ressources",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    ),
    title: "Personnalisation",
    description:
      "Solutions adaptées aux besoins spécifiques de votre entreprise",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
    title: "Support 24/7",
    description:
      "Assistance technique professionnelle disponible en permanence",
    color: "from-teal-500 to-green-500",
  },
]

const EspaceEntreprisePage = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null)

  return (
    <>
      {/* Background avec particules et vagues holographiques */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Particules animées */}
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 50 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-[#f5c034]/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Vagues holographiques */}
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 3 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute h-32 w-full bg-gradient-to-r from-transparent via-[#f5c034]/10 to-transparent"
              style={{
                top: `${30 + i * 20}%`,
                transform: "rotate(-2deg)",
              }}
              animate={{
                x: [0, 100, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Grille holographique */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(rgba(245,192,52,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(245,192,52,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="relative z-10">
          {/* Section principale */}
          <section className="relative py-20">
            <div className="container mx-auto px-4">
              {/* En-tête avec titre animé */}
              <motion.div
                className="mb-16 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Bouton de retour */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <motion.a
                    href="/"
                    className="inline-flex items-center rounded-xl border border-[#f5c034]/30 bg-[#f5c034]/20 px-6 py-3 text-[#f5c034] transition-all duration-300 hover:bg-[#f5c034]/30 hover:text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    Retour à l&apos;accueil
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Grille des fonctionnalités */}
              <motion.div
                className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="group relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                    whileHover={{ y: -10 }}
                    onHoverStart={() => setHoveredFeature(index)}
                    onHoverEnd={() => setHoveredFeature(null)}
                  >
                    {/* Carte avec glassmorphisme */}
                    <div className="relative h-full overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/30 p-8 shadow-2xl backdrop-blur-lg transition-all duration-500 group-hover:shadow-[#f5c034]/20">
                      {/* Particules de fond */}
                      <div className="pointer-events-none absolute inset-0">
                        {Array.from({ length: 6 }, (_, i) => (
                          <motion.div
                            key={i}
                            className="absolute h-1 w-1 rounded-full bg-[#f5c034]/20"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 0.4, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: Math.random() * 2,
                            }}
                          />
                        ))}
                      </div>

                      {/* Icône avec gradient animé */}
                      <motion.div
                        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color} shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.icon}
                      </motion.div>

                      {/* Contenu */}
                      <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#f5c034]">
                        {feature.title}
                      </h3>
                      <p className="leading-relaxed text-gray-300">
                        {feature.description}
                      </p>

                      {/* Effet de brillance au survol */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Section CTA */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                {/* Carte CTA avec glassmorphisme */}
                <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-gray-700/50 bg-gray-800/30 p-12 shadow-2xl backdrop-blur-lg">
                  {/* Particules de fond */}
                  <div className="pointer-events-none absolute inset-0">
                    {Array.from({ length: 12 }, (_, i) => (
                      <motion.div
                        key={i}
                        className="absolute h-1 w-1 rounded-full bg-[#f5c034]/30"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 0.6, 0],
                          y: [0, -30, 0],
                        }}
                        transition={{
                          duration: Math.random() * 4 + 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>

                  <motion.h2
                    className="mb-6 text-3xl font-bold text-white md:text-4xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                  >
                    Prêt à accéder à votre espace ?
                  </motion.h2>
                  <motion.p
                    className="mx-auto mb-8 max-w-2xl text-xl text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                  >
                    Connectez-vous à votre plateforme sécurisée pour gérer vos
                    projets, surveiller vos infrastructures et collaborer avec
                    nos équipes.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                  >
                    <motion.a
                      href="https://applicationweb.datalysconsulting.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#f5c034] to-[#eab308] px-8 py-4 text-lg font-bold text-black shadow-lg transition-all duration-300 hover:from-[#eab308] hover:to-[#f5c034] hover:shadow-[#f5c034]/25"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        className="mr-3 h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      Accéder à mon espace
                      <svg
                        className="ml-3 h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </motion.a>
                  </motion.div>

                  {/* Informations de sécurité */}
                  <motion.div
                    className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0, duration: 0.8 }}
                  >
                    <div className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Connexion sécurisée SSL
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      Authentification 2FA
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      Support 24/7
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default EspaceEntreprisePage
