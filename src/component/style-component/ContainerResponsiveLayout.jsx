import React, { useEffect, useRef, useState } from 'react';

const ContainerResponsiveLayout = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!window.ResizeObserver) return;
    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect(); 
  }, []);

  const layoutStyle = {
    display: 'flex',
    flexDirection: containerWidth < 600 ? 'column' : 'row',
    gap: '10px',
  };

  return (
    <div ref={containerRef} style={layoutStyle}>
      <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>Item 1</div>
      <div style={{ backgroundColor: 'lightgreen', padding: '20px' }}>Item 2</div>
      <div style={{ backgroundColor: 'lightcoral', padding: '20px' }}>Item 3</div>
    </div>
  );
};

export default ContainerResponsiveLayout;
