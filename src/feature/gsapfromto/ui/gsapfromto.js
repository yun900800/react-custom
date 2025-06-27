import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './gsapfromto.module.css';
const GsapTo = ()=> {
    useGSAP(()=> {
        gsap.fromTo(`.${styles['green-box']}`, {
            x: 0,
            rotation: 0,
            borderRadius: "0%"
        }, {
            duration: 1,
            repeat: -1,
            yoyo: true,
            x: 150,
            rotation: 360,
            borderRadius: "100%",
            ease: "bounce.out",
        });
    },[]);

  return (
    <main className="gsapfromto">
            <h1>GSAP fromTo</h1>
            <p>GSAP fromTo is a feature that allows you to animate elements using GSAP.</p>
            <p>It is a powerful tool for creating animations in web applications.</p>
            <div className={styles['green-box']}></div>
    </main>
    
  );
}
export default GsapTo;