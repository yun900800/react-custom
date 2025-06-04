import React from 'react';
import { ThemeProvider } from './ThemeContext'; // Importing styled-components ThemeProvider
import MyStyledComponent from './MyStyledComponent'; // Importing the styled component
// The main application
function ThemeApp() {
  const myAppTheme = {
    primaryColor: '#007bff',
    textColor: 'white',
    fontSize: '16px'
  };

  return (
    <div>
      <h1>My Application</h1>
      {/* We wrap MyStyledComponent with ThemeProvider */}
      <ThemeProvider theme={myAppTheme}>
        <MyStyledComponent />
      </ThemeProvider>

      {/* Example of what happens if you pass multiple children to ThemeProvider */}
      {/*
      <ThemeProvider theme={myAppTheme}>
        <MyStyledComponent />
        <p>Another element here</p>
      </ThemeProvider>
      */}
      {/* The above would throw an error like:
      Error: React.Children.only expected to receive a single React element child.
      */}
    </div>
  );
}

export default ThemeApp;