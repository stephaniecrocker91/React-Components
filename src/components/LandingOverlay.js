import { React, useState, useEffect } from 'react';
import styles from '../styles/LandingOverlay.module.css'
import FlashingText from './FlashingText'
import hero from '../images/hero.png'


function LandingOverlay() {
    return (
        <>  
        <div className={styles.Hero}>
            <div className={styles.overlay}></div>
            <img src={hero} alt='Hero with lashes' />
            
            <div className={styles.Content}>
                <div>
                <FlashingText/>
                </div>            
            </div>
        </div>
        </>
    );
}

export default LandingOverlay;
