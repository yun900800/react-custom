import React, {useState} from 'react';
const MouseTracker = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = e => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ height: '100vh' }}>
      {children(position)}
    </div>
  );
};
export default MouseTracker;
