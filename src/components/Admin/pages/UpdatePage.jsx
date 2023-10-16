import React from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useNavigate, useParams } from "react-router-dom";
import "./addUnit.css";

const UpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Initialize Firebase storage using your configuration
  const storage = getStorage(); // Initialize with your Firebase configuration if not provided here

  const updateUnit = async (date, img, specifications) => {
    const newFields = {
      Date: date,
      Img: img,
      Specifications: specifications,
    };

    await updateDoc(doc(db, "bookings", id), newFields);
  };

  const [newDate, setNewDate] = React.useState("");
  const [newImg, setNewImg] = React.useState(null); // Store the selected image as a File object
  const [specifications, setSpecifications] = React.useState({
    bedrooms: "",
    bathrooms: "",
    hasGym: false,
    hasFreeParking: false,
    has24HrSecurity: false,
  });

  const handleUpdateUnit = async (event) => {
    event.preventDefault();
    const imgURL = await uploadImage(newImg); // Upload the selected image
    await updateUnit(newDate, imgURL, specifications);
    navigate(`/admin`);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setNewImg(file);
  };

  // Function to upload the selected image
  const uploadImage = async (image) => {
    const storageRef = ref(
      storage,
      "images/hotelbooking-app-9d4ab.appspot.com" + image.name
    );

    try {
      const snapshot = await uploadBytes(storageRef, image);
      const downloadURL = await getDownloadURL(snapshot.ref);

      return downloadURL;
    } catch (error) {
      console.error("Error uploading the image: ", error);
      return null; // Handle the error appropriately in your application
    }
  };

  return (
    <div className="main-container">
      <h2 className="heading">Update unit</h2>

      <div className="sub-container">
        <form>
          <label>
            Date:{" "}
            <input
              type="date"
              value={newDate}
              onChange={(event) => {
                setNewDate(event.target.value);
              }}
            />
          </label>

          {/* Add an input for image upload */}
          <input type="file" accept="image/*" onChange={handleImageUpload} />

          {/* Include the room specifications fields */}
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

          <button onClick={handleUpdateUnit}>Update unit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
