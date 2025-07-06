"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
)

const List = ({ text }: { text: string }) => (
  <p className="mb-5 flex items-center text-lg font-light text-slate-300">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
)

const AboutSectionThree = () => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-16 md:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white/70 shadow-xl backdrop-blur-md md:flex-row">
        {/* Colonne image avec effet de fondu/dégradé */}
        <div className="relative flex min-h-[340px] w-full items-stretch md:min-h-[420px] md:w-1/2">
          <div className="h-full w-full">
            <Image
              src="/images/about/8033207.jpg"
              alt="Datalys équipe"
              width={800}
              height={600}
              className="h-full w-full object-cover [mask-image:linear-gradient(to_right,black_70%,transparent_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%] md:[mask-image:linear-gradient(to_right,black_70%,transparent_100%)]"
              loading="lazy"
              priority={false}
            />
            {/* Overlay digital très discret (optionnel) */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 800 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="digitalBlue"
                  x1="0"
                  y1="0"
                  x2="800"
                  y2="600"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#38bdf8" stopOpacity="0.10" />
                  <stop offset="1" stopColor="#6366f1" stopOpacity="0.06" />
                </linearGradient>
              </defs>
              <line
                x1="100"
                y1="0"
                x2="700"
                y2="600"
                stroke="url(#digitalBlue)"
                strokeWidth="1.5"
              />
              <line
                x1="0"
                y1="200"
                x2="800"
                y2="400"
                stroke="url(#digitalBlue)"
                strokeWidth="1"
              />
              <circle
                cx="180"
                cy="120"
                r="4"
                fill="#f5c034"
                fillOpacity="0.4"
              />
              <circle
                cx="650"
                cy="480"
                r="3"
                fill="#38bdf8"
                fillOpacity="0.3"
              />
            </svg>
          </div>
        </div>
        {/* Colonne texte sur fond blanc translucide, sans card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex w-full flex-col justify-center bg-white/90 p-8 backdrop-blur-lg md:w-1/2 md:p-12"
        >
          <h2 className="mb-6 text-left font-sans text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            À propos de{" "}
            <span className="text-[#f5c034]">Datalys Consulting</span>
          </h2>
          <p className="mb-4 text-justify text-base font-normal text-slate-700 md:text-lg">
            Fondée en 2023 par des consultants passionnés,{" "}
            <strong>DATALYS</strong> Consulting est une Entreprise de Service IT
            qui apporte une expertise réinventée. Nous sommes spécialisés dans
            le <strong>Cloud</strong>, l&apos;Infrastructure IT et les{" "}
            <strong>réseaux &amp; sécurités</strong>, sujets clés du monde de la
            Digitalisation.
          </p>
          <p className="mb-4 text-justify text-base font-normal text-slate-700 md:text-lg">
            Transformation digitale, gestion d&apos;infrastructures IT &amp;
            cloud, optimisation énergétique des Data Centers, déploiement
            efficace des systèmes de réseau et sécurité informatique :{" "}
            <strong>DATALYS</strong> s&apos;engage à propulser votre entreprise
            vers l&apos;avenir numérique.
          </p>
          <p className="mb-8 text-justify text-base font-normal text-slate-700 md:text-lg">
            L&apos;innovation est au cœur de notre ADN. Nous proposons à nos
            clients des solutions de nouvelle génération et des bonnes pratiques
            pour leur offrir un avantage concurrentiel durable.
          </p>
          <div className="flex w-full justify-start">
            <a
              href="/apropos"
              className="inline-block rounded-full bg-[#f5c034] px-8 py-4 text-base font-semibold text-white shadow-lg duration-300 ease-in-out hover:scale-105 hover:bg-[#eab308] focus:outline-none focus:ring-2 focus:ring-[#f5c034]/60 focus:ring-offset-2"
              aria-label="En savoir plus sur Datalys Consulting"
            >
              Voir plus
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSectionThree
