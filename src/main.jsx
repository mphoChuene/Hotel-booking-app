import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./components/Hero/Hero.jsx";
import Rooms from "./components/Rooms/Rooms.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import AdminPage from "./components/Admin/AdminPage.jsx";
import Category from "./components/category/Category.jsx";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*   <Navbar />
    <Hero />
    <Category />
    <Rooms />
    <Footer /> */}
    <AdminPage />
  </React.StrictMode>
);
