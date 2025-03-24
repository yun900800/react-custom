import React, { useEffect, useRef,useState } from "react";
import {FadeInAnimation} from "./fade-in-animation";

export default function WelcomeAnimation() {
    const ref = useRef(null);
    useEffect(() => {
        const animation = new FadeInAnimation(ref.current);
        animation.start(1000);
        return () => {
            animation.stop();
        };
    }, []);
    return (
        <h1
          ref={ref}
          style={{
            borderRadius: '50%',
            opacity: 0,
            color: 'white',
            padding: 50,
            textAlign: 'center',
            fontSize: 50,
            backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
          }}
        >
          Welcome
        </h1>
      );
}

export function WelcomeAnimationExample() {   
    const [show, setShow] = useState(false);
    return (
      <>
        <button className="" onClick={() => setShow(!show)}>
          {show ? 'Remove' : 'Show'}
        </button>
        <hr />
        {show && <WelcomeAnimation />}
      </>
    );
}