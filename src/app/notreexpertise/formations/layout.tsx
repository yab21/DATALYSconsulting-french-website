import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Formations | DATALYS Consulting",
  description:
    "Découvrez nos programmes de formation sur mesure en Cloud, Infrastructure Système, Energie & Datacenter, Réseaux & Sécurité. Formations en présentiel et à distance.",
  keywords:
    "formation, cloud, infrastructure, datacenter, réseaux, sécurité, DATALYS Consulting",
  openGraph: {
    title: "Formations | DATALYS Consulting",
    description:
      "Programmes de formation sur mesure en technologies de l'information",
    type: "website",
  },
}

export default function FormationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
