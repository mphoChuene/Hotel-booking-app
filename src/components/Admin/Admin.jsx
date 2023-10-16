import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  onSnapshot,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
import styles from "./Admin.module.css";
import {
  basic,
  comfort,
  blueroom,
  royal,
  goldroom,
  deluxroom,
  superdelux,
} from "../imports";

const iconSize = {
  fontSize: "25px",
  color: "#ffffff",
  margin: "0 15px",
};

const Admin = () => {
  const navigate = useNavigate();

  const updateUnit = (id) => {
    navigate(`/updateunit/${id}`);
  };

  const deleteUnit = async (id) => {
    await deleteDoc(doc(db, "bookings", id));
  };

  const addRoom = () => {
    navigate("/addunit");
  };

  const [units, setUnits] = useState([]);

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
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.search_bar}>
        <h2>Whiteman Lodge</h2>
        <input type="text" placeholder="search" />
        <h2 className={styles.admin_icon}>
          <i class="fa-solid fa-user"></i>Admin
        </h2>
      </div>
      <div className={styles.options}>
        <button style={{ marginRight: 10 }}>
          <i class="fa-solid fa-bed" style={{ ...iconSize }}></i>
          All rooms
        </button>

        <button onClick={addRoom}>
          <i class="fa-solid fa-circle-plus" style={{ ...iconSize }} />
          Create new booking
        </button>
      </div>

      <div className={styles.bar}>
        <h2>Hotel Suites</h2>
      </div>
      <div className={styles.unit_container}>
        {/* Map through the units and render them */}
        {units.map((unit) => {
          return (
            <div className={styles.unit} key={unit.id}>
              <img src={unit.Img} alt="room unit" />
              <div className={styles.availability}>
                <span className={styles.sub_text}>
                  <i class="fa-solid fa-moon"></i> {unit.Date}
                </span>
                {/* Render specifications here */}
                <p className={styles.specifications}>
                  <span>
                    <i class="fa-solid fa-bed"></i>{" "}
                    {unit.Specifications.bedrooms} Bedrooms
                  </span>
                  <br />
                  <span>
                    <i class="fa-solid fa-bath"></i>{" "}
                    {unit.Specifications.bathrooms} Bathrooms
                  </span>
                  <br />
                  <span>
                    {unit.Specifications.hasGym && (
                      <i class="fa-solid fa-dumbbell"></i>
                    )}{" "}
                    Gym Available
                  </span>
                  <br />
                  <span>
                    {unit.Specifications.hasFreeParking && (
                      <i class="fa-solid fa-car"></i>
                    )}{" "}
                    Free Parking
                  </span>
                  <br />
                  <span>
                    {unit.Specifications.has24HrSecurity && (
                      <i class="fa-solid fa-shield-check"></i>
                    )}
                    24-Hr Security
                  </span>
                </p>
                <button
                  className={styles.btn}
                  onClick={() => updateUnit(unit.id)}
                >
                  Update
                </button>
                <button
                  className={styles.btn}
                  onClick={() => deleteUnit(unit.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admin;
