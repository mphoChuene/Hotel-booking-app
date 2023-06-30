import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_1}>
      <div className={styles.frame_5_6}>
        <div className={styles.companydetailssocialmedia}>
          <div className={styles.logo}>
            <p className={styles.text_1}>Whiteman Lodge</p>
          </div>
          <p className={styles.text_2}>
            Arrive as a guest and leave as a friend
          </p>
        </div>
        <div className={styles.frame_5_7}>
          <div className={styles.homelink}>
            <p className={styles.text_3}>Bedrooms</p>
            <p className={styles.text_4}>Services</p>
            <p className={styles.text_5}>Events</p>
          </div>
          <div className={styles.homelink}>
            <p className={styles.text_6}>Bedrooms</p>
            <p className={styles.text_7}>Services</p>
            <p className={styles.text_8}>Events</p>
          </div>
          <div className={styles.homelink}>
            <p className={styles.text_9}>Bedrooms</p>
            <p className={styles.text_1_0}>Services</p>
            <p className={styles.text_1_1}>Events</p>
          </div>
        </div>
      </div>
      <div className={styles.frame_5_5}>
        <p className={styles.text_1_2}>© Logo Hotel 2023. copyright reserved</p>
        <div className={styles.frame_6_7}>
          <p className={styles.text_1_3}>ours socials :</p>
          <div className={styles.frame_5_3}></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;