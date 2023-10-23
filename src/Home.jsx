import React from "react";
import Login from "./components/Login/Login";
import HotelPage from "./HotelPage";
import Rooms from "./components/Rooms/Rooms";
// import RoomDetails from "./components/category/RoomDetails";
import Admin from "./components/Admin/Admin";
import ForgotPassword from "./components/ForgotPassword";
import Register from "./components/Register/Register";
import AddUnit from "./components/Admin/pages/addUnit";
import UpdatePage from "./components/Admin/pages/UpdatePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewRooms from "./components/Rooms/ViewRoom";

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
          {/* <Route path="/room-details/:roomName" element={<RoomDetails />} /> */}
          <Route path="/viewroom/:unitId" element={<ViewRooms />} />
          <Route path="/updateunit/:id" element={<UpdatePage />} />
          <Route path="/addunit" element={<AddUnit />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
};

export default Home;
