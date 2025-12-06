import React from "react";
import "../css/product.css";


const ProductCard = ({ product, onClick }) => {
  return (
    <div className="techbazzar-card" onClick={() => onClick(product.id)}>
      <div className="price-tag">{product.price}</div>

      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">
          {product.desc || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </p>
        <div className="rating">★★★★☆</div>
      </div>

      <button className="add-btn">ADD TO CART</button>
    </div>
  );
};

export default ProductCard;