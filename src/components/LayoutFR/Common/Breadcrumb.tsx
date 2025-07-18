"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const Breadcrumb = ({
  pageName,
  // description,
}: {
  pageName: string
  // description: string;
}) => {
  return (
    <>
      <section className="relative z-10 -mb-24 mt-8 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-28 md:mb-10 lg:-mb-0 lg:pt-[150px]">
        {/* Particules de fond */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }, (_, i) => (
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

        <div className="container relative z-10">
          <div className="-mx-4 flex flex-col">
            <motion.div
              className="w-full px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-8 max-w-[670px] md:mb-0 lg:mb-8">
                <motion.h1
                  className="mb-5 text-2xl font-bold text-white sm:text-3xl md:text-4xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {pageName}
                </motion.h1>
                <motion.div
                  className="flex items-center space-x-2 text-sm text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Link
                    href="/"
                    className="transition-colors duration-300 hover:text-[#f5c034]"
                  >
                    Accueil
                  </Link>
                  <motion.span
                    className="text-[#f5c034]"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    →
                  </motion.span>
                  <span className="text-white">{pageName}</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Éléments décoratifs animés */}
        <motion.div
          className="absolute left-0 top-0 z-[-1]"
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
          <svg
            width="287"
            height="254"
            viewBox="0 0 287 254"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
              fill="url(#paint0_linear_111:578)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_111:578"
                x1="-40.5"
                y1="117"
                x2="301.926"
                y2="-97.1485"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f5c034" />
                <stop offset="1" stopColor="#f5c034" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        <motion.div
          className="absolute right-0 top-0 z-[-1]"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            width="628"
            height="258"
            viewBox="0 0 628 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
              fill="url(#paint0_linear_0:1)"
            />
            <path
              opacity="0.1"
              d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
              fill="url(#paint1_linear_0:1)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0:1"
                x1="644"
                y1="221"
                x2="429.946"
                y2="37.0429"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f5c034" />
                <stop offset="1" stopColor="#f5c034" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_0:1"
                x1="18.3648"
                y1="166.016"
                x2="105.377"
                y2="32.3398"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f5c034" />
                <stop offset="1" stopColor="#f5c034" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </section>
    </>
  )
}

export default Breadcrumb
