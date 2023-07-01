import React from "react";
import styles from "./Admin.module.css";
import {
  basic,
  comfort,
  blueroom,
  royal,
  goldroom,
  deluxroom,
  superdelux,
} from "../imports";

//styling variables

const iconSize = {
  fontSize: "25px",
  color: "#ffffff",
  margin: "0 15px",
};

const Admin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search_bar}>
        <h2>Whiteman Lodge</h2>
        <input type="text" placeholder="search" />
        <h2 className={styles.admin_icon}>
          <i class="fa-solid fa-user"></i>Admin
        </h2>
      </div>
      <div className={styles.options}>
        <button>
          <i class="fa-solid fa-bed" style={{ ...iconSize }}></i>
          All rooms
        </button>

        <button>
          <i className="fa-solid fa-circle-plus" style={{ ...iconSize }} />
          Create new booking
        </button>
      </div>

      <div className={styles.bar}>
        <h2>Hotel Suits</h2>
      </div>
      <div className={styles.unit_container}>
        {/* //unit 1 */}
        <div className={styles.unit}>
          <img src={basic} alt="basic unit" />
          <div className={styles.availability}>
            <p>Mr Chuene</p> <br />
            <p className={styles.sub_text}>
              <span className={styles.icon_spacing}>
                <i class="fa-solid fa-user"></i>X 2{" "}
              </span>
              <i class="fa-solid fa-moon"></i> 02 June-03 June
            </p>
          </div>
        </div>
        {/* //unit 2 */}
        <div className={styles.unit}>
          <img src={comfort} alt="comfort uint" />
          <div className={styles.availability}>
            <p>Mr Chuene</p> <br />
            <p className={styles.sub_text}>
              <span className={styles.icon_spacing}>
                <i class="fa-solid fa-user"></i>X 2{" "}
              </span>
              <i class="fa-solid fa-moon"></i> 02 June-03 June
            </p>
          </div>
        </div>
        {/* //unit 3 */}
        <div className={styles.unit}>
          <img src={blueroom} alt="blueroom" />
          <div className={styles.availability}>
            <p>Mr Chuene</p> <br />
            <p className={styles.sub_text}>
              <span className={styles.icon_spacing}>
                <i class="fa-solid fa-user"></i>X 2{" "}
              </span>
              <i class="fa-solid fa-moon"></i> 02 June-03 June
            </p>
          </div>
        </div>
        {/* //unit 4 */}
        <div className={styles.unit}>
          <img src={royal} alt="royal unit" />
          <div className={styles.availability}>
            <p>Mr Chuene</p> <br />
            <p className={styles.sub_text}>
              <span className={styles.icon_spacing}>
                <i class="fa-solid fa-user"></i>X 2{" "}
              </span>
              <i class="fa-solid fa-moon"></i> 02 June-03 June
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
