import React from 'react';

import styles from '../styles/Global';

const Button = ({ assetUrl, link }) => {
    return (
        <div
            className={styles.btnBlack}
            onClick={() => window.open(link, "_blank")}
        >
            <img src={assetUrl} alt="expo_icon" className={styles.btnIcon} />
            <div className="flex flex-col justify-start ml-4">
                <p className={`${styles.btnText} font-bold text-sm`}>Quieres saber más?</p>
                <p className={`${styles.btnText} font-normal text-xs`}>Habla directamente con nosotros!</p>
            </div>
        </div>
    )
}

export default Button