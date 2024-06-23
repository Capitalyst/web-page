import React, { useState } from "react";
import "./Header.scss";
import logo from "/assets/images/png/logo.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [responsive, setResponsive] = useState(false);

  const handleClick = () => {
    setResponsive(!responsive);
  };

  return (
    <div className={responsive ? "headerpage active" : "headerpage"}>
      <header className={responsive ? "header active" : "header"}>
        <div className="header-container">
          <img src={logo} alt="Logo" />

          <div
            className={responsive ? "hamburger active" : "hamburger"}
            onClick={handleClick}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>

          <div className="navBtn">
            <ul className="header-link">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#investment">Investment</a>
              </li>

              <li>
                <a href="#security">Security</a>
              </li>
              <li>
                <a href="#customers">Customers</a>
              </li>
              <li>
                <a href="#partners">Our Partners</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
