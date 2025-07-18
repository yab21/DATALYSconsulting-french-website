import AnimatedHomePage from "@/components/LayoutFR/AnimatedHomePage"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "DATALYS Consulting",
  description: "La page d'accueil de DATALYS Consulting",
  // other metadata
}

export default function Home() {
  return <AnimatedHomePage />
}
