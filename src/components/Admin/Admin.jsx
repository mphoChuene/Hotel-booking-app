import React from "react";
import styles from "./Admin.module.css";

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
    </div>
  );
};

export default Admin;
