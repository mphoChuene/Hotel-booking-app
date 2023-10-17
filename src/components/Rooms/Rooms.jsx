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

  // Function to handle the "View" button click
  const viewUnit = (unitId) => {
    // Navigate to the ViewRooms component with the unitId as a parameter
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
      <div className={styles.room_container}>
        <div className={styles.room_subcontainer}>
          {units.map((unit) => {
            return (
              <div className={styles.unit} key={unit.id}>
                <img src={unit.Img} alt="room unit" />
                <div className={styles.availability}>
                  <p className={styles.specifications}>
                    <FontAwesomeIcon icon={faBuilding} /> {/* Building icon */}
                    Category: {unit.name || "N/A"}
                  </p>
                  <p className={styles.specifications}>
                    <FontAwesomeIcon icon={faBed} /> {/* Bed icon */}
                    Bedrooms: {unit.Specifications.bedrooms || "N/A"}
                  </p>
                  <p className={styles.specifications}>
                    <FontAwesomeIcon icon={faMoneyBill} /> {/* Money icon */}
                    Price: R{unit.price || "N/A"}
                  </p>
                  <button
                    className={styles.btn}
                    onClick={() => viewUnit(unit.id)} // Pass unit.id as unitId
                  >
                    View
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
