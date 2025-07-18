import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Boutique | DATALYS Consulting",
  description:
    "Découvrez notre boutique en ligne pour tous vos besoins en solutions technologiques. Infrastructure, Cloud, Sécurité et plus encore.",
  keywords:
    "boutique, solutions technologiques, infrastructure, cloud, sécurité, DATALYS Consulting",
  openGraph: {
    title: "Boutique | DATALYS Consulting",
    description: "Boutique en ligne de solutions technologiques",
    type: "website",
  },
}

export default function BoutiqueLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
