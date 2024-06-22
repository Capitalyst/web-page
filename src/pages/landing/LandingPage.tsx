import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Security from "../../components/security/Security";
import SavingsList from "../../components/savingsList/SavingsList";
import Investment from "../../components/accessInvestment/Investment";
import Customers from "../../components/customers/Customers";
import Featured from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import Second from "../../components/abt/Second";
import Third from "../../components/abt/Third";
import First from "../../components/abt/First";

const Landingpage: React.FC = () => {
  return (
    <div className="landing">
      <Header />
      <Hero />
      <First />
      <SavingsList />
      <Second />
      <Investment />
      <Third />
      <Security />
      <Customers />
      <Featured />
      <Footer />
    </div>
  );
};

export default Landingpage;
