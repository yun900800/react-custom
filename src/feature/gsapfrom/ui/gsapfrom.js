import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './gsapfrom.module.css';
const GsapFrom = () => {
  useGSAP(()=> {
        gsap.from(`.${styles['yellow-box']}`, {
            duration: 1,
            x: 150,
            repeat: -1,
            rotation: 360,
            yoyo: true,
            ease: "power1.inOut",
        });
    },[]);

  return (
    <main className="gsapfrom">
            <h1>GSAP from</h1>
            <p>GSAP from is a feature that allows you to animate elements using GSAP.</p>
            <p>It is a powerful tool for creating animations in web applications.</p>
            <div className={styles['yellow-box']}></div>
    </main>
    
  );
}

export default GsapFrom;