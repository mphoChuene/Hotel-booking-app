import React, { useState, useEffect } from "react";
import { db, storage } from "../../../firebase-config"; // Import storage from Firebase
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import storage functions
import "./addUnit.css";

const AddUnit = () => {
  const navigate = useNavigate();
  const [units, setUnits] = useState([]);
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

    await addDoc(unitCollectionRef, {
      Img: imageURL,
      Date: newDate,
      Specifications: {
        Bedrooms: specifications.bedrooms,
        Bathrooms: specifications.bathrooms,
        Gym: specifications.hasGym,
        FreeParking: specifications.hasFreeParking,
        Security: specifications.has24HrSecurity,
      },
    });
    navigate("/admin");
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  // Function to upload image and get URL
  const uploadImage = async (file) => {
    if (file) {
      const storageRef = ref(storage, "roomImages/" + file.name);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    }
    return "";
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
