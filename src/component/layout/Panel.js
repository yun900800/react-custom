// components/Panel.js
import React from 'react';

function Panel({ title, children, footer }) {
  const panelStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    margin: '15px 0',
    backgroundColor: 'var(--color-gray-blue)',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  };

  const headerStyle = {
    borderBottom: '1px solid #eee',
    paddingBottom: '10px',
    marginBottom: '15px',
    color: '#333',
  };

  const footerStyle = {
    borderTop: '1px solid #eee',
    paddingTop: '10px',
    marginTop: '15px',
    textAlign: 'right',
    fontSize: '0.9em',
    color: '#666',
  };

  return (
    <div style={panelStyle}>
      {title && <h2 style={headerStyle}>{title}</h2>}
      <div className="panel-content">
        {children} {/* 核心：渲染作为 children 传递进来的所有内容 */}
      </div>
      {footer && <div style={footerStyle}>{footer}</div>}
    </div>
  );
}

export default Panel;