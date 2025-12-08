import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard.jsx";
import "../css/product.css";

const PList = ({ products }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      

      <div className="product-container">
        {products.length === 0 ? (
          <h2 style={{ textAlign: "center", width: "100%" }}>No products found</h2>
        ) : (
          products.map((item) => (
            <ProductCard key={item.id} product={item} onClick={handleClick} />
          ))
        )}
      </div>
    </>
  );
};

export default PList
