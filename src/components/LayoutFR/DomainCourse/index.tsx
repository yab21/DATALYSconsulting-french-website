"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import useWeb3Forms from "@web3forms/react"
import { motion } from "framer-motion"
import { useRef } from "react"

const ArrowBox = () => (
  <motion.div
    className="mr-3 flex h-6 w-6 items-center justify-center rounded-md bg-[#f5c034]/20"
    whileHover={{ scale: 1.1, backgroundColor: "rgba(245, 192, 52, 0.3)" }}
    transition={{ duration: 0.2 }}
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  })
  const [isSuccess, setIsSuccess] = useState(false)
  const [message, setMessage] = useState("")

  // Please update the Access Key in the .env
  const apiKey =
    process.env.PUBLIC_ACCESS_KEY || "78a95b88-cb54-4602-b53a-549b2e94711f"

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "DATALYS Consulting Store",
      subject: "Nouveau message d'un contact à partir de votre site web",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true)
      setMessage("Message envoyé avec succès.")
      reset()
    },
    onError: (msg, data) => {
      setIsSuccess(false)
      setMessage("Un problème s'est produit. Veuillez réessayer plus tard.")
    },
  })

  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <section
        id="features"
        className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 md:py-20 lg:py-28"
      >
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
                y: [0, -30, -60],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [0, Math.random() * 15 - 7.5],
              }}
              transition={{
                duration: Math.random() * 4 + 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Grille holographique */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(rgba(245,192,52,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(245,192,52,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-full" data-wow-delay=".15s" ref={scrollRef}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <motion.div
                    className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-gradient-to-br from-[#f5c034]/20 to-[#eab308]/20 text-[#f5c034] shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 18 18"
                    >
                      <path
                        fill="#f5c034"
                        fillRule="evenodd"
                        d="M13.037.057A.75.75 0 0 1 13.5.75V2.5h1.75a.75.75 0 0 1 .53 1.28l-3 3a.75.75 0 0 1-.53.22h-.377a4 4 0 1 1-4.797-2.892a.75.75 0 0 1 .347 1.46A2.5 2.5 0 1 0 10.29 7h-.23L8.53 8.53a.75.75 0 1 1-1.06-1.06L9 5.94V3.75a.75.75 0 0 1 .22-.53l3-3a.75.75 0 0 1 .817-.163M10.5 4.061V5.5h1.44l1.5-1.5H12V2.56zM4.82 2.33a6.5 6.5 0 0 1 3.853-.796a.75.75 0 1 0 .155-1.492a8 8 0 1 0 7.129 7.128a.75.75 0 1 0-1.492.155A6.5 6.5 0 1 1 4.82 2.331Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mb-5 text-xl font-bold text-[#f5c034] sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    Nos Objectifs de Formation
                  </motion.h3>

                  <div className="inline-block">
                    <div className="text-justify text-base font-light leading-relaxed text-white [word-spacing:-1.9px] md:text-[17px]">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                      >
                        <div className="space-y-4">
                          <motion.div
                            className="flex items-start"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowBox />
                            <p className="flex-1">
                              <span className="font-bold text-[#f5c034]">
                                Développement des Compétences :{" "}
                              </span>{" "}
                              Offrir des formations sur mesure pour renforcer
                              les compétences techniques et managériales de vos
                              équipes.
                            </p>
                          </motion.div>

                          <motion.div
                            className="flex items-start"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowBox />
                            <p className="flex-1">
                              <span className="font-bold text-[#f5c034]">
                                Innovation et Adaptabilité :
                              </span>{" "}
                              Encourager l&apos;apprentissage de nouvelles
                              technologies et des méthodes de travail.
                            </p>
                          </motion.div>

                          <motion.div
                            className="flex items-start"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowBox />
                            <p className="flex-1">
                              <span className="font-bold text-[#f5c034]">
                                Épanouissement Professionnel :
                              </span>{" "}
                              Favoriser la montée en compétences et les
                              perspectives de carrière.
                            </p>
                          </motion.div>
                        </div>

                        <motion.h2
                          className="mb-4 mt-8 text-xl font-bold text-[#f5c034] sm:text-2xl lg:text-xl xl:text-2xl"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6, duration: 0.6 }}
                        >
                          Nos Formations
                        </motion.h2>

                        <div className="space-y-4 text-justify text-base font-light text-white">
                          <motion.div
                            className="flex items-start"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowBox />
                            <p className="flex-1">
                              <span className="font-bold text-[#f5c034]">
                                Formations et Atelier Techniques :
                              </span>{" "}
                              Cours sur les outils, solutions et logiciels
                              spécifiques à notre secteur d&apos;activité.
                            </p>
                          </motion.div>

                          <motion.div
                            className="flex items-start"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowBox />
                            <p className="flex-1">
                              <span className="font-bold text-[#f5c034]">
                                Ateliers de Leadership :
                              </span>{" "}
                              Programmes pour développer des compétences en
                              gestion et en communication.
                            </p>
                          </motion.div>

                          <motion.div
                            className="flex items-start"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowBox />
                            <p className="flex-1">
                              <span className="font-bold text-[#f5c034]">
                                Séminaires :
                              </span>{" "}
                              Initiatives pour la présentation de produits et
                              solutions ainsi que le renforcement des capacités
                              et compétences techniques.
                            </p>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                          >
                            <div>
                              <p className="text-lg font-medium text-[#f5c034]">
                                Ensemble, continuons à bâtir un avenir
                                prometteur ! Avez-vous besoin d&apos;une
                                formation ou d&apos;un accompagnement ?
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="w-full px-4">
                  <motion.div
                    className="mb-12 rounded-lg border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 px-8 py-11 shadow-2xl backdrop-blur-sm sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h2
                      className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                    >
                      Besoin d&apos;une formation, contactez-nous.
                    </motion.h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="my-10">
                      <div className="flex flex-wrap">
                        <input
                          type="checkbox"
                          id="botcheck"
                          className="hidden"
                          style={{ display: "none" }}
                          {...register("botcheck")}
                        ></input>
                        <div className="w-full px-4 md:w-1/2">
                          <div className="mb-5">
                            <input
                              type="text"
                              placeholder="Nom et prénom"
                              autoComplete="off"
                              className={`w-full rounded-md border-2 bg-gray-800/50 px-4 py-3 text-white outline-none placeholder:text-gray-400 focus:ring-4 focus:ring-[#f5c034]/20 ${
                                errors.name
                                  ? "border-red-600 ring-red-100 focus:border-red-600"
                                  : "border-gray-600 ring-gray-100 focus:border-[#f5c034]"
                              }`}
                              {...register("name", {
                                required: "Le nom complet est obligatoire",
                                maxLength: 80,
                              })}
                            />
                            {errors.name && (
                              <div className="mt-1 text-red-400">
                                <small>{String(errors.name.message)}</small>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="w-full px-4 md:w-1/2">
                          <div className="mb-5">
                            <label htmlFor="email_address" className="sr-only">
                              Adresse e-mail
                            </label>
                            <input
                              id="email_address"
                              type="email"
                              placeholder="Adresse e-mail"
                              autoComplete="off"
                              className={`w-full rounded-md border-2 bg-gray-800/50 px-4 py-3 text-white outline-none placeholder:text-gray-400 focus:ring-4 focus:ring-[#f5c034]/20 ${
                                errors.email
                                  ? "border-red-600 ring-red-100 focus:border-red-600"
                                  : "border-gray-600 ring-gray-100 focus:border-[#f5c034]"
                              }`}
                              {...register("email", {
                                required: "Saisissez votre adresse e-mail",
                                pattern: {
                                  value: /^\S+@\S+$/i,
                                  message: "Veuillez saisir un e-mail valide",
                                },
                              })}
                            />
                            {errors.email && (
                              <div className="mt-1 text-red-400">
                                <small>{String(errors.email.message)}</small>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="w-full px-4">
                          <div className="mb-5">
                            <label htmlFor="number" className="sr-only">
                              Numéro de téléphone
                            </label>
                            <input
                              id="number"
                              type="tel"
                              placeholder="Numéro de téléphone"
                              autoComplete="off"
                              className={`w-full rounded-md border-2 bg-gray-800/50 px-4 py-3 text-white outline-none placeholder:text-gray-400 focus:ring-4 focus:ring-[#f5c034]/20 ${
                                errors.number
                                  ? "border-red-600 ring-red-100 focus:border-red-600"
                                  : "border-gray-600 ring-gray-100 focus:border-[#f5c034]"
                              }`}
                              {...register("number", {
                                required: "Saisissez votre numéro de téléphone",
                                pattern: {
                                  value: /^\+?[1-9]\d{1,14}$/,
                                  message:
                                    "Veuillez saisir un numéro de téléphone valide",
                                },
                              })}
                            />
                            {errors.number && (
                              <div className="mt-1 text-red-400">
                                <small>{String(errors.number.message)}</small>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="w-full px-4">
                          <div className="mb-3">
                            <textarea
                              name="message"
                              placeholder="Votre message"
                              className={`h-36 w-full rounded-md border-2 bg-gray-800/50 px-4 py-3 text-white outline-none placeholder:text-gray-400 focus:ring-4 focus:ring-[#f5c034]/20 ${
                                errors.message
                                  ? "border-red-600 ring-red-100 focus:border-red-600"
                                  : "border-gray-600 ring-gray-100 focus:border-[#f5c034]"
                              }`}
                              {...register("message", {
                                required: "Saisissez votre message",
                              })}
                            />
                            {errors.message && (
                              <div className="mt-1 text-red-400">
                                <small>{String(errors.message.message)}</small>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="w-full px-4">
                          <motion.button
                            type="submit"
                            className="rounded-md bg-gradient-to-r from-[#f5c034] to-[#eab308] px-9 py-4 font-semibold text-white transition-all hover:shadow-lg hover:shadow-[#f5c034]/25 focus:outline-none focus:ring-2 focus:ring-[#f5c034]/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          >
                            {isSubmitting ? "Envoi..." : "Contactez-nous"}
                          </motion.button>
                        </div>
                      </div>
                    </form>

                    {isSubmitSuccessful && isSuccess && (
                      <motion.div
                        className="mt-3 rounded-md border border-green-500/30 bg-green-500/20 p-3 text-center text-sm text-green-400"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {message}
                      </motion.div>
                    )}
                    {isSubmitSuccessful && !isSuccess && (
                      <motion.div
                        className="mt-3 rounded-md border border-red-500/30 bg-red-500/20 p-3 text-center text-sm text-red-400"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {message}
                      </motion.div>
                    )}
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
