import React, { useState } from 'react';

const DynamicCard = () => {
  const [content, setContent] = useState('');
  
  const handleChange = (event) => {
    setContent(event.target.value);
  };
  
  const cardStyle = {
    width: '300px',
    height: `${content.split('\n').length * 20 + 100}px`, // 每行20px，高度动态调整
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f4f4f4',
    overflow: 'auto',
    transition: 'height 0.3s ease',
  };

  return (
    <div style={cardStyle}>
      <textarea
        value={content}
        onChange={handleChange}
        placeholder="Type here to resize the card..."
        style={{ width: '100%', height: '100px' }}
      />
    </div>
  );
};

export default DynamicCard;
