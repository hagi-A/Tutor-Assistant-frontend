import React, { useState } from "react";
import Hero from "./hero/Hero";
import AboutCard from "../pages/about/AboutCard";
import ContactUs from "../common/footer/ContactUs";
import Price from "../pages/pricing/PriceCard";
import Footer from "../common/footer/footer";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="flex flex-col items-center  min-h-screen mt-96">
        {/* Add appropriate margin to space them out */}
        <div className="mt-96 bg-cyan-800">
          <AboutCard />
        </div>

        <div className="mt-9">{/* <Price /> */}</div>
      </div>
      <div className="flex flex-col h-screen">
        <div className="flex-1">
          <ContactUs />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
