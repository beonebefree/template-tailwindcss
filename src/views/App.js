import SectionWrapper from "../components/SectionWrapper";
import assets from "../assets";
import styles from "../styles/Global.js";
import { Analytics } from "@vercel/analytics/react";
import { inject } from "@vercel/analytics";
import Contact from "../components/Contact";
import Logo from "../components/Logo";
import SectionWrapperText from "../components/SectionWrapperText";
import LogoBlack from "../assets/logoblackbefree.png";

inject();

const Landing = () => {
  return (
    <>
      <Analytics />
      <Logo />
      <SectionWrapper
        className="mt-2"
        title="Potencia tu negocio con una web profesional"
        description="Creamos una página que se ajuste a tus necesidades y llevamos tu marca al siguiente nivel."
        //showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapperText
        title="Recibí Asistencia personalizada"
        description="De cero a cien, te acompañamos en el proceso.
        Completá el formulario y alguien del equipo se contactará contigo."
        reverse
        showBtn
      />
      {/* <WhatsAppButton/> */}
      {/* <Features /> */}
      <SectionWrapper
        title="Acompañamiento actívo"
        description="En Befree entendemos que el mercado está en constante cambio, por eso estamos siempre presentes y te ofrecemos actualizaciones todos los meses para que tu negocio mantenga un ecosistema adaptativo."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <SectionWrapper
        title="Presencia Online"
        description="Gana visibilidad en la Web con un dominio própio, nosotros te ayudamos a elegirlo."
        mockupImg={assets.feature}
        reverse
      />
      <div className="px-4 py-2  items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          <footer className=" p-4 flex justify-between items-center">
            <div className="flex flex-col mt-16 space-x-4">
              <span className="bold">Nosotros</span>
              <span className="bold">Contacto</span>
              <span className="bold">Comunidad</span>
            </div>

            <div className="flex flex-col mt-20">
              <span className="bold">Powered by @telescopiens</span>
            </div>
            
            <div className="flex mt-16 items-center">
              <img src={LogoBlack} className="w-20 h-16 mr-2" />
            </div>
          </footer>
        </p>
      </div>
    </>
  );
};

export default Landing;
