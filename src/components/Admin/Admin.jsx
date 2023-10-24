import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, doc } from "../../firebase-config";
import { collection, onSnapshot, deleteDoc } from "firebase/firestore";
import styles from "./Admin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faDumbbell,
  faCar,
  faShieldAlt,
  faCirclePlus,
  faUser,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import BookedUnit from "./BookedUnit";

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
    const unitDoc = doc(db, "bookings", id);
    await deleteDoc(unitDoc);
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

        <h2 className={styles.admin_icon}>
          <FontAwesomeIcon icon={faUser} />
          Admin
        </h2>
      </div>
      <div className={styles.options}>
        <button style={{ marginRight: 10 }}>
          <FontAwesomeIcon icon={faBed} style={{ ...iconSize }} />
          All rooms
        </button>

        <button onClick={addRoom}>
          <FontAwesomeIcon icon={faCirclePlus} style={{ ...iconSize }} />
          Add Room
        </button>
      </div>
      <div className={styles.bar}>
        <h2>Hotel Suites</h2>
      </div>
      <div className={styles.unit_container}>
        {units.map((unit) => {
          return (
            <div className={styles.unit} key={unit.id}>
              <img src={unit.Img} alt="room unit" />
              <div className={styles.availability}>
                <span className={styles.sub_text}>
                  <FontAwesomeIcon icon={faCirclePlus} /> {unit.Date}
                </span>
                <p className={styles.specifications}>
                  <span>
                    <FontAwesomeIcon icon={faBed} />{" "}
                    {unit.Specifications.bedrooms} Bedrooms
                  </span>
                  <br />
                  <span>
                    <FontAwesomeIcon icon={faBath} />{" "}
                    {unit.Specifications.bathrooms} Bathrooms
                  </span>
                  <br />
                  <span>
                    {unit.Specifications.hasGym && (
                      <FontAwesomeIcon icon={faDumbbell} />
                    )}{" "}
                    Gym Available
                  </span>
                  <br />
                  <span>
                    {unit.Specifications.hasFreeParking && (
                      <FontAwesomeIcon icon={faCar} />
                    )}{" "}
                    Free Parking
                  </span>
                  <br />
                  <span>
                    {unit.Specifications.has24HrSecurity && (
                      <FontAwesomeIcon icon={faShieldAlt} />
                    )}
                    24-Hr Security
                  </span>
                  <br />
                  <span>
                    <FontAwesomeIcon icon={faMoneyBillWave} /> R
                    {unit.price || "N/A"}
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

      <BookedUnit/>

    </div>
  );
};

export default Admin;
