import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Espace Entreprise | DATALYS Consulting",
  description:
    "Accédez à votre espace entreprise sécurisé pour gérer vos projets IT, surveiller vos infrastructures et collaborer avec nos équipes. Solutions professionnelles pour entreprises.",
  keywords:
    "espace entreprise, gestion IT, infrastructure, projets, collaboration, DATALYS Consulting",
  openGraph: {
    title: "Espace Entreprise | DATALYS Consulting",
    description:
      "Accédez à votre espace entreprise sécurisé pour gérer vos projets IT",
    type: "website",
  },
}

export default function EspaceEntrepriseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
