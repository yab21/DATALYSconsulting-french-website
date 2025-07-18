"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { RxAccessibility } from "react-icons/rx"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/free-mode"

import { motion } from "framer-motion"

import { FreeMode, Pagination } from "swiper/modules"

import { RxArrowTopRight } from "react-icons/rx"
import { useRef } from "react"

const RayonIntervention = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      image: "/images/audit/security-network-device-config-audit.jpg",
      title: "Audit de la configuration des services",
      link: "/notreexpertise/audit",
    },
    {
      image: "/images/audit/SR1-scaled.jpg",
      title: "Audit des architectures",
      link: "/notreexpertise/audit",
    },
    {
      image: "/images/audit/consultant-informtique-architecte-reseau-card.jpg",
      title: "Audit de sécurité",
      link: "/notreexpertise/audit",
    },
    {
      image: "/images/audit/it_guy-1.jpg",
      title: "Analyse des procédés",
      link: "/notreexpertise/audit",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 md:py-20 lg:py-24">
      {/* Particules de fond */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }, (_, i) => (
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
              duration: Math.random() * 5 + 5,
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
              background: `radial-gradient(circle at ${40 + i * 30}% ${50 + i * 20}%, #f5c034 0%, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: 12 + i * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 4,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <motion.div
          className="mx-auto mb-14 max-w-[560px] text-center"
          ref={scrollRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="font-Title mb-4 text-center text-3xl font-bold !leading-tight text-white sm:text-4xl md:text-[45px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            En{" "}
            <span className="bg-gradient-to-r from-[#f5c034] to-[#eab308] bg-clip-text text-transparent">
              savoir plus
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center justify-center"
        >
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 4,
                spaceBetween: 12,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="group relative mb-20 flex h-[250px] w-[215px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-2xl lg:h-[400px] lg:w-[350px]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px -12px rgba(245, 192, 52, 0.25)",
                  }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url("${slide.image}")`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/40 group-hover:via-black/20" />

                  {/* Bordure animée */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border border-[#f5c034]/20"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(245, 192, 52, 0.4)",
                        "0 0 0 10px rgba(245, 192, 52, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative flex flex-col gap-3">
                    <motion.div
                      className="flex h-[32px] w-[32px] items-center justify-center rounded-lg bg-[#f5c034]/20 backdrop-blur-sm"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(245, 192, 52, 0.4)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <RxAccessibility className="h-[20px] w-[20px] text-[#f5c034]" />
                    </motion.div>
                    <motion.p
                      className="font-medium lg:text-[18px]"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    >
                      {slide.title}
                    </motion.p>
                  </div>

                  <motion.div
                    className="absolute bottom-5 left-5"
                    whileHover={{ rotate: 45, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <RxArrowTopRight className="h-[35px] w-[35px] text-[#f5c034]" />
                  </motion.div>

                  {/* Particules décoratives */}
                  <div className="pointer-events-none absolute inset-0">
                    {Array.from({ length: 3 }, (_, i) => (
                      <motion.div
                        key={i}
                        className="absolute h-1 w-1 rounded-full bg-[#f5c034]/40"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${20 + i * 30}%`,
                        }}
                        animate={{
                          scale: [0, 1.5, 0],
                          opacity: [0, 0.8, 0],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: Math.random() * 3 + 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default RayonIntervention
