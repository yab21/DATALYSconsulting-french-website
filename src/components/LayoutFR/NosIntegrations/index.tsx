"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { RxAccessibility } from "react-icons/rx"
import Link from "next/link"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"

import { motion } from "framer-motion"
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules"
import { RxArrowTopRight } from "react-icons/rx"
import { useRef } from "react"

const NosIntegrations = () => {
  const swiperRef = useRef(null)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 md:py-20 lg:py-28">
      {/* Particules de fond */}
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

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <motion.div
          className="mx-auto mb-16 max-w-[600px] text-center"
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
            Ce que nous{" "}
            <span className="bg-gradient-to-r from-[#f5c034] via-[#eab308] to-[#f5c034] bg-clip-text text-transparent">
              intégrons
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto max-w-3xl text-lg text-slate-300 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Découvrez notre expertise dans l&apos;intégration de solutions
            technologiques de pointe pour optimiser vos infrastructures
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mx-auto"
        >
          <div className="relative px-6 md:px-12 lg:px-16">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 250,
                modifier: 3,
                slideShadows: false,
              }}
              initialSlide={2}
              loop={true}
              speed={800}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                prevEl: ".custom-prev-btn",
                nextEl: ".custom-next-btn",
              }}
              modules={[EffectCoverflow, Navigation, Autoplay]}
              className="integration-swiper"
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
            >
              <SwiperSlide className="swiper-slide-custom">
                <Link
                  href="/notreexpertise/integration"
                  className="block h-full w-full"
                >
                  <div className="group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-700/50 text-white shadow-2xl backdrop-blur-sm">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/integration/reseau.jpg")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/50 group-hover:via-black/20" />
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <motion.div
                          className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5c034]/20 backdrop-blur-sm"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(245, 192, 52, 0.3)",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <RxAccessibility className="h-6 w-6 text-[#f5c034]" />
                        </motion.div>
                        <p className="text-xl font-semibold">Réseau</p>
                      </div>
                      <motion.div
                        whileHover={{ rotate: 45, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <RxArrowTopRight className="h-8 w-8 text-[#f5c034] duration-100 group-hover:text-white" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-custom">
                <Link
                  href="/notreexpertise/integration"
                  className="block h-full w-full"
                >
                  <div className="group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-700/50 text-white shadow-2xl backdrop-blur-sm">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/integration/serveur-stockage.jpg")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/50 group-hover:via-black/20" />
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <motion.div
                          className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5c034]/20 backdrop-blur-sm"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(245, 192, 52, 0.3)",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <RxAccessibility className="h-6 w-6 text-[#f5c034]" />
                        </motion.div>
                        <p className="text-xl font-semibold">
                          Serveurs et stockage
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ rotate: 45, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <RxArrowTopRight className="h-8 w-8 text-[#f5c034] duration-100 group-hover:text-white" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-custom">
                <Link
                  href="/notreexpertise/integration"
                  className="block h-full w-full"
                >
                  <div className="group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-700/50 text-white shadow-2xl backdrop-blur-sm">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/integration/1-Cloud_Integration.PNG")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/50 group-hover:via-black/20" />
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <motion.div
                          className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5c034]/20 backdrop-blur-sm"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(245, 192, 52, 0.3)",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <RxAccessibility className="h-6 w-6 text-[#f5c034]" />
                        </motion.div>
                        <p className="text-xl font-semibold">Cloud</p>
                      </div>
                      <motion.div
                        whileHover={{ rotate: 45, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <RxArrowTopRight className="h-8 w-8 text-[#f5c034] duration-100 group-hover:text-white" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-custom">
                <Link
                  href="/notreexpertise/integration"
                  className="block h-full w-full"
                >
                  <div className="group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-700/50 text-white shadow-2xl backdrop-blur-sm">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/integration/2-Datacenter_Integration.jpg")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/50 group-hover:via-black/20" />
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <motion.div
                          className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5c034]/20 backdrop-blur-sm"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(245, 192, 52, 0.3)",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <RxAccessibility className="h-6 w-6 text-[#f5c034]" />
                        </motion.div>
                        <p className="text-xl font-semibold">Data center</p>
                      </div>
                      <motion.div
                        whileHover={{ rotate: 45, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <RxArrowTopRight className="h-8 w-8 text-[#f5c034] duration-100 group-hover:text-white" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-custom">
                <Link
                  href="/notreexpertise/integration"
                  className="block h-full w-full"
                >
                  <div className="group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-700/50 text-white shadow-2xl backdrop-blur-sm">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/integration/3-Securité_Integration.PNG")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/50 group-hover:via-black/20" />
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <motion.div
                          className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5c034]/20 backdrop-blur-sm"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(245, 192, 52, 0.3)",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <RxAccessibility className="h-6 w-6 text-[#f5c034]" />
                        </motion.div>
                        <p className="text-xl font-semibold">Sécurité</p>
                      </div>
                      <motion.div
                        whileHover={{ rotate: 45, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <RxArrowTopRight className="h-8 w-8 text-[#f5c034] duration-100 group-hover:text-white" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-custom">
                <Link
                  href="/notreexpertise/integration"
                  className="block h-full w-full"
                >
                  <div className="group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-700/50 text-white shadow-2xl backdrop-blur-sm">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/integration/Infrastructure-Sys-Intregation.jpg")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/50 group-hover:via-black/20" />
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <motion.div
                          className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5c034]/20 backdrop-blur-sm"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(245, 192, 52, 0.3)",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <RxAccessibility className="h-6 w-6 text-[#f5c034]" />
                        </motion.div>
                        <p className="text-xl font-semibold">
                          Infrastructure système
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ rotate: 45, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <RxArrowTopRight className="h-8 w-8 text-[#f5c034] duration-100 group-hover:text-white" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
            <motion.button
              className="custom-prev-btn absolute left-0 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-full border border-[#f5c034]/30 bg-[#f5c034]/20 text-[#f5c034] backdrop-blur-sm transition-all hover:scale-110 hover:bg-[#f5c034] hover:text-white md:left-2 md:h-14 md:w-14 lg:left-24"
              onClick={() => swiperRef.current?.slidePrev()}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="h-6 w-6 md:h-7 md:w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </motion.button>
            <motion.button
              className="custom-next-btn absolute right-0 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-full border border-[#f5c034]/30 bg-[#f5c034]/20 text-[#f5c034] backdrop-blur-sm transition-all hover:scale-110 hover:bg-[#f5c034] hover:text-white md:right-2 md:h-14 md:w-14 lg:right-24"
              onClick={() => swiperRef.current?.slideNext()}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="h-6 w-6 md:h-7 md:w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .integration-swiper {
          width: 100%;
          padding: 50px 0;
          overflow: hidden;
        }

        .swiper-slide-custom {
          width: 340px;
          height: 340px;
          background-position: center;
          background-size: cover;
          transition: all 0.3s ease;
          opacity: 0.6;
          filter: blur(1px);
        }

        .swiper-slide-active {
          opacity: 1;
          transform: scale(1.35);
          z-index: 10;
          filter: blur(0);
        }

        .swiper-slide-active .group {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
        }

        .swiper-slide-prev,
        .swiper-slide-next {
          opacity: 0.8;
          filter: blur(0);
        }

        @media (min-width: 768px) {
          .swiper-slide-custom {
            width: 380px;
            height: 380px;
          }

          .swiper-slide-active {
            transform: scale(1.4);
          }
        }

        @media (min-width: 1024px) {
          .swiper-slide-custom {
            width: 400px;
            height: 400px;
          }

          .swiper-slide-active {
            transform: scale(1.45);
          }
        }

        /* Masquer les boutons de navigation par défaut de Swiper */
        .swiper-button-prev,
        .swiper-button-next {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default NosIntegrations
