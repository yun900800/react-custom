import React, { useState, useEffect } from 'react';

const ResponsiveLayout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const layoutStyle = {
    display: 'flex',
    flexDirection: windowWidth < 600 ? 'column' : 'row', // 小于600px时垂直布局
    gap: '10px',
  };

  return (
    <div style={layoutStyle}>
      <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>Item 1</div>
      <div style={{ backgroundColor: 'lightgreen', padding: '20px' }}>Item 2</div>
      <div style={{ backgroundColor: 'lightcoral', padding: '20px' }}>Item 3</div>
    </div>
  );
};

export default ResponsiveLayout;
