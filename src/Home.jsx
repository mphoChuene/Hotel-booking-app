import React from "react";
import Login from "./components/Login/Login";
import HotelPage from "./HotelPage";
import Rooms from "./components/Rooms/Rooms";
import Admin from "./components/Admin/Admin";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hotel" element={<HotelPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </Router>
    </>
  );
};

export default Home;
