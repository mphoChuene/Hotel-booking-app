import React from "react";
import Hero from "./components/Hero/Hero.jsx";
import Rooms from "./components/Rooms/Rooms.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Category from "./components/category/Category.jsx";
import AddedRooms from "./components/Admin/AddedRooms.jsx";

const HotelPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      {/* <AddedRooms/> */}
      {/* <Rooms /> */}
      <Footer />
    </>
  );
};

export default HotelPage;
