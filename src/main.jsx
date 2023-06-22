import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./components/Hero/Hero.jsx";
import Find from "./components/Find/FInd.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Find />
  </React.StrictMode>
);
