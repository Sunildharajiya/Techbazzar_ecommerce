import { useParams } from "react-router-dom";
import products from "../data/data";
import "../css/productDetails.css";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  const [mainImage, setMainImage] = useState(
    product?.images?.[0] || product?.image
  );

  // ✅ Review State
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  // ✅ Add Review Function
  const submitReview = (e) => {
    e.preventDefault();
    if (!newReview || rating === 0) return;

    const reviewObj = {
      text: newReview,
      stars: rating,
      date: new Date().toLocaleString(),
    };

    setReviews([reviewObj, ...reviews]);
    setNewReview("");
    setRating(0);
  };

  return (
    <div className="product-detail-page">
      {/* ============= LEFT IMAGE SECTION ============= */}
      <div className="image-section">
        <img src={mainImage} alt={product.name} className="main-image" />
        <div className="sub-images">
          {product.images &&
            product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`sub-${index}`}
                className={`sub-image ${mainImage === img ? "active" : ""}`}
                onClick={() => setMainImage(img)}
              />
            ))}
        </div>
            {/* ==============================================================
                    ✅ SHOW REVIEWS BELOW FORM
        ============================================================== */}
        <h2 className="review-title">Customer Reviews</h2>

        <div className="reviews-list">
          {reviews.length === 0 ? (
            <p>No reviews yet. Be the first to review!</p>
          ) : (
            reviews.map((rev, index) => (
              <div key={index} className="review-card">
                <div className="review-stars">
                  {"★".repeat(rev.stars)}{" "}
                  <span className="gray">{"★".repeat(5 - rev.stars)}</span>
                </div>
                <p className="review-text">{rev.text}</p>
                <small className="review-date">{rev.date}</small>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ============= RIGHT DETAILS SECTION ============= */}
      <div className="details-section">
        <h1 className="title">{product.name}</h1>

        <div className="rating-review">
          <span className="stars">★★★★☆</span>
          <span className="reviews">(48 reviews)</span>
        </div>

        <p className="price">{product.price}</p>
        <p className="offer">Inclusive of all taxes</p>

        <button className="buy-btn">Buy Now</button>
        <button className="cart-btn">Add to Cart</button>

        <h3>Specifications</h3>
        <ul className="spec-list">
          {product.specs?.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>

        <h3>About this item</h3>
        <p className="long-desc">{product.longDesc}</p>

        {/* ==============================================================
                    ✅ REVIEW FORM SECTION
        ============================================================== */}
        <h2 className="review-title">Write a Review</h2>

        <form className="review-form" onSubmit={submitReview}>
          {/* ✅ Star Rating Input */}
          <div className="star-input">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`rating-star ${rating >= star ? "active" : ""}`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>

          {/* ✅ User Text Review */}
          <textarea
            className="review-textarea"
            placeholder="Write your review..."
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          ></textarea>

          <button type="submit" className="submit-review-btn">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
