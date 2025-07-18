"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useForm } from "react-hook-form"
import useWeb3Forms from "@web3forms/react"
import Breadcrumb from "@/components/LayoutFR/Common/Breadcrumb"

const ContactPage = () => {
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

  return (
    <>
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
          <Breadcrumb pageName="Contact" />

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
                  Contactez-nous
                </motion.h1>
                <motion.p
                  className="mx-auto max-w-3xl text-xl text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Prêt à transformer votre entreprise ? Contactez-nous dès
                  aujourd'hui pour discuter de vos besoins et découvrir comment
                  nous pouvons vous aider.
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                {/* Formulaire de contact */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/30 p-8 shadow-2xl backdrop-blur-lg">
                    <motion.h2
                      className="mb-8 text-3xl font-bold text-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                    >
                      Envoyez-nous un message
                    </motion.h2>

                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <input
                        type="checkbox"
                        id="botcheck"
                        className="hidden"
                        style={{ display: "none" }}
                        {...register("botcheck")}
                      />

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8, duration: 0.8 }}
                        >
                          <input
                            type="text"
                            placeholder="Nom et prénom"
                            autoComplete="off"
                            className={`w-full rounded-xl border-2 bg-gray-700/50 px-4 py-4 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#f5c034]/50 ${
                              errors.name
                                ? "border-red-500 focus:border-red-500"
                                : "border-gray-600 focus:border-[#f5c034]"
                            }`}
                            {...register("name", {
                              required: "Le nom complet est obligatoire",
                              maxLength: 80,
                            })}
                          />
                          {errors.name && (
                            <motion.div
                              className="mt-2 text-sm text-red-400"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                            >
                              {errors.name.message}
                            </motion.div>
                          )}
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.9, duration: 0.8 }}
                        >
                          <input
                            type="email"
                            placeholder="Adresse e-mail"
                            autoComplete="off"
                            className={`w-full rounded-xl border-2 bg-gray-700/50 px-4 py-4 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#f5c034]/50 ${
                              errors.email
                                ? "border-red-500 focus:border-red-500"
                                : "border-gray-600 focus:border-[#f5c034]"
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
                            <motion.div
                              className="mt-2 text-sm text-red-400"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                            >
                              {errors.email.message}
                            </motion.div>
                          )}
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.8 }}
                      >
                        <input
                          type="tel"
                          placeholder="Numéro de téléphone"
                          autoComplete="off"
                          className={`w-full rounded-xl border-2 bg-gray-700/50 px-4 py-4 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#f5c034]/50 ${
                            errors.number
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-600 focus:border-[#f5c034]"
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
                          <motion.div
                            className="mt-2 text-sm text-red-400"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {errors.number.message}
                          </motion.div>
                        )}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                      >
                        <textarea
                          placeholder="Votre message"
                          rows={6}
                          className={`w-full resize-none rounded-xl border-2 bg-gray-700/50 px-4 py-4 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#f5c034]/50 ${
                            errors.message
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-600 focus:border-[#f5c034]"
                          }`}
                          {...register("message", {
                            required: "Saisissez votre message",
                          })}
                        />
                        {errors.message && (
                          <motion.div
                            className="mt-2 text-sm text-red-400"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {errors.message.message}
                          </motion.div>
                        )}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                      >
                        <motion.button
                          type="submit"
                          className="w-full rounded-xl bg-gradient-to-r from-[#f5c034] to-[#eab308] px-8 py-4 font-bold text-black shadow-lg transition-all duration-300 hover:from-[#eab308] hover:to-[#f5c034] hover:shadow-[#f5c034]/25"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center">
                              <motion.div
                                className="h-5 w-5 rounded-full border-2 border-black border-t-transparent"
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />
                              <span className="ml-2">Envoi en cours...</span>
                            </div>
                          ) : (
                            "Envoyer le message"
                          )}
                        </motion.button>
                      </motion.div>

                      {isSubmitSuccessful && (
                        <motion.div
                          className={`mt-4 rounded-xl p-4 text-center ${
                            isSuccess
                              ? "border border-green-500/50 bg-green-500/20 text-green-400"
                              : "border border-red-500/50 bg-red-500/20 text-red-400"
                          }`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {message}
                        </motion.div>
                      )}
                    </form>
                  </div>
                </motion.div>

                {/* Informations de contact et cartes */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <motion.div
                    className="relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/30 p-8 shadow-2xl backdrop-blur-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  >
                    <h3 className="mb-6 text-2xl font-bold text-white">
                      Nos coordonnées
                    </h3>

                    <div className="space-y-6">
                      <motion.div
                        className="flex items-center space-x-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5c034]/20">
                          <svg
                            className="h-6 w-6 text-[#f5c034]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Email</p>
                          <p className="font-medium text-white">
                            contact@datalysconsulting.com
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center space-x-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5c034]/20">
                          <svg
                            className="h-6 w-6 text-[#f5c034]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Téléphone</p>
                          <p className="font-medium text-white">
                            +225 27 22 49 96 96
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center space-x-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5c034]/20">
                          <svg
                            className="h-6 w-6 text-[#f5c034]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Horaires</p>
                          <p className="font-medium text-white">
                            Lun - Ven: 8h00 - 18h00
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                  >
                    <h3 className="mb-4 text-2xl font-bold text-white">
                      Nos bureaux
                    </h3>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <motion.div
                        className="relative overflow-hidden rounded-xl border border-gray-700/50"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="h-48">
                          <iframe
                            className="h-full w-full"
                            frameBorder="0"
                            src="https://www.google.com/maps/embed/v1/place?q=Rivera+Faya,+Face+du+Collège+Jules+Vernes&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                          />
                        </div>
                        <div className="bg-gray-800/80 p-4 backdrop-blur-sm">
                          <h4 className="mb-1 font-semibold text-white">
                            Bureau RCI
                          </h4>
                          <p className="text-sm text-gray-300">
                            Rivera Faya, Face du Collège Jules Vernes
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="relative overflow-hidden rounded-xl border border-gray-700/50"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="h-48">
                          <iframe
                            className="h-full w-full"
                            frameBorder="0"
                            src="https://www.google.com/maps/embed/v1/place?q=Almamyah+Rue+028+N°466+COMMUNE+DE+KALOUM&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                          />
                        </div>
                        <div className="bg-gray-800/80 p-4 backdrop-blur-sm">
                          <h4 className="mb-1 font-semibold text-white">
                            Bureau Guinée
                          </h4>
                          <p className="text-sm text-gray-300">
                            Almamyah Rue 028 N°466, Commune de Kaloum
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default ContactPage
