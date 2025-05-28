import React from 'react';
import Card from './Card'; // 导入通用的Card组件

function ArticleCardRefactored({ title, content, onReadMore }) {
  return (
    <Card
      title={title}
      // children prop 接收文章内容
      children={
        <p>{content.substring(0, 100)}...</p>
      }
      // footer prop 接收“Read More”按钮
      footer={onReadMore && <button onClick={onReadMore}>Read More</button>}
    />
  );
}

export default ArticleCardRefactored;