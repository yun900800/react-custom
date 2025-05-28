// components/TwoColumnLayout.js
import React from 'react';

function TwoColumnLayout({ left, right, children, header, footer }) {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  const mainContentStyle = {
    display: 'flex',
    flex: 1, // 让主内容区域占据剩余空间
  };

  const columnStyle = {
    padding: '20px',
  };

  const leftColumnStyle = {
    ...columnStyle,
    flex: '1', // 左列占据一份空间
    borderRight: '1px solid #eee',
  };

  const rightColumnStyle = {
    ...columnStyle,
    flex: '2', // 右列占据两份空间
  };

  const headerFooterStyle = {
    padding: '15px 20px',
    backgroundColor: 'var(--color-crab-shell-green)',
    borderTop: '1px solid var(--color-duck-egg-blue)',
    borderBottom: '1px solid var(--color-duck-egg-blue)',
    textAlign: 'center',
  };

  return (
    <div style={layoutStyle}>
      {header && <header style={headerFooterStyle}>{header}</header>}

      <main style={mainContentStyle}>
        <div style={leftColumnStyle}>{left}</div> {/* 命名 prop for left column */}
        <div style={rightColumnStyle}>
          {children} {/* children prop for the main content in the right column */}
        </div>
      </main>

      {footer && <footer style={headerFooterStyle}>{footer}</footer>}
    </div>
  );
}

export default TwoColumnLayout;