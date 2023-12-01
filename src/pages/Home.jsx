import React from "react";
import WelcomeNavbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Step from "../components/Steps/Steps";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <WelcomeNavbar />
      <Hero />
      <Step />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
