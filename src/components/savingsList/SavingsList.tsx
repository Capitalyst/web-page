import React from "react";
import "./SavingsList.scss";

import Image1 from "../../assets/images/png/image1.png";
import Image2 from "../../assets/images/png/image2.png";
import Image3 from "../../assets/images/png/image3.png";
import Image4 from "../../assets/images/png/image4.png";
import Svg1 from "../../assets/images/svg/forwardarrow1.svg";
import Svg2 from "../../assets/images/svg/forwardarrow2.svg";
import Svg3 from "../../assets/images/svg/forwardarrow3.svg";
import Svg4 from "../../assets/images/svg/forwardarrow4.svg";
import SavingType from "../generics/savingType/SavingType";

const SavingsList: React.FC = () => {
  return (
    <section id="features">
      <div className="savings">
        <div className="container">
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="left">
              <div className="content">
                <h3>Features</h3>
                <p>Four in One!</p>
              </div>
            </div>

            <div className="right">
              <SavingType
                ImageName={Image1}
                Header={"Budgeting Milestones"}
                Content={
                  "Set, track, and achieve your budgeting goals effortlessly with WiseVault. Our intuitive tools help you manage your finances, ensuring you stay on track and reach your financial objectives."
                }
                SvgName={Svg1}
                BankType={""}
              />
              <SavingType
                ImageName={Image2}
                Header={"Financial Learning"}
                Content={
                  "Enhance your financial literacy with our comprehensive learning resources. WiseVault offers a wealth of educational content, from articles to interactive courses, empowering you to make informed financial decisions."
                }
                SvgName={Svg2}
                BankType={""}
              />
              <SavingType
                ImageName={Image3}
                Header={"Portfolio Management"}
                Content={
                  "Easily manage your investments with our robust portfolio management tools. Monitor your asset performance, analyze trends, and make data-driven decisions to optimize your investment strategy."
                }
                SvgName={Svg3}
                BankType={""}
              />
              <SavingType
                ImageName={Image4}
                Header={"AI-Powered Insights"}
                Content={
                  "Experience the future of financial planning with WiseVault's advanced AI technology. Our AI-driven insights provide personalized recommendations, helping you maximize your savings, investments, and overall financial health."
                }
                SvgName={Svg4}
                BankType={""}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsList;
