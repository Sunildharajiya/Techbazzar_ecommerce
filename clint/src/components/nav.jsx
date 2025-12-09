import { useState } from "react";
import "../css/nav.css";
import Banner from "./banner.jsx";
import logo from "../assets/logo.png";
import searchicon from "../assets/search.png";
import menuicon from "../assets/menu.png";

const Nav = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [bannerOn, setBannerOn] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    const value = e.target.value;

    if (value.trim() !== "") {
      setBannerOn(false);   // hide banner when typing
    } else {
      setBannerOn(true);    // show banner if search is empty
    }

    setQuery(value);
    onSearch(value);
  };

  return (
    <>
      <nav>
        <img src={logo} alt="techbazzar" id="logo" />
        <span id="wotermark">
          <b>
            <i>TECHBAZZAR</i>
          </b>
        </span>

        <form id="searchform" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="search"
            id="searchinput"
            placeholder="Search..."
            value={query}
            onChange={handleSearch}
          />
          <img src={searchicon} alt="search" id="searchicon" />
        </form>
       <a href="/cart" id="carticon"><img src={carticon} alt="" /></a>
        <button id="menu" onClick={toggleMenu}>
          <img src={menuicon} alt="menu" id="menuicon" />
        </button>
      </nav>

      {/* how banner only if bannerOn is true */}
      {bannerOn && <Banner />}

      {/* Slide Menu */}
      <div className={`slide-menu ${isMenuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>✕</button>
        <ul>
          <li><a href="/orders">Your Orders</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Nav;
