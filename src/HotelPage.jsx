import React from "react";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Category from "./components/category/Category.jsx";
import Newsletter from "./components/newsletter/Newsletter.jsx";
import Rooms from "./components/Rooms/Rooms.jsx";
import Room from "./components/Rooms/Room.jsx";
// import { Elements } from "react-stripe-elements";

const HotelPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Room />
      <Rooms />
      <Newsletter />
      <Footer />
    </>
  );
};

export default HotelPage;
