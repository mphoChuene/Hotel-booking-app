import React, { useEffect, useState } from "react";
import { db,auth } from "../../firebase-config";
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
        <div key={index}>
          <h3>Unit {index + 1}</h3>
          <img src={unit.roomDetails.Img} alt={unit.roomDetails.name} />
          <p>Date: {unit.roomDetails.date}</p>
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
