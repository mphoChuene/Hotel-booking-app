import React from "react";
import ReactDOM from "react-dom/client";
/* import Login from "./components/Login/Login.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Find from "./components/Find/FInd.jsx";
import Navbar from "./components/Navbar/Navbar.jsx"; */
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Navbar />
    <Hero />
    <Find /> */}
    <Login />
    <Register />
  </React.StrictMode>
);
