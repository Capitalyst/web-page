import React from "react";
import "./Investment.scss";
import { Link } from "react-router-dom";
import Phone from "/assets/images/png/phone.png";
import Dot from "/assets/images/svg/dotinvest.svg";

const Investment: React.FC = () => {
  return (
    <section id="investment">
      <div className="investment">
        <div className="container">
          <div className="row">
            <div className="left">
              <div className="box">
                <img src={Phone} alt="phone" className="phone" />
              
                <img src={Dot} alt="dot" className="dot" />
              </div>
            </div>
            <div className="right">
              <div className="content">
                <p className="tag">Up To 25% Returns</p>
                <h2>Unlock your investment potential</h2>
                <p className="text">
                  Leverage the power of your financial data to explore
                  investment opportunities tailored to your profile. By inputing
                  your financial details, preferences, and goals, the app
                  analyzes your information to generate personalized investment
                  possibilities. This data-driven approach ensures that you
                  receive recommendations that align with your financial
                  objectives, risk tolerance, and investment strategy. Harness
                  the insights derived from your data to make informed decisions
                  and maximize your investment potential.
                </p>
                <Link to={"/"}>Learn more about Investments {">"}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
