import React from 'react';

function ProductCard({ image, title, oldPrice, newPrice }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <div className="product-prices">
        {oldPrice && <span className="old-price">{oldPrice} ₴</span>}
        <span className="new-price">{newPrice} ₴</span>
      </div>
    </div>
  );
}

export default ProductCard;
