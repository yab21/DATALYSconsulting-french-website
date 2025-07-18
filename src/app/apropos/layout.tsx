import { Metadata } from "next"

export const metadata: Metadata = {
  title: "A propos de nous | DATALYS Consulting",
  description: "La page d'apropos de nous de DATALYS Consulting",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
