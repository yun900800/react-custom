import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './gsapto.module.css';
const GsapTo = ()=> {
    useGSAP(()=> {
        gsap.to(`.${styles['blue-box']}`, {
            duration: 1,
            x: 150,
            repeat: -1,
            rotation: 360,
            yoyo: true,
            ease: "elastic",
        });
    },[]);

  return (
    <main className="gsapto">
            <h1>GSAP to</h1>
            <p>GSAP to is a feature that allows you to animate elements using GSAP.</p>
            <p>It is a powerful tool for creating animations in web applications.</p>
            <div className={styles['blue-box']}></div>
    </main>
    
  );
}
export default GsapTo;