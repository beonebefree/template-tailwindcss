import { inject } from "@vercel/analytics"
import assets from "../assets"
import SectionWrapperClients from "../components/SectionWrapperClients"

inject()
const Clients = () => {
  return (
    <>
        <SectionWrapperClients
            title={"clientes"}
            description={"Lista de contactos."}
            showBtn
            mockupImg={assets.homeHero}
            banner={"banner"}
        />
    </>
)}

export default Clients