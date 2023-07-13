import "./addUnit.css";
import { useState, React } from "react";
import { useNavigate } from "react-router-dom";

const AddUnit = () => {
  const navigate = useNavigate();
  const [guest, setGuest] = useState("");
  const [photo, setPhoto] = useState("");
  const [Date, setDate] = useState(0);
  const createUnit = async () => {
    alert("function works!");
    navigate("/admin");
  };

  return (
    <div className="main-container">
      <h2 className="heading">Add unit</h2>

      <div className="sub-container">
        <form>
          <input
            type="date"
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="guest name..."
            className="form-input"
            onChange={(event) => {
              setGuest(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="photoUrls..."
            className="form-input"
            onChange={(event) => {
              setPhoto(event.target.value);
            }}
          />

          <button onClick={createUnit}>Add unit</button>
        </form>
      </div>
    </div>
  );
};

export default AddUnit;
