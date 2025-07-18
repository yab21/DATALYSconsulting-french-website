"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const AboutIntegration = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-16 md:pt-20 lg:pt-28">
        {/* Particules de fond */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }, (_, i) => (
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
          {Array.from({ length: 2 }, (_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute inset-0 opacity-5"
              style={{
                background: `radial-gradient(circle at ${30 + i * 40}% ${40 + i * 30}%, #f5c034 0%, transparent 60%)`,
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

        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          <div className="border-b border-gray-700 pb-16 md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <motion.div
                className="font-Title mb-10 w-full px-4 lg:mb-0 lg:w-1/2"
                ref={scrollRef}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h2
                  className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Notre{" "}
                  <span className="bg-gradient-to-r from-[#f5c034] to-[#eab308] bg-clip-text text-transparent">
                    Intégration
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.2px] md:text-xl"
                >
                  Chez DATALYS, nous redéfinissons l&apos;intégration des
                  solutions pour répondre parfaitement à vos besoins. Notre
                  mission principale est de simplifier l&apos;exploitation des
                  services après la mise en place, en garantissant une
                  configuration minutieuse selon vos exigences spécifiques.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-4 text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.7px] md:text-lg"
                >
                  Nos prestations couvrent un large éventail de services,
                  incluant l&apos;intégration de solutions
                  d&apos;infrastructures système, réseaux, sécurité, ainsi que
                  les énergies, datacenters, et le cloud.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="mt-4 text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.7px] md:text-lg"
                >
                  Nous accompagnons nos clients de manière rigoureuse, avec pour
                  objectif de les rendre autonomes et confiants dans la gestion
                  de leurs solutions. Toutes nos intégrations sont suivies via
                  des outils et des canaux dédiés, spécialement conçus pour vous
                  offrir un service optimal.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="mt-4 text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.7px] md:text-lg"
                >
                  Notre expertise se base sur des principes clés qui assurent la
                  réussite de chaque projet. Notre approche personnalisée et
                  notre expertise technique nous permettent de répondre à vos
                  besoins spécifiques et de vous accompagner tout au long du
                  processus d&apos;intégration.
                </motion.p>
              </motion.div>

              <motion.div
                className="w-full px-4 lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div
                  className="relative mx-auto max-w-[550px]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Cercle décoratif animé */}
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
                    className="relative rounded-full bg-[#294666] p-2 shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    <Image
                      src="/images/integration/aaabout_integration.jpeg"
                      alt="Integration Image"
                      width={600}
                      height={600}
                      className="rounded-full object-cover"
                    />
                  </motion.div>

                  {/* Éléments décoratifs */}
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
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutIntegration
