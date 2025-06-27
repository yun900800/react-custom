import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './gsaptimeline.module.css';
const GsapTimeline = () => {
    const timeline = gsap.timeline({ 
        repeat: -1 ,
        repeatDelay: 1,
        yoyo: true,
    });
    useGSAP(() => {
        timeline
            .to(`.${styles['pink-box']}`, { 
                duration: 2,
                x: 150,
                rotation: 360,
                ease: "back.inOut",
                borderRadius: "100%"
            });
            timeline.to(`.${styles['pink-box']}`, { 
                y: 250, 
                scale: 2, 
                rotation: 360,
                borderRadius: '100%',
                duration: 1,
                ease: "back.inOut"
             });
            timeline.to(`.${styles['pink-box']}`, { 
                scale: 1, 
                x: 250,
                rotation: 360,
                ease: "back.inOut", 
                borderRadius: '8px',
                duration: 2
            });
    }, []);
  return (
    <main  className="gsap-timeline">
      <h1>GSAP timeline</h1>
      <p>GSAP timeline is a feature that allows you to create complex animations using GSAP.</p>
      <p>It is a powerful tool for creating animations in web applications.</p>
      <div>
        <button onClick={() => {
            if (timeline.paused()) {
                timeline.play();
            }  else {
                timeline.pause();   
            }   
        }}
        className='btn btn-primary'
        >Play/Pause</button>
        <div className={styles['pink-box']}></div>
      </div>
    </main>
  );
}
export default GsapTimeline;