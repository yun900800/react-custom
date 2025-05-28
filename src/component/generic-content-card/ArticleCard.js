import React from 'react';

function ArticleCard({ title, content, onReadMore }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h2>{title}</h2>
      <p>{content.substring(0, 100)}...</p> {/* 截断内容 */}
      {onReadMore && <button onClick={onReadMore}>Read More</button>}
    </div>
  );
}

export default ArticleCard;