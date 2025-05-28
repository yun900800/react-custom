// components/MyContentComponent.js
import React from 'react';

function MyContentComponent() {
  return (
    <div style={{ padding: '20px', border: '1px solid #007bff', borderRadius: '5px', backgroundColor: '#e6f7ff' }}>
      <h3>Hello from My Content!</h3>
      <p>This component will have a fade-in animation thanks to the HOC.</p>
    </div>
  );
}

export default MyContentComponent;