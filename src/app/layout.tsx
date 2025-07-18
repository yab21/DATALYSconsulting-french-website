"use client"
import Footer from "@/components/LayoutFR/Footer"
import Header from "@/components/LayoutFR/Header"
import LoadingSpinner from "@/components/common/LoadingSpinner"
import { AnimatePresence } from "framer-motion"
import PageTransition from "@/components/LayoutFR/Transitions/PageTransition"
import { useLoading } from "@/lib/hooks/useLoading"
import "../styles/index.css"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isEspaceEntreprise = pathname.startsWith("/espace-entreprise")
  const { isLoading, setLoading, isPageTransition, setPageTransition } =
    useLoading()

  // Gestion du loading initial
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [setLoading])

  // Gestion des transitions de pages
  useEffect(() => {
    setPageTransition(true)
    const timer = setTimeout(() => {
      setPageTransition(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [pathname, setPageTransition])

  return (
    <html lang="fr">
      <body>
        {/* Loading global */}
        <AnimatePresence>
          {isLoading && (
            <LoadingSpinner
              message="Chargement de DATALYS Consulting..."
              isPageTransition={false}
            />
          )}
        </AnimatePresence>

        {/* Loading pour les transitions de pages */}
        <AnimatePresence>
          {isPageTransition && (
            <LoadingSpinner
              message="Chargement de la page..."
              isPageTransition={true}
            />
          )}
        </AnimatePresence>

        {!isEspaceEntreprise && <Header />}
        <AnimatePresence mode="wait">
          <PageTransition>{children}</PageTransition>
        </AnimatePresence>
        {!isEspaceEntreprise && <Footer />}
      </body>
    </html>
  )
}
