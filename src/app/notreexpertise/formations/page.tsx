import Breadcrumb from "@/components/LayoutFR/Common/Breadcrumb"
import AboutFormations from "@/components/LayoutFR/AboutFormations"
import DomainCourse from "@/components/LayoutFR/DomainCourse"

const FormationsPage = () => {
  return (
    <>
      <Breadcrumb pageName="Formation" />
      <AboutFormations />
      <DomainCourse />
      {/* <ModuleFormations /> */}
    </>
  )
}

export default FormationsPage
