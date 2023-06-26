import React from "react";
import styles from "./Category.module.css";

const Category = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Our room category</h1>
        <p>our rooms range from basic to royalty</p>
      </div>
      <div className="slider">
        <div className="card">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
