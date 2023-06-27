import React from "react";
import styles from "./Rooms.module.css";

import {
  basic,
  comfort,
  blueroom,
  royal,
  goldroom,
  deluxroom,
  superdelux,
} from "../imports";

const Rooms = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Available rooms</h1>

      <div className={styles.room_container}>
        <div className={styles.room_subcontainer}>
          <div className={styles.slider_container}>
            <div className={styles.box}>
              <img src={basic} />
              <h4>Basic room</h4>
              <h5>2 bathrooms</h5>
              <h2 className={styles.prices}>
                R500 / <span className={styles.sub_price}>night </span>
              </h2>
              <button>Reserve</button>
            </div>
          </div>

          <div className={styles.slider_container}>
            <div className={styles.box}>
              <img src={basic} />
              <h4>Basic room</h4>
              <h5>2 bathrooms</h5>
              <h2 className={styles.prices}>
                R500 / <span className={styles.sub_price}>night </span>
              </h2>
              <button>Reserve</button>
            </div>
          </div>
          <div className={styles.slider_container}>
            <div className={styles.box}>
              <img src={basic} />
              <h4>Basic room</h4>
              <h5>2 bathrooms</h5>
              <h2 className={styles.prices}>
                R500 / <span className={styles.sub_price}>night </span>
              </h2>
              <button>Reserve</button>
            </div>
          </div>

          <div className={styles.slider_container}>
            <div className={styles.box}>
              <img src={basic} />
              <h4>Basic room</h4>
              <h5>2 bathrooms</h5>
              <h2 className={styles.prices}>
                R500 / <span className={styles.sub_price}>night </span>
              </h2>
              <button>Reserve</button>
            </div>
          </div>
          <div className={styles.slider_container}>
            <div className={styles.box}>
              <img src={basic} />
              <h4>Basic room</h4>
              <h5>2 bathrooms</h5>
              <h2 className={styles.prices}>
                R500 / <span className={styles.sub_price}>night </span>
              </h2>
              <button>Reserve</button>
            </div>
          </div>

          <div className={styles.slider_container}>
            <div className={styles.box}>
              <img src={basic} />
              <h4>Basic room</h4>
              <h5>2 bathrooms</h5>
              <h2 className={styles.prices}>
                R500 / <span className={styles.sub_price}>night </span>
              </h2>
              <button>Reserve</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
