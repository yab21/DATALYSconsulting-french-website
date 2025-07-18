"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
)

const AboutSectionFour = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const List = ({ text }: { text: string }) => (
    <motion.p
      className="mb-5 flex items-center text-lg font-light text-slate-300"
      whileHover={{ x: 10, color: "#f5c034" }}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.3 }}
      >
        {checkIcon}
      </motion.span>
      {text}
    </motion.p>
  )

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      {/* Particules de fond améliorées */}
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
              scale: [0, 1, 0],
              x: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Ondes holographiques */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(circle at ${20 + i * 30}% ${30 + i * 20}%, #f5c034 0%, transparent 50%)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <motion.div
              className="font-Title mb-10 w-full px-4 text-start lg:mb-0 lg:w-1/2"
              ref={scrollRef}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2
                className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Notre{" "}
                <span className="bg-gradient-to-r from-[#f5c034] to-[#eab308] bg-clip-text text-transparent">
                  Histoire
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-6 text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.2px] md:text-xl"
              >
                Fondé en 2023, par des Consultants engagés et passionnés de la
                Digitalisation, Datalys Consulting est une Entreprise de Service
                IT qui apporte une expertise réinventée. Nous sommes
                spécialisées dans le Cloud, l&apos;Infrastructure IT et les
                réseaux & sécurités : les sujets clés impactant le monde de
                l&apos;IT et de la Digitalisation.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-6 text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.6px] md:text-lg"
              >
                La transformation, la gestion d&apos;infrastructures IT & cloud,
                l&apos;optimisation énergétique des Data Centers ainsi que le
                déploiement efficace des systèmes de Réseau et Sécurité
                informatique font partie de nos compétences de pointe.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.6px] md:text-lg"
              >
                Chez DATALYS, notre engagement est d&apos;offrir des solutions
                innovantes qui propulsent votre entreprise vers l&apos;avenir
                numérique et dans l&apos;atteinte de vos objectifs stratégiques.
              </motion.p>

              {/* Statistiques animées améliorées */}
              <motion.div
                className="mt-10 grid grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.div
                  className="rounded-lg border border-[#f5c034]/20 bg-gradient-to-br from-[#f5c034]/10 to-[#eab308]/10 p-6 text-center"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(245, 192, 52, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="mb-2 text-4xl font-bold text-[#f5c034]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    100+
                  </motion.div>
                  <div className="text-sm text-gray-400">Projets Réalisés</div>
                </motion.div>
                <motion.div
                  className="rounded-lg border border-[#f5c034]/20 bg-gradient-to-br from-[#f5c034]/10 to-[#eab308]/10 p-6 text-center"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(245, 192, 52, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="mb-2 text-4xl font-bold text-[#f5c034]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                  >
                    50+
                  </motion.div>
                  <div className="text-sm text-gray-400">
                    Clients Satisfaits
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full px-4 lg:w-1/2"
              ref={scrollRef}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="relative mx-auto max-w-[500px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Cercle décoratif animé amélioré */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f5c034]/20 to-[#eab308]/20"
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

                {/* Anneau holographique */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#f5c034]/30"
                  animate={{
                    rotate: [0, -360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="relative rounded-full bg-gradient-to-r from-[#f5c034]/10 to-[#eab308]/10 p-4 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <Image
                    src="/images/about/pppexels.jpg"
                    alt="About Us Image"
                    width={500}
                    height={500}
                    className="rounded-full object-cover shadow-lg"
                  />
                </motion.div>

                {/* Éléments décoratifs améliorés */}
                <motion.div
                  className="absolute -right-4 -top-4 h-8 w-8 rounded-full bg-[#f5c034]/30"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 h-6 w-6 rounded-full bg-[#eab308]/30"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.div
                  className="absolute -top-8 right-8 h-4 w-4 rounded-full bg-[#f5c034]/40"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSectionFour
