import React, { useEffect, useState } from "react";
import {
  faBed,
  faMoneyBill,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { Skeleton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Rooms.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import Room from "./Room";

const Rooms = () => {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <div
        className={styles.room_container}
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
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
            <Room
              unit={unit}
              key={unit.id}
              Img={unit.Img}
              name={unit.name}
              price={unit.price}
              unitId={unit.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Rooms;
