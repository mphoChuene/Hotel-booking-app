import React from "react";

import {
  basic,
  comfort,
  blueroom,
  royal,
  goldroom,
  deluxroom,
  superdelux,
} from "../imports";

import styles from "./Category.module.css";

const Category = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Our room category</h1>
        <p>our rooms range from basic to royalty</p>
      </div>

      <div className={styles.slider_container}>
        <div className="slider">
          <div className={styles.box}>
            <img src={basic} />
            <h4>Basic room</h4>
            <h5>2 bathrooms</h5>
            <h2 className={styles.prices}>
              R500 / <span className={styles.sub_price}>night </span>
            </h2>
          </div>
        </div>

        <div className="slider">
          <div className={styles.box}>
            <img src={blueroom} />
            <h4>Luxury room</h4>
            <h5>1 bathroom with jaccuzzi</h5>
            <h2 className={styles.prices}>
              R1200 / <span className={styles.sub_price}>night </span>
            </h2>
          </div>
        </div>

        <div className="slider">
          <div className={styles.box}>
            <img src={superdelux} />
            <h4>Royalty room</h4>
            <h5>Matrimonial room</h5>
            <h2 className={styles.prices}>
              R2000 / <span className={styles.sub_price}>night </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
