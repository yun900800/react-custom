import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import Toolbar from './Toolbar';

function ThemeContextApp() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff', padding: '20px' }}>
        <h1>App Component</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeContextApp;