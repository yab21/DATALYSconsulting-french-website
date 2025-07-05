// import AboutSectionOne from "@/components/LayoutFR/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/LayoutFR/About/AboutSectionTwo";
// import OurWorks from "@/components/LayoutFR/OurWorks";
// import Brands from "@/components/LayoutFR/Brands";
import ScrollUp from "@/components/LayoutFR/Common/ScrollUp"
import Features from "@/components/LayoutFR/Features"
import AboutSectionThree from "@/components/LayoutFR/About/AboutSectionThree"
// import Hero from "@/components/LayoutFR/Hero";
// import Heroo from "@/components/LayoutFR/Heroo";
// import Testimonials from "@/components/LayoutFR/Testimonials";
import { Metadata } from "next"
// import PageTransition from "@/components/LayoutFR/Transitions/PageTransition"
// import ScrollAnimation from "@/components/LayoutFR/Transitions/ScrollAnimation"
import LastHero from "@/components/LayoutFR/LastHero"

export const metadata: Metadata = {
  title: "DATALYS Consulting",
  description: "La page d'accueil de DATALYS Consulting",
  // other metadata
}

export default function Home() {
  return (
    <main>
      <ScrollUp />
      {/* <Heroo /> */}
      <LastHero />
      {/* <Hero /> */}
      <AboutSectionThree />
      <Features />
      {/* <AboutSectionOne /> */}
    </main>
  )
}
