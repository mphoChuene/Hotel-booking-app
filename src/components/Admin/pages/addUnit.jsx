import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase-config";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage"; // Import getStorage
import { collection, addDoc } from "firebase/firestore";
import "./AddUnit.css";

const AddUnit = () => {
  const navigate = useNavigate();
  const unitCollectionRef = collection(db, "bookings");

  const [name, setName] = useState("");
  const [newDate, setNewDate] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [specifications, setSpecifications] = useState({
    bedrooms: "",
    bathrooms: "",
    hasGym: false,
    hasFreeParking: false,
    has24HrSecurity: false,
  });
  const [price, setPrice] = useState(""); // Added state for price

  // Define the uploadImage function
  const uploadImage = async (imageFile) => {
    const storage = getStorage(); // Initialize Firebase Storage
    const storageRef = ref(storage, `images/${imageFile.name}`);

    try {
      // Upload the image to Firebase Storage
      await uploadBytes(storageRef, imageFile);

      // Get the download URL for the uploaded image
      const downloadURL = await getDownloadURL(storageRef);

      return downloadURL; // Return the image URL
    } catch (error) {
      console.error("Error uploading image: ", error);
      throw error; // Handle or rethrow the error
    }
  };

  const createUnit = async (e) => {
    e.preventDefault();

    // Upload the image to a storage service and get the image URL
    const imageURL = await uploadImage(imageFile);

    // Create a new unit with specifications and add it to Firestore
    await addDoc(unitCollectionRef, {
      name: name,
      Img: imageURL,
      Date: newDate,
      Specifications: specifications,
      price: price, // Include the price
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
            type="text"
            placeholder="Unit Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
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
          <input
            type="text"
            placeholder="Price" // Input for price
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <button onClick={createUnit}>Add unit</button>
        </form>
      </div>
    </div>
  );
};

export default AddUnit;
