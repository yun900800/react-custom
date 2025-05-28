// App.js (在应用程序中使用动画组件)
import React, { useState } from 'react';
import AnimatedContent from './AnimatedContent';

function AnotherComponent() {
  return (
    <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f0f0f0' }}>
      <h3>Another regular component</h3>
      <p>This one does not have the fade-in animation.</p>
    </div>
  );
}


function HocApp() {
  const [showAnimatedContent, setShowAnimatedContent] = useState(true);

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>HOC Animation Example</h1>
      <button onClick={() => setShowAnimatedContent(!showAnimatedContent)}>
        Toggle Animated Content
      </button>

      {showAnimatedContent && <AnimatedContent />}
      <AnotherComponent />
    </div>
  );
}

export default HocApp;