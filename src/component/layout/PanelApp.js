// Usage in App.js
import React from 'react';
import Panel from './Panel';

function PanelApp() {
  return (
    <div style={{ maxWidth: '800px', margin: '20px auto' }}>
      <h1>Children Prop Examples</h1>

      <Panel title="Welcome to Our App">
        <p>This is some introductory content for our application.</p>
        <p>It's wrapped inside a generic panel component.</p>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
        </ul>
      </Panel>

      <Panel title="About Us" footer="&copy; 2023 My Company">
        <p>We are a company dedicated to providing high-quality solutions.</p>
        <p>Feel free to reach out to us!</p>
      </Panel>
    </div>
  );
}

export default PanelApp;