import React, { useState } from 'react';

// 只支持英文字符，似乎不支持中文字符
const DynamicInputWidth = () => {
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  
  const inputStyle = {
    width: `${inputValue.length + 1}ch`, // 每个字符大约占用 1ch
    padding: '5px',
    fontSize: '16px',
    maxWidth: '240px'
  };
  
  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      style={inputStyle}
      placeholder="Type something..."
    />
  );
};

export default DynamicInputWidth;
