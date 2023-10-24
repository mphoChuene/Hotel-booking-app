import React, { useEffect, useState } from "react";
import { db,auth } from "../../firebase-config";
import styles from './BookedUnits.module.css'
import { collection, getDocs } from "firebase/firestore";

const BookedUnit = () => {
  const [bookedUnits, setBookedUnits] = useState([]);

  useEffect(() => {
    const fetchBookedUnits = async () => {
      try {
        const reservationCollectionRef = collection(db, "reservation");
        const querySnapshot = await getDocs(reservationCollectionRef);

        const units = [];
        querySnapshot.forEach((doc) => {
          units.push(doc.data());
        });

        setBookedUnits(units);
      } catch (error) {
        console.error("Error fetching booked units:", error);
      }
    };

    fetchBookedUnits();
  }, []);

  return (
    <div>
      <h2>Booked Units</h2>
      {bookedUnits.map((unit, index) => (
        <div key={index} className={styles.bookedUnitContainer}>
          <h3> {unit.roomDetails.name} Unit</h3>
          <img src={unit.roomDetails.Img} alt={unit.roomDetails.name}  className={styles.unitImage} />
          <p>Date: {unit.roomDetails.Date}</p>
          <p>Guest: {auth.currentUser.email}</p>
          <p>Bathrooms: {unit.roomDetails.Specifications.bathrooms}</p>
          <p>Timestamp: {unit.timestamp.toDate().toLocaleString()}</p>
          {/* You can format the timestamp as desired */}
          {/* Display other room details using unit.roomDetails */}
        </div>
      ))}
    </div>
  );
};

export default BookedUnit;
