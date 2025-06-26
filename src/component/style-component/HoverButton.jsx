import React, { useState } from 'react';

const HoverButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const buttonStyle = {
    backgroundColor: isClicked ? 'red' : isHovered ? 'blue' : 'green',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    minWidth: '200px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {isClicked ? 'Clicked' : 'Hover or Click me'}
    </button>
  );
};

export default HoverButton;
