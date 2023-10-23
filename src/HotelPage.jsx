import React from "react";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Category from "./components/category/Category.jsx";
// import { Elements } from "react-stripe-elements";


const HotelPage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Category />
    <Footer />
    </>
  );
};

export default HotelPage;
