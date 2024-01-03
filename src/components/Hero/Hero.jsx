import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Hero.module.css";

const Hero = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.form} style={{ justifyContent: "center" }}>
        <div className={styles.text} style={{ letterSpacing: "5px",fontSize:'25px'}}>
          <label className={styles.label} style={{ textAlign: "center" }}>
            Welcome to Paradise Lodge
          </label>
        </div>
        <div className={styles.until}></div>
      </div>
    </div>
  );
};

export default Hero;
