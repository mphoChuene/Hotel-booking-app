import React, { useEffect, useState } from "react";
import {
  faBed,
  faMoneyBill,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { Skeleton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Rooms.module.css";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

const Rooms = () => {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const viewUnit = (unitId) => {
    navigate(`/viewroom/${unitId}`);
  };

  const fetchUnits = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "bookings"));
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUnits(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUnits();
    // No need for unsubscribe since we're using getDocs, which is not real-time
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Our Room Categories</h1>
        <p>Explore a range of rooms from basic to luxury.</p>
      </div>
      <div className={styles.room_container}>
        <div className={styles.room_subcontainer}>
          {loading ? (
            // Skeleton while loading
            <Skeleton
              variant="rectangular"
              width={300}
              height={200}
              animation="pulse"
            />
          ) : (
            units.map((unit) => (
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
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
