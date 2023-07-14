import React, { useState, useEffect } from "react";
import { db } from "../../../firebase-config";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getDocs } from "firebase/firestore";
import "./addUnit.css";

const AddUnit = () => {
  const navigate = useNavigate();
  const [units, setUnits] = useState([]);
  const unitCollectionRef = collection(db, "bookings");
  const [newGuest, setNewGuest] = useState("");
  const [newImg, setNewImg] = useState("");
  const [newDate, setNewDate] = useState("");

  const createUnit = async (e) => {
    e.preventDefault();
    await addDoc(unitCollectionRef, {
      Guest: newGuest,
      Img: newImg,
      Date: newDate,
    });
    navigate("/admin");
  };

  useEffect(() => {
    const getUnit = async () => {
      const data = await getDocs(unitCollectionRef);
      setUnits(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUnit();
  }, []);

  return (
    <div className="main-container">
      <h2 className="heading">Add unit</h2>

      <div className="sub-container">
        <form>
          <input
            type="date"
            value={newDate}
            onChange={(event) => {
              setNewDate(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="guest name..."
            className="form-input"
            value={newGuest}
            onChange={(event) => {
              setNewGuest(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="photoUrls..."
            className="form-input"
            value={newImg}
            onChange={(event) => {
              setNewImg(event.target.value);
            }}
          />

          <button onClick={createUnit}>Add unit</button>
        </form>
      </div>
    </div>
  );
};

export default AddUnit;
