import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase-config";
import styles from "../category/Category.module.css";
import Rooms from "../Rooms/Rooms";

const Category = () => {
  const [units, setUnits] = useState([]);
  const navigate = useNavigate();

  // Fetch units from Firebase Firestore
  useEffect(() => {
    const unitCollectionRef = collection(db, "bookings"); // Replace with your collection name
    const q = query(unitCollectionRef, orderBy("name")); // You can order by a different field

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUnits(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Our room category</h1>
        <p>Our rooms range from basic to royalty</p>
      </div>

      <div className={styles.slider_container}>
        <Rooms />
      </div>
    </div>
  );
};

export default Category;
