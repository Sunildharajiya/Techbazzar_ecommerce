import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./css/App.css";

// Components
import Nav from "./components/nav.jsx";
import PList from "./components/productlist.jsx";
import ProductDetail from "./components/productdetail.jsx";
import Contact from "./components/contact.jsx";
import YourOrders from "./components/yourOrders.jsx";
import Footer from "./components/footer.jsx";

// Product Data
import products from "./data/data.js";

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  // ✅ Search Handler
  const handleSearch = (query) => {
    const result = products.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(result);
  };

  return (
    <Router>
      <main>
        {/* ✅ Search passed correctly */}
        <Nav onSearch={handleSearch} />

        <Routes>
          <Route path="/" element={<PList products={filteredProducts} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orders" element={<YourOrders />} />
        </Routes>
      </main>

      {/* ✅ Footer always at bottom */}
      <Footer />
    </Router>
  );
};

export default App;

