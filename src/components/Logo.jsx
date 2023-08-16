import React, { useEffect, useState } from 'react'
import LogoBlack from '../assets/logoblackbefree.png'



const Logo = ({ }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const position = window.pageYOffset;
            if (position < 1200) { // define la posición en la que el botón aparecerá
                setShow(true);
            } else {
                setShow(false);
            }
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {show && (

                <div className='fixed top-2 w-20 left-4'>
                    <img src={LogoBlack}></img>
                </div>
            )}
        </>
    )

}

export default Logo