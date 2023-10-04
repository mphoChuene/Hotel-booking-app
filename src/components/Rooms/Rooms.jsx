import React, { useEffect, useState } from "react";
import styles from "./Rooms.module.css";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";

const Rooms = () => {
  const [units, setUnits] = useState([]);
  const navigate = useNavigate();

  const updateUnit = (id) => {
    navigate(`/updateunit/${id}`);
  };

  const deleteUnit = async (id) => {
    // Assuming 'bookings' is the correct collection name in your Firestore
    // Replace 'bookings' with your actual collection name if needed
    await deleteDoc(doc(db, "bookings", id));
  };

  const addRoom = () => {
    navigate("/addunit");
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
      <h1 className={styles.heading}>Available rooms</h1>

      <div className={styles.room_container}>
        <div className={styles.room_subcontainer}>
          {/* Your existing room elements */}
          {/* ... */}

          {units.map((unit) => {
            return (
              <div className={styles.unit} key={unit.id}>
                {/* Render your room data here */}
                <img src={unit.Img} alt="royal unit" />
                <div className={styles.availability}>
                  <p>{unit.Guest}</p> <br />
                  <p className={styles.sub_text}>
                    <span className={styles.icon_spacing}>
                      <i className="fa-solid fa-user"></i>X 2{" "}
                    </span>
                    <i className="fa-solid fa-moon"></i>
                    {unit.Date}
                  </p>
                  <button className={styles.btn} onClick={() => updateUnit(unit.id)}>
                    Update
                  </button>
                  <button className={styles.btn} onClick={() => deleteUnit(unit.id)}>
                    Delete
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
