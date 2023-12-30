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
      <div className={styles.form}>
        <div className={styles.text}>
          <label className={styles.label}>Check-In Date:</label>
          <DatePicker
            selected={checkInDate}
            onChange={handleCheckInChange}
            selectsStart
            startDate={checkInDate}
            endDate={checkOutDate}
            className={styles.datePicker}
          />
        </div>
        <div className={styles.until}>
          <label className={styles.label}>Check-Out Date:</label>
          <DatePicker
            selected={checkOutDate}
            onChange={handleCheckOutChange}
            selectsEnd
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={checkInDate}
            className={styles.datePicker}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
