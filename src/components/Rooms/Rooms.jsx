import React, { useEffect, useState } from "react";
import {
  faBed,
  faMoneyBill,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Rooms.module.css";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";

const Rooms = () => {
  const [units, setUnits] = useState([]);
  const navigate = useNavigate();

  const viewUnit = (unitId) => {
    navigate(`/viewroom/${unitId}`);
  };

  const unitCollectionRef = collection(db, "bookings");

  useEffect(() => {
    const unsubscribe = onSnapshot(unitCollectionRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUnits(data);
    });

    return () => unsubscribe();
  }, [unitCollectionRef]);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Our Room Categories</h1>
        <p>Explore a range of rooms from basic to luxury.</p>
      </div>
      <div className={styles.room_container}>
        <div className={styles.room_subcontainer}>
          {units.map((unit) => (
            <div className={styles.unit} key={unit.id}>
              <img
                src={unit.Img}
                alt="Room Unit"
                className={styles.roomImage}
              />
              <div className={styles.availability}>
                <p className={styles.specifications}>
                  <FontAwesomeIcon icon={faBuilding} /> Category:{" "}
                  {unit.name || "N/A"}
                </p>
                <p className={styles.specifications}>
                  <FontAwesomeIcon icon={faBed} /> Bedrooms:{" "}
                  {unit.Specifications.bedrooms || "N/A"}
                </p>
                <p className={styles.specifications}>
                  <FontAwesomeIcon icon={faMoneyBill} /> Price: R
                  {unit.price || "N/A"}
                </p>
                <button
                  className={styles.btn}
                  onClick={() => viewUnit(unit.id)}>
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
