import React from "react";
import styles from "./AddedRooms.module.css";

const AddedRooms = ({ units }) => {
  return (
    <div className={styles.addedRoomsContainer}>
      {units.map((unit) => (
        <div className={styles.addedRoom} key={unit.id}>
          <img src={unit.Img} alt="room unit" />
          <div className={styles.roomDetails}>
            <p className={styles.date}>
              <i className="fa-solid fa-moon"></i> {unit.Date}
            </p>
            <div className={styles.specifications}>
              <p>
                <i className="fa-solid fa-bed"></i>{" "}
                {unit.Specifications.bedrooms} Bedrooms
              </p>
              <p>
                <i className="fa-solid fa-bath"></i>{" "}
                {unit.Specifications.bathrooms} Bathrooms
              </p>
              <p>
                {unit.Specifications.hasGym && (
                  <i className="fa-solid fa-dumbbell"></i>
                )}{" "}
                Gym Available
              </p>
              <p>
                {unit.Specifications.hasFreeParking && (
                  <i className="fa-solid fa-car"></i>
                )}{" "}
                Free Parking
              </p>
              <p>
                {unit.Specifications.has24HrSecurity && (
                  <i className="fa-solid fa-shield-check"></i>
                )}{" "}
                24-Hr Security
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddedRooms;
