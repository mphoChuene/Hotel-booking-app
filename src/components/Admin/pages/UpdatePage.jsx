import React from "react";
import "./addUnit.css";

const UpdatePage = () => {
  const updateUnit = async (id, guest, date, img) => {
    const newFields = {
      Guest: guest, // Update guest field
      Date: date, // Update date field
      Img: img, // Update img field
    };

    await updateDoc(doc(db, "bookings", id), newFields);
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

          <button onClick={updateUnit(unit.id, unit.Guest)}>update unit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
