import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useNavigate } from "react-router-dom";
import "./addUnit.css";

const UpdatePage = () => {
  const navigate = useNavigate();

  const updateUnit = async (id, guest, date, img) => {
    const newFields = {
      Guest: guest,
      Date: date,
      Img: img,
    };

    await updateDoc(doc(db, "bookings", id), newFields);
  };

  const [newDate, setNewDate] = React.useState("");
  const [newGuest, setNewGuest] = React.useState("");
  const [newImg, setNewImg] = React.useState("");

  const handleUpdateUnit = (event) => {
    event.preventDefault();
    updateUnit(unit.id, newGuest, newDate, newImg);
    navigate("/admin");
  };

  return (
    <div className="main-container">
      <h2 className="heading">update unit</h2>

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

          <button onClick={handleUpdateUnit}>update unit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
