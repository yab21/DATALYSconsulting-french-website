"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

const ArrowBox = () => (
  <motion.div
    className="mr-3 flex h-6 w-6 items-center justify-center rounded-md bg-[#f5c034]/20"
    whileHover={{ scale: 1.1, backgroundColor: "rgba(245, 192, 52, 0.4)" }}
    transition={{ duration: 0.3 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#f5c034]"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  </motion.div>
)

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <section
        id="features"
        className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 md:py-20 lg:py-28"
      >
        {/* Particules de fond cinématiques */}
        <div className="absolute inset-0 overflow-hidden">
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
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                x: [0, Math.random() * 20 - 10],
              }}
              transition={{
                duration: Math.random() * 6 + 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Ondes holographiques morphiques */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 3 }, (_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute inset-0 opacity-10"
              style={{
                background: `radial-gradient(circle at ${20 + i * 30}% ${30 + i * 25}%, #f5c034 0%, transparent 70%)`,
              }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.1, 0.25, 0.1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 12 + i * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          ))}
        </div>

        {/* Grille holographique 3D */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(245, 192, 52, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245, 192, 52, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-full" data-wow-delay=".15s">
            <motion.div
              className="mx-auto mb-16 max-w-full text-center"
              ref={scrollRef}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.h2
                className="font-Title mb-6 text-4xl font-bold !leading-tight text-white sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Nous{" "}
                <span className="bg-gradient-to-r from-[#f5c034] via-[#eab308] to-[#f5c034] bg-clip-text text-transparent">
                  auditons
                </span>
              </motion.h2>

              <motion.p
                className="mx-auto max-w-3xl text-lg text-slate-300 md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Une approche holistique pour évaluer et optimiser vos
                infrastructures avec une expertise pointue dans tous les
                domaines critiques
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {/* Infrastructure & Système */}
              <motion.div
                className="group relative w-full"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 shadow-2xl backdrop-blur-sm">
                  {/* Effet de brillance au survol */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f5c034]/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />

                  <motion.div
                    className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f5c034]/20 to-[#eab308]/20 text-[#f5c034] shadow-lg backdrop-blur-sm"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(245, 192, 52, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#f5c034"
                        d="M18 26h12v2H18zm0-5h12v2H18zm0-5h12v2H18z"
                      />
                      <path
                        fill="#f5c034"
                        d="M14 25H9.5a7.496 7.496 0 0 1-1.322-14.876A10 10 0 0 1 28 12h-2a7.999 7.999 0 0 0-15.95-.87l-.09.834l-.837.056A5.496 5.496 0 0 0 9.5 23H14Z"
                      />
                    </svg>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-6 text-2xl font-bold text-[#f5c034] sm:text-3xl"
                  >
                    Infrastructure & Système
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-6 text-justify text-base font-light leading-relaxed text-slate-300"
                  >
                    Évaluation complète de l&apos;environnement SI pour
                    identifier les optimisations techniques et
                    organisationnelles.
                  </motion.p>

                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-4 text-lg font-bold text-white"
                  >
                    Nous évaluons :
                  </motion.h4>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="space-y-3"
                  >
                    {[
                      "La maturité du SI",
                      "La maturité des utilisateurs finaux",
                      "Les configurations des services",
                      "Les contrôles relatifs aux processus",
                      "La conformité des SI",
                      "L'Environnement Cloud",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.8 + index * 0.1,
                        }}
                        whileHover={{ x: 5 }}
                      >
                        <ArrowBox />
                        <p className="flex-1 text-sm text-slate-300">
                          <span className="font-semibold text-[#f5c034]">
                            {item}
                          </span>
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Réseau & Sécurité */}
              <motion.div
                className="group relative w-full"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 shadow-2xl backdrop-blur-sm">
                  {/* Effet de brillance au survol */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f5c034]/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />

                  <motion.div
                    className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f5c034]/20 to-[#eab308]/20 text-[#f5c034] shadow-lg backdrop-blur-sm"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(245, 192, 52, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="#f5c034"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M6 9a6 6 0 1 0 12 0A6 6 0 0 0 6 9" />
                        <path d="M12 3q2 .5 2 6c0 5.5-.667 5.667-2 6m0-12q-2 .5-2 6c0 5.5.667 5.667 2 6M6 9h12M3 20h7m4 0h7m-11 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2-5v3" />
                      </g>
                    </svg>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-6 text-2xl font-bold text-[#f5c034] sm:text-3xl"
                  >
                    Réseau & Sécurité
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mb-6 text-justify text-base font-light leading-relaxed text-slate-300"
                  >
                    Protection complète des infrastructures informatiques avec
                    identification des failles et risques potentiels.
                  </motion.p>

                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mb-4 text-lg font-bold text-white"
                  >
                    Audit réseau :
                  </motion.h4>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="space-y-3"
                  >
                    {[
                      "Audit d'architecture",
                      "Audit de configuration",
                      "Audit de performance",
                      "Audit de sécurité",
                      "Audit de conformité",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 1.0 + index * 0.1,
                        }}
                        whileHover={{ x: 5 }}
                      >
                        <ArrowBox />
                        <p className="flex-1 text-sm text-slate-300">{item}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Datacenter & Énergie */}
              <motion.div
                className="group relative w-full"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 shadow-2xl backdrop-blur-sm">
                  {/* Effet de brillance au survol */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f5c034]/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />

                  <motion.div
                    className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f5c034]/20 to-[#eab308]/20 text-[#f5c034] shadow-lg backdrop-blur-sm"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(245, 192, 52, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="#f5c034"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M3 3v18h18" />
                        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                      </g>
                    </svg>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mb-6 text-2xl font-bold text-[#f5c034] sm:text-3xl"
                  >
                    Datacenter & Énergie
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="mb-6 text-justify text-base font-light leading-relaxed text-slate-300"
                  >
                    Optimisation de l&apos;efficacité énergétique et de la
                    performance des centres de données avec expertise complète.
                  </motion.p>

                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="mb-4 text-lg font-bold text-white"
                  >
                    Audit énergétique :
                  </motion.h4>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="space-y-3"
                  >
                    {[
                      "Évaluation de l'efficacité énergétique",
                      "Audit des systèmes de refroidissement",
                      "Optimisation de la consommation électrique",
                      "Analyse de la gestion thermique",
                      "Recommandations d'amélioration",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 1.2 + index * 0.1,
                        }}
                        whileHover={{ x: 5 }}
                      >
                        <ArrowBox />
                        <p className="flex-1 text-sm text-slate-300">{item}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
