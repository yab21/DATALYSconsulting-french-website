import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Événements | DATALYS Consulting",
  description:
    "Découvrez nos événements à venir et passés. Conférences, ateliers et formations sur l'IA, l'analyse de données et les technologies innovantes.",
  keywords:
    "événements, conférences, ateliers, formation, IA, analyse de données, DATALYS Consulting",
  openGraph: {
    title: "Événements | DATALYS Consulting",
    description: "Événements et conférences technologiques",
    type: "website",
  },
}

export default function EvenementsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
