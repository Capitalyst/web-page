import React from "react";
import "./Features.scss";
import Bajaj from "../../assets/images/png/bajaj.png";
import Muthoot from "../../assets/images/png/muthoot.png";
import ICICI from "../../assets/images/png/icici.png";
import { Link } from "react-router-dom";

const Features: React.FC = () => {
  return (
    <section id="partners">
      <div className="featured">
        <div className="container">
          <div className="row">
            <div className="left">
              <h4>Our Partners</h4>
            </div>
            <div className="right">
              <Link to={"/"} className="first-link">
                <div className="box">
                  <img
                    src={Bajaj}
                    alt="bajaj"
                    width={"137px"}
                    height={"90px"}
                  />
                </div>
              </Link>
              <Link to={"/"} className="first-link">
                <div className="box">
                  <img
                    src={Muthoot}
                    alt="muthoot"
                    width={"160px"}
                    height={"80px"}
                  />
                </div>
              </Link>
              <Link to={"/"} className="first-link">
                <div className="box">
                  <img
                    src={ICICI}
                    alt="icici"
                    width={"156px"}
                    height={"50px"}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
