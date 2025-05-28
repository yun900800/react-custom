// components/MouseTracker.js
import React, { useState, useEffect } from 'react';

function MouseTracker({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 核心：调用 children prop，并传入 mousePosition
  if (typeof children === 'function') {
    return children(mousePosition); // 将鼠标位置作为参数传递给 children 函数
  }

  // Fallback for non-function children
  return null;
}

export default MouseTracker;