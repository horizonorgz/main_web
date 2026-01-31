import React from "react";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
    <Navbar/>
      <Hero />
      <Services />
      <Footer/>
    </>
  );
};

export default Home;
