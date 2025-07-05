"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    )
  }

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <div
      className="relative h-[100vh] min-h-[600px] w-full overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full"
        >
          <div
            className="relative h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex min-h-[600px] flex-col items-start items-center justify-center px-4 pt-20 text-left text-white md:items-start md:px-0 md:pl-24 md:pt-24 lg:pl-32 xl:pl-48">
              <h1 className="mb-4 max-w-2xl text-center font-serif text-3xl font-bold leading-tight drop-shadow-lg xs:text-4xl sm:text-5xl md:text-left md:text-6xl lg:text-7xl">
                {slides[currentIndex].title}
                <br />
                <span className="block font-serif text-4xl font-bold xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                  {slides[currentIndex].title2}{" "}
                  <span className="text-[#f5c034]">Consulting</span>
                </span>
                <br />
                <span className="mt-2 block text-xl font-light xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  {slides[currentIndex].title3}
                </span>
              </h1>
              <p className="mb-8 max-w-xl text-center text-base font-light drop-shadow xs:text-lg sm:text-xl md:text-left md:text-2xl">
                {slides[currentIndex].description}
              </p>
              <div className="mb-8 flex items-center gap-6">
                <a
                  href={slides[currentIndex].buttons[0].link}
                  className="group flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl text-[#f5c034] shadow-lg transition-transform duration-300 hover:scale-105"
                  aria-label={slides[currentIndex].buttons[0].text}
                  tabIndex={0}
                >
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="12" fill="#fff" />
                    <polygon points="10,8 16,12 10,16" fill="#f5c034" />
                  </svg>
                </a>
                <a
                  href={slides[currentIndex].buttons[1].link}
                  className="ml-2 rounded-full bg-[#f5c034] px-8 py-3 text-lg font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-[#eab308]"
                  aria-label={slides[currentIndex].buttons[1].text}
                  tabIndex={0}
                >
                  {slides[currentIndex].buttons[1].text}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Pagination verticale à droite + flèche animée */}
      <div className="absolute right-8 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center space-y-4">
        {/* Flèche animée */}
        <motion.div
          initial={{ y: 0, opacity: 0.7 }}
          animate={{ y: [0, 16, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="mb-2"
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="#f5c034"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
        {/* Pagination points verticaux */}
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-8 w-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/75"}`}
            aria-label={`Go to slide ${index + 1}`}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  )
}

export default LastHero
