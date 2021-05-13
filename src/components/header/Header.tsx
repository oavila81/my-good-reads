import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header--content">
        <h1>My Good Reads</h1>

        <div className="header-wishlist-btn">
          <label htmlFor="wishlist-btn">
            <div className="hamburger hamburger1">
              <span className="bar bar1"></span>
              <span className="bar bar2"></span>
              <span className="bar bar3"></span>
              <span className="bar bar4"></span>
            </div>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
