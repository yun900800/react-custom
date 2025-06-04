import React from 'react';
import PropTypes from 'prop-types';

// 1. Create a Context object
const ThemeContext = React.createContext();

// 2. Define the ThemeProvider component
class ThemeProvider extends React.Component {
  // Define child context types (for legacy context API, though often not needed with new Context API)
  // For modern React, you primarily use the new Context API (ThemeContext.Provider)
  // This part of the original example refers to an older way of using context.
  // For the purpose of explaining `children`, we'll focus on rendering.

  render() {
    const { children, theme } = this.props;

    // We're using the new Context API's Provider component
    // The `value` prop is what will be made available to consumers
    return (
      <ThemeContext.Provider value={theme}>
        {/* Here's where `React.Children.only` comes in handy */}
        {/* We expect our ThemeProvider to wrap a single component or element */}
        {React.Children.only(children)}
      </ThemeContext.Provider>
    );
  }
}

// Define prop types for clarity and validation
ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired, // Expecting exactly one React element as children
  theme: PropTypes.object.isRequired,
};

export { ThemeProvider, ThemeContext };