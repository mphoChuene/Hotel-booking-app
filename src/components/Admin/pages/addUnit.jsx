import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import "./AddUnit.css";

const AddUnit = () => {
  const navigate = useNavigate();
  const unitCollectionRef = collection(db, "bookings");

  const [newDate, setNewDate] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [specifications, setSpecifications] = useState({
    bedrooms: "",
    bathrooms: "",
    hasGym: false,
    hasFreeParking: false,
    has24HrSecurity: false,
  });

  const createUnit = async (e) => {
    e.preventDefault();

    // Upload the image to a storage service and get the image URL
    const imageURL = await uploadImage(imageFile);

    // Create a new unit with specifications and add it to Firestore
    await addDoc(unitCollectionRef, {
      Img: imageURL,
      Date: newDate,
      Specifications: specifications, // Include the specifications
    });

    navigate("/admin");
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

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
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <div className="dropdown">
            <label>Number of Bedrooms:</label>
            <select
              value={specifications.bedrooms}
              onChange={(e) =>
                setSpecifications({
                  ...specifications,
                  bedrooms: e.target.value,
                })
              }
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </div>
          <div className="dropdown">
            <label>Number of Bathrooms:</label>
            <select
              value={specifications.bathrooms}
              onChange={(e) =>
                setSpecifications({
                  ...specifications,
                  bathrooms: e.target.value,
                })
              }
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </div>
          <div className="checkbox">
            <label>
              Gym:
              <input
                type="checkbox"
                checked={specifications.hasGym}
                onChange={() =>
                  setSpecifications({
                    ...specifications,
                    hasGym: !specifications.hasGym,
                  })
                }
              />
            </label>
          </div>
          <div className="checkbox">
            <label>
              Free Parking:
              <input
                type="checkbox"
                checked={specifications.hasFreeParking}
                onChange={() =>
                  setSpecifications({
                    ...specifications,
                    hasFreeParking: !specifications.hasFreeParking,
                  })
                }
              />
            </label>
          </div>
          <div className="checkbox">
            <label>
              24-Hour Security:
              <input
                type="checkbox"
                checked={specifications.has24HrSecurity}
                onChange={() =>
                  setSpecifications({
                    ...specifications,
                    has24HrSecurity: !specifications.has24HrSecurity,
                  })
                }
              />
            </label>
          </div>
          <button onClick={createUnit}>Add unit</button>
        </form>
      </div>
    </div>
  );
};

export default AddUnit;
