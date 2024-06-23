import React from "react";
import "./Security.scss";
import Shield from "/assets/images/png/shield.png";

const Security: React.FC = () => {
  return (
    <section id="security">
      <div className="security" style={{ maxWidth: "false" }}>
        <div className="container">
          <div className="row">
            <div className="left">
              <img src={Shield} alt="security-icon" />
            </div>

            <div className="right">
              <h4>Your security is our priority</h4>
              <p>
                At WiseVault, we prioritize your financial security. Our app
                employs state-of-the-art encryption and utilizes Google
                Authentication for an added layer of protection. With secure
                login features, including biometric authentication and
                two-factor verification via Google Auth, you can rest assured
                that your investment, budgeting, and expense tracking
                information is protected. Trust WiseVault to keep your financial
                planning safe and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
