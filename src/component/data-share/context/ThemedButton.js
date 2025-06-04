import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedButton() {
  const theme = useContext(ThemeContext); // 使用 useContext hook

  return (
    <button style={{ background: theme === 'light' ? 'lightblue' : 'darkblue', color: 'white' }}>
      I am a {theme} themed button
    </button>
  );
}

export default ThemedButton;