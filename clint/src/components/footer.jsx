// ===============================
// Footer — TECHBAZZAR
// Author: Sunil Dharajiya
// ===============================

import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section">
          <h2 className="footer-logo">TechBazzar</h2>
          <p>
            Your one-stop shop for the latest gadgets, electronics, and tech
            accessories — built with quality and innovation.
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        {/* Support Section */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TechBazzar. All Rights Reserved.</p>
        <p>Made with by <span>Sunil Dharajiya</span></p>
      </div>
    </footer>
  );
};

export default Footer;

