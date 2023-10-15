import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./RoomDetails.module.css"; // Create a separate CSS file for room details styling

const RoomDetails = () => {
  const { roomName } = useParams();

  //   Replace this data with your actual room details data
  const roomDetails = {
    "Basic room": {
      description: (
        <span>
          2 bathrooms <br />
          1 master bedroom <br />
          Gym <br />
          24hrs security <br />
          Free Parking
        </span>
      ),
      price: "R500 / night",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hotelbooking-app-9d4ab.appspot.com/o/goldroom.jpg?alt=media&token=c3456634-171d-44e9-abe9-df4ddc4dd989&_gl=1*4vmemv*_ga*MzMzNTIzNjEyLjE2OTcyNTU5Mjk.*_ga_CW55HF8NVT*MTY5NzI1NTkyOC4xLjEuMTY5NzI1NjkzMC42MC4wLjA.", // Replace with the actual image URL
    },
    "Luxury room": {
      description: (
        <span>
          2 bathrooms <br />
          1 master bedroom <br />
          Gym <br />
          24hrs security <br />
          Free Parking
        </span>
      ),
      price: "R1200 / night",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hotelbooking-app-9d4ab.appspot.com/o/goldroom.jpg?alt=media&token=c3456634-171d-44e9-abe9-df4ddc4dd989&_gl=1*4vmemv*_ga*MzMzNTIzNjEyLjE2OTcyNTU5Mjk.*_ga_CW55HF8NVT*MTY5NzI1NTkyOC4xLjEuMTY5NzI1NjkzMC42MC4wLjA.", // Replace with the actual image URL
    },
    "Royalty room": {
      description: (
        <span>
          2 bathrooms <br />
          1 master bedroom <br />
          Gym <br />
          24hrs security <br />
          Free Parking
        </span>
      ),
      price: "R2000 / night",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hotelbooking-app-9d4ab.appspot.com/o/goldroom.jpg?alt=media&token=c3456634-171d-44e9-abe9-df4ddc4dd989&_gl=1*4vmemv*_ga*MzMzNTIzNjEyLjE2OTcyNTU5Mjk.*_ga_CW55HF8NVT*MTY5NzI1NTkyOC4xLjEuMTY5NzI1NjkzMC42MC4wLjA.", // Replace with the actual image URL
    },
    // Add details for other room types
  };

  const [isPaymentVisible, setPaymentVisible] = useState(false);

  const handlePayment = () => {
    // Implement your payment logic here
    // You can use a payment gateway or any other method to handle payments
    // For simplicity, we'll just display a confirmation message
    alert("Payment successful!");
  };

  if (!roomDetails[roomName]) {
    return <div>No details found for this room.</div>;
  }

  const { description, price, image } = roomDetails[roomName];

  return (
    <div className={styles.roomDetailsContainer}>
      <h1>Room Details for {roomName}</h1>
      <img src={image} alt={roomName} />
      <p>{description}</p>
      <h2>{price}</h2>
      <button onClick={() => setPaymentVisible(true)}>Pay Now</button>
      {isPaymentVisible && (
        <div className={styles.paymentContainer}>
          <h3>Payment Options</h3>
          <p>
            Enter your payment details and click "Pay" to confirm your
            reservation.
          </p>
          {/* You can add your payment form or gateway here */}
          <button onClick={handlePayment}>Pay</button>
          <button onClick={() => setPaymentVisible(false)}>Cancel</button>
        </div>
      )}
      <Link to="/hotel">Back to Room List</Link>
    </div>
  );
};

export default RoomDetails;
