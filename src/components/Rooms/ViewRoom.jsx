import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./ViewRooms.module.css";
import { db } from "../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faMoneyBillWave,
  faBath,
  faDumbbell,
  faCar,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

const ViewRooms = () => {
  const { unitId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const roomDocRef = doc(db, "bookings", unitId);
        const roomSnapshot = await getDoc(roomDocRef);

        if (roomSnapshot.exists()) {
          setRoomDetails(roomSnapshot.data());
        } else {
          console.log("Room not found.");
        }
      } catch (error) {
        console.error("Error fetching room details:", error);
      }
    };

    fetchRoomDetails();
  }, [unitId]);

  if (!roomDetails) {
    return <div>Loading...</div>;
  }

  const handlePay = () => {
    // Navigate to the payment page when the "Reserve" button is clicked
    // You should replace '/payment' with the actual URL of your payment page
    // and pass any necessary data as props
  };

  return (
    <div className={styles.container}>
      <div className={styles.roomCont}>
        <img
          src={roomDetails.Img}
          alt={roomDetails.name}
          className={styles.img}
        />
      </div>
      <div className={styles.Specifications}>
        <h2>Room Specifications</h2>
        <p>
          <FontAwesomeIcon icon={faMoneyBillWave} /> Price: R
          {roomDetails.price || "N/A"}
          <br />
          <FontAwesomeIcon icon={faBed} /> Bedrooms:{" "}
          {roomDetails.Specifications?.bedrooms || "N/A"}
          <br />
          <FontAwesomeIcon icon={faBath} /> Bathrooms:{" "}
          {roomDetails.Specifications?.bathrooms || "N/A"}
          <br />
          <FontAwesomeIcon icon={faDumbbell} /> Gym:{" "}
          {roomDetails.Specifications?.hasGym ? "Yes" : "No"}
          <br />
          <FontAwesomeIcon icon={faCar} /> Free Parking:{" "}
          {roomDetails.Specifications?.hasFreeParking ? "Yes" : "No"}
          <br />
          <FontAwesomeIcon icon={faShieldAlt} /> 24-Hr Security:{" "}
          {roomDetails.Specifications?.has24HrSecurity ? "Yes" : "No"}
          <br />
        </p>
        <Link to="/payment">
          <button className={styles.reserveButton}>Reserve</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewRooms;
