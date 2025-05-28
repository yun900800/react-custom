import React from 'react';
import Card from './Card'; // 导入通用的Card组件

function ProductCardRefactored({ name, description, price, onAddToCart }) {
  return (
    <Card
      title={name} // 商品名称作为标题
      // children prop 接收商品描述和价格
      children={
        <>
          <p>{description.substring(0, 80)}...</p>
          <p><strong>Price: ${price}</strong></p>
        </>
      }
      // footer prop 接收“Add to Cart”按钮
      footer={onAddToCart && <button onClick={onAddToCart}>Add to Cart</button>}
      style={{ borderColor: '#c2c' }} // 允许定制一些样式
    />
  );
}

export default ProductCardRefactored;