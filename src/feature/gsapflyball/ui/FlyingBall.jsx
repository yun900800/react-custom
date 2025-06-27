// FlyingBall.jsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export default function FlyingBall() {
  const ballRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    gsap.to(ballRef.current, {
      duration: 5,
      repeat: -1,
      ease: "power1.inOut",
      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        alignOrigin: [0.5, 0.5],
        autoRotate: true
      }
    });
    gsap.to(".box", {
        duration: 2,
        repeat: -1,
        motionPath: {
            path: [
            { x: 0, y: 0 },
            { x: 100, y: -100 },
            { x: 200, y: 0 },
            { x: 300, y: 100 }
            ],
            autoRotate: true
        }
    });
    }, []);

  return (
    <div style={{ width: "100%", height: "400px", position: "relative" }}>
      <svg width="100%" height="400">
        {/* 爱心轨迹路径 */}
        <path
          ref={pathRef}
          d="M300,200
             C300,100 500,100 500,200
             C500,300 300,400 300,400
             C300,400 100,300 100,200
             C100,100 300,100 300,200Z"
          fill="none"
          stroke="#ddd"
          strokeWidth="3"
        />
      </svg>

      {/* 飞行小球 */}
      <div
        ref={ballRef}
        style={{
          width: 30,
          height: 30,
          backgroundColor: "hotpink",
          borderRadius: "50%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      <div 
        className="box"
        style={{
          width: 30,
          height: 30,
          backgroundColor: "hotpink",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div>
    </div>
  );
}
