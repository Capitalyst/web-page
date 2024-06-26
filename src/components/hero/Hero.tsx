import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import Investify from "/assets/images/png/investify.png";
import Rent from "/assets/images/png/rent.png";
import BoxBG from "/assets/images/png/rex-bg.png";
import Woman from "/assets/images/png/lady.png";
import Cross from "/assets/images/svg/cross.svg";
import Circle from "/assets/images/svg/circle.svg";
import Dot from "/assets/images/svg/dot.svg";
import Apple from "/assets/images/svg/apple.svg";
import Google from "/assets/images/svg/google.svg";

const Hero: React.FC = () => {
  return (
    <div className="invest">
      <div className="container">
        <div className="row">
          <div className="left">
            <div className="text">
              <h1>Revolutionizing Personal Finances.</h1>
              <p>
                The all in one ultimate solution for all your financial activity. Track, invest, budget, set goals and much more!
              </p>
            </div>
            <div className="box">
              <div className="download">
                <Link to={"/"} className="btn-download">
                  <img
                    src={Apple}
                    alt="download-apple"
                    width="18"
                    height="22"
                  />{" "}
                  Get on iPhone
                </Link>
                <Link to={"/"} className="btn-download">
                  <img
                    src={Google}
                    alt="download-android"
                    width="24"
                    height="24"
                  />{" "}
                  Get on Android
                </Link>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="box">
              <img src={BoxBG} alt="rectangle" className="rectangle" />
              <img src={Woman} alt="woman" className="womanpic" />
              <img src={Rent} alt="rent-logo" className="rent" />
              <img src={Investify} alt="investify" className="investify" />
              <img src={Circle} alt="circle" className="circle" />
              <img src={Cross} alt="cross" className="cross" />
              <img src={Dot} alt="dot" className="dot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
