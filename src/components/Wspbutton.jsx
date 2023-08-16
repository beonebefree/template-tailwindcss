import { useState, useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(fab, faWhatsapp);

function WhatsAppButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset;
      if (position > 500) { // define la posición en la que el botón aparecerá
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <a
          href="/form" // cambia "NUMERO-DE-TELEFONO" por el número de teléfono que corresponda
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50"
        >
          <button className="bg-green-400 hover:bg-green-600 text-black p-4 rounded-full text-2xl ">
          <FontAwesomeIcon icon={faWhatsapp} beatFade />
          </button>
        </a>
      )}
    </div>
  );
}

export default WhatsAppButton;
