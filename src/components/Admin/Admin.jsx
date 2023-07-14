import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, addDoc, getDocs, doc } from "firebase/firestore";
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

//styling variables

const iconSize = {
  fontSize: "25px",
  color: "#ffffff",
  margin: "0 15px",
};

const Admin = () => {
  const navigate = useNavigate();

  const addRoom = () => {
    navigate("/addunit");
  };
  const [units, setUnits] = useState([]);
  const createBooking = async()=>{

  }
  const unitCollectionRef = collection(db, "bookings");
  useEffect(() => {
    const getUnit = async () => {
      const data = await getDocs(unitCollectionRef);
      setUnits(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUnit();
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
        <button>
          <i class="fa-solid fa-bed" style={{ ...iconSize }}></i>
          All rooms
        </button>

        <button onClick={addRoom}>
          <i className="fa-solid fa-circle-plus" style={{ ...iconSize }} />
          Create new booking
        </button>
      </div>

      <div className={styles.bar}>
        <h2>Hotel Suits</h2>
      </div>
      <div className={styles.unit_container}>
        {/* //unit 1 */}
        <div className={styles.unit}>
          <img src={deluxroom} alt="basic unit" />
          <div className={styles.availability}>
            <p>Mr Chuene</p> <br />
            <p className={styles.sub_text}>
              <span className={styles.icon_spacing}>
                <i class="fa-solid fa-user"></i>X 2{" "}
              </span>
              <i class="fa-solid fa-moon"></i> 02 June-03 June
            </p>
          </div>
        </div>

        {/* //unit 2 */}
        {units.map((unit) => {
          return (
            <div className={styles.unit}>
              <img src={unit.Img} alt="royal unit" />
              <div className={styles.availability}>
                <p>{unit.Guest}</p> <br />
                <p className={styles.sub_text}>
                  <span className={styles.icon_spacing}>
                    <i class="fa-solid fa-user"></i>X 2{" "}
                  </span>
                  <i class="fa-solid fa-moon"></i>
                  {unit.Date}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {units.map((unit) => {
        return (
          <div>
            <p>{unit.Guest}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Admin;
