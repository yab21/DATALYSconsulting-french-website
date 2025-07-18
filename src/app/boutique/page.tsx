import PageNotFound from "@/components/LayoutFR/PageNotFound"
import Breadcrumb from "@/components/LayoutFR/Common/Breadcrumb"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Boutique | DATALYS Consulting",
  description: "La page boutique de DATALYS Consulting",
  // other metadata
}

const Page = () => {
  return (
    <>
      <Breadcrumb pageName="Boutique" />
      <PageNotFound />
    </>
  )
}

export default Page
