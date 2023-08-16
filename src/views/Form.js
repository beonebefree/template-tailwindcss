import { inject } from "@vercel/analytics"
import assets from "../assets"
import SectionWrapperForm from "../components/SectionWrapperForm"

inject()
const Form = () => {
  return (
    <>
        <SectionWrapperForm
            title={"Elije tu propia aventura: Formulario de contacto"}
            description={"Completa con tu información empresarial para que podamos contactarte con una propuesta incial."}
            showBtn
            mockupImg={assets.homeHero}
            banner={"banner"}
        />
    </>
)}

export default Form