"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Breadcrumb from "@/components/LayoutFR/Common/Breadcrumb"
import { AnimatePresence } from "framer-motion"

// Données des événements
const eventsData = [
  {
    id: 1,
    title: "Sommet de l'innovation en matière d'IA 2024",
    description:
      "Rejoignez-nous pour une discussion approfondie sur les dernières tendances de l'IA et leur impact sur la transformation des entreprises.",
    date: "15-16 Mars 2024",
    location: "Paris, France",
    price: "Gratuit",
    capacity: "200 participants",
    speakers: ["Dr. Sarah Johnson", "Prof. Marc Dubois"],
    image: "/images/events/event.jpg",
    category: "upcoming",
  },
  {
    id: 2,
    title: "Conférence sur la Cybersécurité",
    description:
      "Découvrez les meilleures pratiques en matière de sécurité informatique et les nouvelles menaces émergentes.",
    date: "10-11 Avril 2024",
    location: "Lyon, France",
    price: "150€",
    capacity: "150 participants",
    speakers: ["Jean-Pierre Martin", "Marie Dubois"],
    image: "/images/events/event.jpg",
    category: "upcoming",
  },
  {
    id: 3,
    title: "Workshop Data Analytics",
    description:
      "Apprenez les fondamentaux de l'analyse de données avec des outils modernes et des cas pratiques.",
    date: "5 Mai 2024",
    location: "Marseille, France",
    price: "200€",
    capacity: "50 participants",
    speakers: ["Pierre Durand", "Sophie Bernard"],
    image: "/images/events/event.jpg",
    category: "upcoming",
  },
  {
    id: 4,
    title: "Tech Summit 2023",
    description:
      "Un événement majeur qui a réuni les experts de l'industrie technologique pour discuter des innovations futures.",
    date: "20-21 Novembre 2023",
    location: "Paris, France",
    price: "Gratuit",
    capacity: "300 participants",
    speakers: ["Dr. Michel Dupont", "Prof. Anne Moreau"],
    image: "/images/events/event.jpg",
    category: "past",
  },
]

const EvenementsPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const filteredEvents = eventsData.filter(
    (event) => event.category === activeTab,
  )

  const openEventModal = (event) => {
    setSelectedEvent(event)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedEvent(null)
  }

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
          <Breadcrumb pageName="Événements" />

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
                <motion.h1
                  className="mb-6 text-5xl font-bold text-white md:text-6xl"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    background:
                      "linear-gradient(45deg, #f5c034, #eab308, #f5c034)",
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Événements
                </motion.h1>
                <motion.p
                  className="mx-auto max-w-3xl text-xl text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Rejoignez-nous pour des moments extraordinaires. Découvrez nos
                  événements passés et à venir, et partagez des expériences
                  uniques avec nos partenaires et experts.
                </motion.p>
              </motion.div>

              {/* Navigation par onglets */}
              <motion.div
                className="mb-12 flex justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="rounded-2xl border border-gray-700/50 bg-gray-800/50 p-2 backdrop-blur-lg">
                  {[
                    { id: "upcoming", label: "Événements à venir" },
                    { id: "past", label: "Événements passés" },
                  ].map((tab) => (
                    <motion.button
                      key={tab.id}
                      className={`rounded-xl px-8 py-3 font-medium transition-all duration-300 ${
                        activeTab === tab.id
                          ? "bg-[#f5c034] text-black shadow-lg"
                          : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tab.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Grille d'événements */}
              <motion.div
                className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {filteredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className="group relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                    whileHover={{ y: -10 }}
                  >
                    {/* Carte d'événement avec glassmorphisme */}
                    <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/30 shadow-2xl backdrop-blur-lg transition-all duration-500 group-hover:shadow-[#f5c034]/20">
                      {/* Image de l'événement */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        {/* Badge de catégorie */}
                        <div className="absolute left-4 top-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                              event.category === "upcoming"
                                ? "bg-[#f5c034] text-black"
                                : "bg-gray-600 text-white"
                            }`}
                          >
                            {event.category === "upcoming"
                              ? "À venir"
                              : "Passé"}
                          </span>
                        </div>
                      </div>

                      {/* Contenu de la carte */}
                      <div className="p-6">
                        <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#f5c034]">
                          {event.title}
                        </h3>
                        <p className="mb-4 line-clamp-2 text-sm text-gray-300">
                          {event.description}
                        </p>

                        {/* Détails de l'événement */}
                        <div className="mb-6 space-y-2">
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              className="mr-2 h-4 w-4"
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
                            {event.date}
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              className="mr-2 h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {event.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              className="mr-2 h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                              />
                            </svg>
                            {event.price}
                          </div>
                        </div>

                        {/* Boutons d'action */}
                        <div className="flex gap-3">
                          <motion.button
                            className="flex-1 rounded-lg border border-[#f5c034] bg-transparent px-4 py-2 text-sm font-medium text-[#f5c034] transition-all duration-300 hover:bg-[#f5c034] hover:text-black"
                            onClick={() => openEventModal(event)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Voir les détails
                          </motion.button>
                          {event.category === "upcoming" && (
                            <motion.button
                              className="flex-1 rounded-lg bg-[#f5c034] px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-[#eab308]"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              S'inscrire
                            </motion.button>
                          )}
                        </div>
                      </div>

                      {/* Effet de brillance au survol */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Message si aucun événement */}
              {filteredEvents.length === 0 && (
                <motion.div
                  className="py-20 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <div className="mb-4 text-6xl">📅</div>
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    Aucun événement{" "}
                    {activeTab === "upcoming" ? "à venir" : "passé"}
                  </h3>
                  <p className="text-gray-400">
                    Revenez bientôt pour découvrir nos prochains événements !
                  </p>
                </motion.div>
              )}
            </div>
          </section>
        </div>
      </div>

      {/* Modal pour les détails de l'événement */}
      <AnimatePresence>
        {showModal && selectedEvent && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gray-700 bg-gray-900"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* En-tête du modal */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <button
                  onClick={closeModal}
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                >
                  ✕
                </button>
              </div>

              {/* Contenu du modal */}
              <div className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-white">
                  {selectedEvent.title}
                </h2>
                <p className="mb-6 text-gray-300">
                  {selectedEvent.description}
                </p>

                <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <svg
                        className="mr-3 h-5 w-5 text-[#f5c034]"
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
                      <span className="font-medium">Date:</span>
                      <span className="ml-2">{selectedEvent.date}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg
                        className="mr-3 h-5 w-5 text-[#f5c034]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="font-medium">Lieu:</span>
                      <span className="ml-2">{selectedEvent.location}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg
                        className="mr-3 h-5 w-5 text-[#f5c034]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                      <span className="font-medium">Prix:</span>
                      <span className="ml-2">{selectedEvent.price}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg
                        className="mr-3 h-5 w-5 text-[#f5c034]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="font-medium">Capacité:</span>
                      <span className="ml-2">{selectedEvent.capacity}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 font-medium text-white">
                      Intervenants:
                    </h4>
                    <ul className="space-y-2">
                      {selectedEvent.speakers.map((speaker, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-300"
                        >
                          <div className="mr-3 h-2 w-2 rounded-full bg-[#f5c034]" />
                          {speaker}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {selectedEvent.category === "upcoming" && (
                  <div className="flex gap-3">
                    <motion.button
                      className="flex-1 rounded-lg bg-[#f5c034] px-6 py-3 font-medium text-black transition-colors hover:bg-[#eab308]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      S'inscrire maintenant
                    </motion.button>
                    <motion.button
                      className="rounded-lg border border-gray-600 px-6 py-3 text-gray-300 transition-colors hover:border-[#f5c034] hover:text-[#f5c034]"
                      onClick={closeModal}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Fermer
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default EvenementsPage
