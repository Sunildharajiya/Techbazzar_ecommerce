import React from "react";
import "../css/productCard.css";

const ProductCard = ({ product, onClick }) => {
  const handleClick = () => {
    if (onClick) onClick(product?.id);
  };

  return (
    <div className="techbazzar-card" onClick={handleClick} role="button">
      
      {/* Price Tag */}
      <div className="price-tag">
        {product?.price ? `₹${product.price}` : "₹0"}
      </div>

      {/* Image */}
      <div className="product-image-wrap">
        <img
          src={product?.image || "/placeholder.png"}
          alt={product?.name || "Product Image"}
          className="product-image"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="product-content">
        <h3 className="product-title">{product?.name || "Unnamed Product"}</h3>

        <p className="product-desc">
          {product?.desc ||
            "This is a premium quality product available at TechBazzar."}
        </p>

        <div className="rating">★★★★☆</div>
      </div>

      {/* CTA Button */}
      <button
        className="add-btn"
        onClick={(e) => {
          e.stopPropagation(); // Prevent card click
          console.log("Added to Cart:", product?.name);
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;