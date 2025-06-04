import React from 'react';
import { ThemeContext } from './ThemeContext'; // Importing styled-components ThemeProvider
// 3. Define a hook to consume the context
const useTheme = () => React.useContext(ThemeContext);

// --- How to use it ---

// A component that will consume the theme
function MyStyledComponent() {
  const theme = useTheme();
  return (
    <div style={{ backgroundColor: theme.primaryColor, color: theme.textColor, padding: '20px' }}>
      This component uses the theme! Primary Color: {theme.primaryColor}, Text Color: {theme.textColor}
    </div>
  );
}
export default MyStyledComponent;