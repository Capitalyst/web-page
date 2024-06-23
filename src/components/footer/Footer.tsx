import React from "react";
import "./Footer.scss";
import logo from "/assets/images/png/logo.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="image-container">
            <img src={logo} alt="PiggyVest Logo" />
          </div>
          <div className="works">
            <p>Products</p>
            <Link to={"/"}>WiseVault</Link>
            <Link to={"/"}>Invest</Link>
            <Link to={"/"}>Target Savings</Link>
          </div>
          <div className="works">
            <p>Company</p>
            <Link to={"/"}>About</Link>
            <Link to={"/"}>Blog</Link>
          </div>
          <div className="works legal">
            <p>Legal</p>
            <Link to={"/"}>Terms</Link>
            <Link to={"/"}>Privacy</Link>
            <Link to={"/"}>Security</Link>
          </div>
          <div className="connect">
            <div className="socials">
              <ul>
                <li>
                  <Link to="/">
                    <i className="fa-brands fa-square-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa-brands fa-square-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa-brands fa-square-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <Link to={"/"}>amexcapitalysts@gmail.com</Link>
          </div>
        </div>
        <div className="about">
          <p>
          WiseVault provides a comprehensive approach to money management through its user-friendly features such as portfolio management, expense tracking, and future planning.
          </p>
          <p className="primary">
            2024 WiseVault All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
