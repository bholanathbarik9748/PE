import React from "react";
import WelcomeNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContractUsComponents from '../components/ContractUs/ContractUs';

const ContractUs = () => {
  return (
    <>
      <WelcomeNavbar />
      <ContractUsComponents />
      <Footer />
    </>
  );
};

export default ContractUs;
