import React from 'react';
import MouseTracker from './MouseTracker';
function MouseTrackerApp() {
  return (
    <div style={{ maxWidth: '800px', margin: '20px auto' }}>
      {/* ... Previous Panel and TwoColumnLayout examples ... */}

      <h2>Render Props (Children as Function) Example: Mouse Tracker</h2>
      <div style={{ border: '1px dashed blue', padding: '50px', minHeight: '150px', textAlign: 'center' }}>
        Move your mouse over this area!
        <MouseTracker>
          {/* children prop 是一个函数，接收 mousePosition 作为参数 */}
          {({ x, y }) => (
            <p>
              Mouse position: X: {x}, Y: {y}
            </p>
          )}
        </MouseTracker>
      </div>

      <br />

      <div style={{ border: '1px dashed green', padding: '50px', minHeight: '150px', textAlign: 'center' }}>
        And here is another way to display it:
        <MouseTracker>
          {({ x, y }) => (
            <div>
              <p>Current coordinates:</p>
              <h3 style={{ color: 'green' }}>({x}, {y})</h3>
            </div>
          )}
        </MouseTracker>
      </div>
    </div>
  );
}

export default MouseTrackerApp;