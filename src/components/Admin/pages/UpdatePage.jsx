import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SubContainer = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
`;

const Dropdown = styled.div`
  margin-bottom: 15px;

  label {
    margin-bottom: 5px;
  }

  select {
    width: 100%;
    padding: 10px;
  }
`;

const Checkbox = styled.div`
  margin-bottom: 15px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  input {
    margin-right: 5px;
  }
`;

const UpdateButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Loader = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  align-self: center;
  margin-top: 20px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const UpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const storage = getStorage();

  const [newDate, setNewDate] = useState("");
  const [newImg, setNewImg] = useState(null);
  const [specifications, setSpecifications] = useState({
    bedrooms: "",
    bathrooms: "",
    hasGym: false,
    hasFreeParking: false,
    has24HrSecurity: false,
  });
  const [loading, setLoading] = useState(false);

  const updateUnit = async (date, img, specifications) => {
    const newFields = {
      Date: date,
      Img: img,
      Specifications: specifications,
    };

    await updateDoc(doc(db, "bookings", id), newFields);
  };

  const handleUpdateUnit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const imgURL = await uploadImage(newImg);
      await updateUnit(newDate, imgURL, specifications);
      navigate("/admin");
    } catch (error) {
      console.error("Error updating unit: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setNewImg(file);
  };

  const uploadImage = async (image) => {
    const storageRef = ref(storage, `images/${image.name}`);

    try {
      await uploadBytes(storageRef, image);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image: ", error);
      throw error;
    }
  };

  return (
    <Container>
      <Heading>Update unit</Heading>

      <SubContainer>
        <Form>
          <Label>
            Date:
            <Input
              type="date"
              value={newDate}
              onChange={(event) => setNewDate(event.target.value)}
            />
          </Label>

          <Label>
            Image:
            <Input type="file" accept="image/*" onChange={handleImageUpload} />
          </Label>

          <Dropdown>
            <label>Number of Bedrooms:</label>
            <select
              value={specifications.bedrooms}
              onChange={(e) =>
                setSpecifications({
                  ...specifications,
                  bedrooms: e.target.value,
                })
              }>
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </Dropdown>

          <Dropdown>
            <label>Number of Bathrooms:</label>
            <select
              value={specifications.bathrooms}
              onChange={(e) =>
                setSpecifications({
                  ...specifications,
                  bathrooms: e.target.value,
                })
              }>
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </Dropdown>

          <Checkbox>
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
          </Checkbox>

          <Checkbox>
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
          </Checkbox>

          <Checkbox>
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
          </Checkbox>

          {loading ? (
            <Loader />
          ) : (
            <UpdateButton onClick={handleUpdateUnit}>Update unit</UpdateButton>
          )}
        </Form>
      </SubContainer>
    </Container>
  );
};

export default UpdatePage;
