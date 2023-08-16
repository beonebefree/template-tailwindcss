import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';
import Testimonials from './Testimonial';

const Contact = () => {
    return (
        <div className={`${styles.section} ${styles.bgWhite}`}>
            <div className={`${styles.subSection} flex-col text-center`}>
                <div>
                    
                    <h1 className={`${styles.h1Text} ${styles.blackText}`}>Contactá con el equipo de ventas</h1>
                    <p className={`${styles.pText} ${styles.blackText}`}>Es fácil, planificamos el desarrollo de tu página. Pagas cuando te entregamos el producto terminado.</p>
                </div>
                <button className={styles.btnPrimary}>Contacto</button>
                <div className={styles.flexCenter}>
                    <img
                        src={assets.scene}
                        alt="download_png"
                        className={styles.fullImg}
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact