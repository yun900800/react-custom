import React from 'react';

function ProductCard({ name, description, price, onAddToCart }) {
  return (
    <div style={{ border: '1px solid #c2c', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h3>{name}</h3>
      <p>{description.substring(0, 80)}...</p>
      <p>Price: ${price}</p>
      {onAddToCart && <button onClick={onAddToCart}>Add to Cart</button>}
    </div>
  );
}

export default ProductCard;