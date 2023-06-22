import React from "react";
import styles from "./Find.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <img src={image} alt="/" />
      <p>{make}</p>
    </div>
  );
};

export default Card;
