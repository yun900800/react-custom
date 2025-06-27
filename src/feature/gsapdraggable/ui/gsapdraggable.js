import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Draggable } from "gsap/Draggable";
import styles from './gsapdraggable.module.css';
gsap.registerPlugin(Draggable);
const GsapDraggable = () => {
    const boxRef = useRef(null);
    useEffect(() => {
        if (!boxRef.current) return;

        Draggable.create(boxRef.current, {
            type: "x,y",
            bounds: window,
            inertia: true,
            edgeResistance: 0.65,
            onPress() {
                gsap.to(this.target, { scale: 1.1 });
                this.target.style.cursor = "grabbing";
            },
            onRelease() {
                gsap.to(this.target, { scale: 1 });
                this.target.style.cursor = "grab";
            },
            onDrag() {
                console.log("🚀 拖动中：", this.x, this.y);
            }
        });

        return () => {
            // 清理插件实例，防止内存泄漏
            Draggable.get(boxRef.current)?.kill();
        };
    }, []);

  return (
    <main className="gsap-draggable">
            <h1>GSAP draggable</h1>
            <p>GSAP draggable is a feature that allows you to animate elements using GSAP.</p>
            <p>It is a powerful tool for creating animations in web applications.</p>
            <div 
            ref={boxRef} 
            className={styles['draggable-box']}
            >🧱</div>
    </main>
    
  );
}

export default GsapDraggable;