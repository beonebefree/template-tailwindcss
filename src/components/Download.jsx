import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';
import Testimonials from './Testimonial';

const Download = () => {
    return (
        <div className={`${styles.section} ${styles.bgWhite}`}>
            <div className={`${styles.subSection} flex-col text-center`}>
                <div>
                   <Testimonials/>
                </div>
            </div>
        </div>
    )
}

export default Download