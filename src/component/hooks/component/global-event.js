import React, {useState,useEffect} from "react";  
export default function GlobalEvent() {   
    const [position, setPosition] =useState({ x: 0, y: 0 });
    useEffect(() => {
        function handleMove(e) {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);
    return (
        <div
            style={{
                position: "absolute",
                backgroundColor: 'green',
                borderRadius: '50%',
                opacity: 0.6,
                pointerEvents: 'none',
                transform: `translate(${position.x}px, ${position.y}px)`,
                left: -20,
                top: -20,
                width: 60,
                height: 60,
            }}>
        </div>
    );
}