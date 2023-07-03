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
              <h4>Twin room</h4>
              <h5>R500 p/n</h5>

              <button className={styles.reserve}>Reserve</button>
            </div>
          </div>

          <div className={styles.slider_container}>
            <div className={styles.box}>
              <img src={comfort} />
              <h4>Basic-master</h4>
              <h5>R1000 p/n</h5>

              <button className={styles.reserve}>Reserve</button>
            </div>
          </div>
          <div className={styles.slider_container}>
            <div className={styles.box}>
              <img src={blueroom} />
              <h4>Luxury-master</h4>
              <h5>R1250 p/n</h5>
              <button className={styles.reserve}>Reserve</button>
            </div>
          </div>

          <div className={styles.slider_container}>
            <div className={styles.box}>
              <img src={deluxroom} />
              <h4>Royalty-suit</h4>
              <h5>R2500 p/n</h5>
              <button className={styles.reserve}>Reserve</button>
            </div>
          </div>
          <div className={styles.slider_container}>
            <div className={styles.box}>
              <img src={comfort} />
              <h4>Delux-comfort</h4>
              <h5>R2800 p/n</h5>
              <button className={styles.reserve}>Reserve</button>
            </div>
          </div>

          <div className={styles.slider_container}>
            <div className={styles.box}>
              <img src={superdelux} />
              <h4>Master-suit</h4>
              <h5>R3000 p/n</h5>
              <button className={styles.reserve}>Reserve</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
