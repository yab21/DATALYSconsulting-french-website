"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion"
import menuData from "./menuData"

// Composant pour les particules liquides
const LiquidParticles = ({ mouseX, mouseY }) => {
  const particles = Array.from({ length: 12 }, (_, i) => i)

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(245, 192, 52, ${0.3 + Math.random() * 0.4}) 0%, transparent 70%)`,
            left: mouseX,
            top: mouseY,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 80 - 40],
            y: [0, Math.random() * 100 - 50, Math.random() * 80 - 40],
            scale: [0, 1.5, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      ))}
    </div>
  )
}

// Composant pour l'effet de morphing liquide
const LiquidMorph = ({ isActive }) => {
  return (
    <motion.div
      className="absolute inset-0 -z-10"
      initial={false}
      animate={isActive ? "active" : "inactive"}
      variants={{
        inactive: {
          borderRadius: "0px",
          background: "rgba(245, 192, 52, 0)",
        },
        active: {
          borderRadius: ["0px", "25px", "15px", "20px"],
          background: [
            "rgba(245, 192, 52, 0)",
            "rgba(245, 192, 52, 0.1)",
            "rgba(245, 192, 52, 0.15)",
            "rgba(245, 192, 52, 0.1)",
          ],
        },
      }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    />
  )
}

// Composant pour l'animation de logo pulsant
const PulsingLogo = ({ src, alt }) => {
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="inline-block h-16 w-auto align-middle"
        animate={{
          filter: [
            "drop-shadow(0 0 10px rgba(245, 192, 52, 0.3))",
            "drop-shadow(0 0 20px rgba(245, 192, 52, 0.5))",
            "drop-shadow(0 0 15px rgba(245, 192, 52, 0.4))",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Particules autour du logo */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#f5c034]/40"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
              rotate: [0, 360],
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
  )
}

const Header = () => {
  // States
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(-1)
  const [langDropdown, setLangDropdown] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [sticky, setSticky] = useState(false)
  const [scrollDirection, setScrollDirection] = useState("up")
  const [lastScrollY, setLastScrollY] = useState(0)

  // Mouse tracking for liquid effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  const headerRef = useRef(null)

  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? -1 : index)
  }

  // Mouse move handler
  const handleMouseMove = (e) => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  // Sticky Navbar avec animations
  const handleStickyNavbar = () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > 80) {
      setSticky(true)
    } else {
      setSticky(false)
    }

    // Détection de la direction de scroll
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setScrollDirection("down")
    } else {
      setScrollDirection("up")
    }

    setLastScrollY(currentScrollY)

    // Calcul du progrès de scroll
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = currentScrollY / docHeight
    setScrollProgress(progress)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar)
    return () => window.removeEventListener("scroll", handleStickyNavbar)
  }, [lastScrollY])

  const usePathName = usePathname()

  // Fonction pour vérifier si nous sommes sur une page d'expertise
  const isExpertisePage = () => {
    return usePathName.includes("/notreexpertise/")
  }

  // Fonction pour vérifier si un lien est actif
  const isLinkActive = (path) => {
    // Pour la page d'accueil, vérifier l'exactitude
    if (path === "/") {
      return usePathName === "/"
    }
    // Pour les autres pages, vérifier l'exactitude ou le début du chemin
    return usePathName === path || usePathName.startsWith(path + "/")
  }

  // Fonction pour vérifier si un sous-lien est actif
  const isSubLinkActive = (path) => {
    return usePathName === path
  }

  // Variants pour les animations liquides
  const headerVariants = {
    hidden: {
      y: -100,
      opacity: 0,
      backdropFilter: "blur(0px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      backdropFilter: "blur(20px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  }

  const liquidMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.8,
      borderRadius: "50px",
      background: "rgba(0, 0, 0, 0.1)",
      y: -20,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      borderRadius: ["50px", "20px", "15px"],
      background: [
        "rgba(0, 0, 0, 0.1)",
        "rgba(255, 255, 255, 0.95)",
        "rgba(255, 255, 255, 0.95)",
      ],
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.05,
      },
    },
  }

  const liquidItemVariants = {
    closed: { opacity: 0, x: -20, scale: 0.8 },
    open: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  }

  return (
    <>
      {/* Barre de progression liquide */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left"
        style={{
          background: `linear-gradient(90deg, 
            rgba(245, 192, 52, 0.8) 0%, 
            rgba(245, 192, 52, 1) 50%, 
            rgba(234, 179, 8, 0.8) 100%)`,
        }}
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: scrollProgress,
          boxShadow: [
            "0 0 10px rgba(245, 192, 52, 0.3)",
            "0 0 20px rgba(245, 192, 52, 0.6)",
            "0 0 15px rgba(245, 192, 52, 0.4)",
          ],
        }}
        transition={{
          scaleX: { duration: 0.1 },
          boxShadow: { duration: 2, repeat: Infinity },
        }}
      />

      <motion.header
        ref={headerRef}
        className={`fixed left-0 top-0 z-50 w-full font-sans transition-all duration-700 ${
          sticky
            ? scrollDirection === "up"
              ? "translate-y-0 border-b border-white/20 bg-black/10 shadow-2xl backdrop-blur-3xl"
              : "-translate-y-full"
            : "bg-transparent"
        }`}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        onMouseMove={handleMouseMove}
        style={{
          background: sticky
            ? "linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)"
            : "transparent",
        }}
      >
        {/* Particules liquides */}
        <LiquidParticles mouseX={springX} mouseY={springY} />

        {/* Effet glassmorphisme avancé quand sticky */}
        {sticky && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}

        <div className="relative flex items-center justify-between px-8 py-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="block">
              <PulsingLogo src="/images/logo/logo.png" alt="logo" />
            </Link>
          </motion.div>

          <nav className="hidden items-center gap-6 md:flex">
            {menuData.map((menuItem, index) =>
              menuItem.submenu ? (
                <motion.div
                  key={index}
                  className="group relative"
                  tabIndex={0}
                  onBlur={() => setOpenDropdown(-1)}
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(-1)}
                >
                  <motion.button
                    className={`relative flex items-center gap-1 text-lg font-light tracking-wide transition-all duration-300 focus:outline-none ${
                      sticky ? "text-white" : "text-white"
                    } ${isExpertisePage() ? "text-[#f5c034]" : ""}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === index}
                    onClick={() => handleDropdown(index)}
                  >
                    {menuItem.title}
                    <motion.svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      animate={{ rotate: openDropdown === index ? 180 : 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </motion.svg>

                    {/* Effet de morphing liquide */}
                    <LiquidMorph isActive={openDropdown === index} />

                    {/* Indicateur actif pour les pages d'expertise */}
                    {isExpertisePage() && (
                      <motion.div
                        className="absolute -bottom-1 left-0 h-0.5 bg-[#f5c034]"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {openDropdown === index && (
                      <motion.div
                        className="absolute left-0 top-full z-50 mt-2 min-w-[250px] overflow-hidden rounded-xl border border-white/20 shadow-2xl backdrop-blur-3xl"
                        variants={liquidMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        role="menu"
                        aria-label={menuItem.title}
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.9) 100%)",
                        }}
                      >
                        {/* Particules de fond du dropdown */}
                        <div className="pointer-events-none absolute inset-0">
                          {Array.from({ length: 8 }, (_, i) => (
                            <motion.div
                              key={i}
                              className="absolute h-1 w-1 rounded-full bg-[#f5c034]/30"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                              }}
                              animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 0.5, 0],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                              }}
                            />
                          ))}
                        </div>
                        {menuItem.submenu.map((sub, subIdx) => (
                          <motion.div
                            key={subIdx}
                            variants={liquidItemVariants}
                          >
                            <Link
                              href={sub.path}
                              className={`group relative mx-2 block overflow-hidden rounded-lg px-5 py-4 text-base font-normal transition-all duration-300 ${
                                isSubLinkActive(sub.path)
                                  ? "bg-[#f5c034] text-white shadow-lg"
                                  : "text-white hover:bg-gradient-to-r hover:from-[#f5c034]/20 hover:to-[#eab308]/20"
                              }`}
                              role="menuitem"
                              tabIndex={0}
                            >
                              {/* Effet de fond animé */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[#f5c034]/20 to-[#eab308]/20"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                style={{ originX: 0 }}
                              />

                              {/* Particules décoratives */}
                              <div className="pointer-events-none absolute inset-0">
                                {Array.from({ length: 3 }, (_, i) => (
                                  <motion.div
                                    key={i}
                                    className="absolute h-1 w-1 rounded-full bg-[#f5c034]/40"
                                    style={{
                                      left: `${20 + i * 30}%`,
                                      top: `${30 + i * 20}%`,
                                    }}
                                    animate={{
                                      scale: [0, 1, 0],
                                      opacity: [0, 0.6, 0],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: i * 0.5,
                                    }}
                                  />
                                ))}
                              </div>

                              <motion.span
                                className="relative z-10 flex items-center"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                {sub.title}
                                {isSubLinkActive(sub.path) && (
                                  <motion.div
                                    className="ml-2 h-2 w-2 rounded-full bg-white"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                  />
                                )}
                              </motion.span>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="relative"
                >
                  <Link
                    href={menuItem.path || "#"}
                    className={`relative text-lg font-light tracking-wide transition-all duration-300 ${
                      sticky ? "text-white" : "text-white"
                    } ${isLinkActive(menuItem.path) ? "text-[#f5c034]" : ""}`}
                  >
                    {menuItem.title}

                    {/* Effet liquide pour les liens actifs */}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-[#f5c034]"
                      initial={{
                        width: isLinkActive(menuItem.path) ? "100%" : 0,
                        borderRadius: "0px",
                      }}
                      whileHover={{
                        width: "100%",
                        borderRadius: ["0px", "2px", "1px"],
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    />
                  </Link>
                </motion.div>
              ),
            )}

            {/* Dropdown langue avec effet liquide */}
            <motion.div
              className="relative ml-4"
              tabIndex={0}
              onBlur={() => setLangDropdown(false)}
            >
              <motion.button
                className={`flex items-center gap-2 text-lg font-light transition-all duration-300 focus:outline-none ${
                  sticky ? "text-white" : "text-white"
                }`}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ y: 0, scale: 0.95 }}
                aria-haspopup="true"
                aria-expanded={langDropdown}
                onClick={() => setLangDropdown(!langDropdown)}
                onMouseEnter={() => setLangDropdown(true)}
                onMouseLeave={() => setLangDropdown(false)}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 36 36"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    fill="#ed2939"
                    d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4z"
                  />
                  <path
                    fill="#002495"
                    d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z"
                  />
                  <path fill="#eee" d="M12 5h12v26H12z" />
                </motion.svg>
                <span>FR</span>
                <motion.svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  animate={{ rotate: langDropdown ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="m6 9 6 6 6-6" />
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {langDropdown && (
                  <motion.div
                    className="absolute right-0 top-full z-50 mt-2 w-32 overflow-hidden border border-white/20 shadow-2xl backdrop-blur-3xl"
                    variants={liquidMenuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    role="menu"
                    aria-label="Langue"
                    onMouseEnter={() => setLangDropdown(true)}
                    onMouseLeave={() => setLangDropdown(false)}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)",
                    }}
                  >
                    <motion.div variants={liquidItemVariants}>
                      <Link
                        href="https://en.datalysconsulting.com/"
                        className="mx-2 block rounded-lg px-5 py-3 text-base font-normal text-gray-800 transition-all duration-300 hover:bg-[#f5c034] hover:text-white"
                        role="menuitem"
                        tabIndex={0}
                      >
                        <motion.span
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          EN
                        </motion.span>
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </nav>

          {/* Hamburger menu liquide pour mobile */}
          <motion.button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="relative flex h-10 w-10 flex-col items-center justify-center text-white focus:outline-none md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Open menu"
          >
            <motion.span
              className="mb-1 block h-0.5 w-8 rounded bg-white"
              animate={{
                rotate: navbarOpen ? 45 : 0,
                y: navbarOpen ? 6 : 0,
                scaleX: navbarOpen ? 1.2 : 1,
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            <motion.span
              className="mb-1 block h-0.5 w-8 rounded bg-white"
              animate={{
                opacity: navbarOpen ? 0 : 1,
                scaleX: navbarOpen ? 0 : 1,
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            <motion.span
              className="block h-0.5 w-8 rounded bg-white"
              animate={{
                rotate: navbarOpen ? -45 : 0,
                y: navbarOpen ? -6 : 0,
                scaleX: navbarOpen ? 1.2 : 1,
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </motion.button>

          {/* Mobile menu avec effet liquide */}
          <AnimatePresence>
            {navbarOpen && (
              <motion.nav
                className="absolute right-0 top-full mt-2 flex w-72 flex-col items-end overflow-hidden border border-white/10 shadow-2xl backdrop-blur-3xl md:hidden"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: -20,
                  borderRadius: "50px",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  borderRadius: ["50px", "20px", "15px"],
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  y: -20,
                  borderRadius: "50px",
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.8) 100%)",
                }}
              >
                <div className="p-6">
                  {menuData.map((menuItem, index) =>
                    menuItem.submenu ? (
                      <motion.div
                        key={index}
                        className="w-full"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <motion.button
                          className="flex w-full items-center gap-1 py-3 text-left text-lg font-light tracking-wide text-white focus:outline-none"
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleDropdown(index)}
                          aria-haspopup="true"
                          aria-expanded={openDropdown === index}
                        >
                          {menuItem.title}
                          <motion.svg
                            className="ml-1 h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            animate={{
                              rotate: openDropdown === index ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </motion.svg>
                        </motion.button>

                        <AnimatePresence>
                          {openDropdown === index && (
                            <motion.div
                              className="ml-4 mt-2 overflow-hidden rounded-lg border-l border-white/20 bg-gray-800/50 pl-4"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4 }}
                            >
                              {menuItem.submenu.map((sub, subIdx) => (
                                <motion.div
                                  key={subIdx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: subIdx * 0.05 }}
                                >
                                  <Link
                                    href={sub.path}
                                    className="mx-2 my-1 block rounded-lg px-3 py-3 text-base font-normal text-white transition-all duration-300 hover:bg-[#f5c034] hover:text-black"
                                    role="menuitem"
                                    tabIndex={0}
                                    onClick={() => setNavbarOpen(false)}
                                  >
                                    <motion.span
                                      whileHover={{ x: 5 }}
                                      transition={{ duration: 0.2 }}
                                      className="flex items-center"
                                    >
                                      <div className="mr-3 h-2 w-2 rounded-full bg-[#f5c034] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                      {sub.title}
                                    </motion.span>
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={menuItem.path || "#"}
                          className="block py-3 text-lg font-light tracking-wide text-white transition-all duration-300"
                          onClick={() => setNavbarOpen(false)}
                        >
                          <motion.span
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {menuItem.title}
                          </motion.span>
                        </Link>
                      </motion.div>
                    ),
                  )}

                  {/* Dropdown langue mobile */}
                  <motion.div
                    className="mt-2 w-full"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: menuData.length * 0.1 }}
                  >
                    <motion.button
                      className="flex w-full items-center gap-1 py-3 text-left text-lg font-light tracking-wide text-white focus:outline-none"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setLangDropdown(!langDropdown)}
                      aria-haspopup="true"
                      aria-expanded={langDropdown}
                    >
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 36 36"
                        whileHover={{ rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path
                          fill="#ed2939"
                          d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4z"
                        />
                        <path
                          fill="#002495"
                          d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z"
                        />
                        <path fill="#eee" d="M12 5h12v26H12z" />
                      </motion.svg>
                      <span>FR</span>
                      <motion.svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        animate={{ rotate: langDropdown ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </motion.svg>
                    </motion.button>

                    <AnimatePresence>
                      {langDropdown && (
                        <motion.div
                          className="ml-4 overflow-hidden border-l border-white/20 pl-4"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Link
                            href="https://en.datalysconsulting.com/"
                            className="block rounded-lg px-2 py-2 text-base font-normal text-white transition-all duration-300 hover:bg-[#f5c034] hover:text-white"
                            role="menuitem"
                            tabIndex={0}
                            onClick={() => setNavbarOpen(false)}
                          >
                            <motion.span
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              EN
                            </motion.span>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  )
}

export default Header
