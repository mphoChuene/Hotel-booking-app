import React, { useState } from "react";
import { Link, Route,  BrowserRouter as Router } from "react-router-dom"; // Import the necessary components from react-router-dom
import styles from "./Category.module.css";
import RoomDetails from "./RoomDetails"; // Create a new component for room details

// Define your room data with images and room details
const rooms = [
  {
    name: "Basic room",
    description: "2 bathrooms",
    price: "R500 / night",
    image:
      "https://firebasestorage.googleapis.com/v0/b/hotelbooking-app-9d4ab.appspot.com/o/deluxroom.jpg?alt=media&token=09b4eab5-39ed-45a2-acae-0c667e7a3622&_gl=1*16l8s24*_ga*MzMzNTIzNjEyLjE2OTcyNTU5Mjk.*_ga_CW55HF8NVT*MTY5NzI1NTkyOC4xLjEuMTY5NzI1NTk3Ny4xMS4wLjA.", // Replace with the actual image URL
  },
  {
    name: "Luxury room",
    description: "1 bathroom with jacuzzi",
    price: "R1200 / night",
    image:
      "https://firebasestorage.googleapis.com/v0/b/hotelbooking-app-9d4ab.appspot.com/o/deluxroom.jpg?alt=media&token=09b4eab5-39ed-45a2-acae-0c667e7a3622&_gl=1*16l8s24*_ga*MzMzNTIzNjEyLjE2OTcyNTU5Mjk.*_ga_CW55HF8NVT*MTY5NzI1NTkyOC4xLjEuMTY5NzI1NTk3Ny4xMS4wLjA.", // Replace with the actual image URL
  },
  {
    name: "Royalty room",
    description: "Matrimonial room",
    price: "R2000 / night",
    image:
      "https://firebasestorage.googleapis.com/v0/b/hotelbooking-app-9d4ab.appspot.com/o/deluxroom.jpg?alt=media&token=09b4eab5-39ed-45a2-acae-0c667e7a3622&_gl=1*16l8s24*_ga*MzMzNTIzNjEyLjE2OTcyNTU5Mjk.*_ga_CW55HF8NVT*MTY5NzI1NTkyOC4xLjEuMTY5NzI1NTk3Ny4xMS4wLjA.", // Replace with the actual image URL
  },
];
const Category = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Our room category</h1>
        <p>Our rooms range from basic to royalty</p>
      </div>

      <div className={styles.slider_container}>
        {rooms.map((room, index) => (
          <div className="slider" key={index}>
            <div className={styles.box}>
              <img src={room.image} alt={room.name} />
              <h4>{room.name}</h4>
              <h5>{room.description}</h5>
              <h2 className={styles.prices}>{room.price}</h2>
              <Link to={`/room-details/${room.name}`}>View Room</Link>
            </div>
          </div>
        ))}
      </div>
{/* 
      <Switch>
        <Route path="/room-details/:roomName" component={RoomDetails} />
      </Switch> */}
    </div>
  );
};

export default Category;
