import React from "react";
import style from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.button}>
        <button className="btn btn-light">Book</button>
      </div>
    </div>
  );
};

export default Hero;
