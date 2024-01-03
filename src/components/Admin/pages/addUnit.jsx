import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase-config";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import {
  Container,
  Heading,
  SubContainer,
  Form,
  Input,
  DateInput,
  FileInput,
  Dropdown,
  Checkbox,
  CheckboxLabel,
  CheckboxInput,
  SubmitButton,
  PriceInput,
} from "./AddUnit.styles";
import { Typography, Button, Snackbar, CircularProgress } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Grow from "@mui/material/Grow";
import { styled } from "@mui/system";

const Transition2 = React.forwardRef(function Transition2(props, ref) {
  return <Grow ref={ref} {...props} />;
});

const StyledAlert = styled(MuiAlert)(({ theme }) => ({
  width: "100%",
  "& .MuiAlert-icon": {
    marginRight: theme.spacing(1),
  },
}));

function Alert(props) {
  return <StyledAlert elevation={6} variant="filled" {...props} />;
}

export { Transition2, Alert };

export default function AddUnit() {
  const navigate = useNavigate();
  const unitCollectionRef = collection(db, "bookings");

  const [name, setName] = useState("");
  const [newDate, setNewDate] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [specifications, setSpecifications] = useState({
    bedrooms: "",
    bathrooms: "",
    hasGym: false,
    hasFreeParking: false,
    has24HrSecurity: false,
  });
  const [price, setPrice] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const uploadImages = async () => {
    const storage = getStorage();
    const urls = [];

    for (const imageFile of imageFiles) {
      const storageRef = ref(storage, `images/${imageFile.name}`);

      try {
        await uploadBytes(storageRef, imageFile);
        const downloadURL = await getDownloadURL(storageRef);
        urls.push(downloadURL);
      } catch (error) {
        console.error("Error uploading image: ", error);
        throw error;
      }
    }

    return urls;
  };

  const createUnit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageUrls = await uploadImages();

      await addDoc(unitCollectionRef, {
        name: name,
        Img: imageUrls,
        Date: newDate,
        Specifications: specifications,
        price: price,
      });

      setOpenSnackbar(true);
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    } catch (error) {
      console.error("Error creating unit: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const fileArray = [];

    for (let i = 0; i < files.length; i++) {
      fileArray.push(files[i]);
    }

    setImageFiles(fileArray);
  };
  return (
    <Container>
      <Heading>Add unit</Heading>
      <SubContainer>
        <Form>
          <Input
            type="text"
            placeholder="Unit Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <DateInput
            type="date"
            value={newDate}
            onChange={(event) => setNewDate(event.target.value)}
          />
          <FileInput
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            multiple
          />
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
            <CheckboxLabel>
              Gym:
              <CheckboxInput
                type="checkbox"
                checked={specifications.hasGym}
                onChange={() =>
                  setSpecifications({
                    ...specifications,
                    hasGym: !specifications.hasGym,
                  })
                }
              />
            </CheckboxLabel>
          </Checkbox>
          <Checkbox>
            <CheckboxLabel>
              Free Parking:
              <CheckboxInput
                type="checkbox"
                checked={specifications.hasFreeParking}
                onChange={() =>
                  setSpecifications({
                    ...specifications,
                    hasFreeParking: !specifications.hasFreeParking,
                  })
                }
              />
            </CheckboxLabel>
          </Checkbox>
          <Checkbox>
            <CheckboxLabel>
              24-Hour Security:
              <CheckboxInput
                type="checkbox"
                checked={specifications.has24HrSecurity}
                onChange={() =>
                  setSpecifications({
                    ...specifications,
                    has24HrSecurity: !specifications.has24HrSecurity,
                  })
                }
              />
            </CheckboxLabel>
          </Checkbox>
          <PriceInput
            type="number"
            placeholder="Price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          {loading ? (
            <CircularProgress
              size={24}
              color="inherit"
              sx={{ width: "100%", height: "8vh", alignSelf: "center" }}
            />
          ) : (
            <SubmitButton
              variant="contained"
              onClick={createUnit}
              disabled={loading}>
              Add unit
            </SubmitButton>
          )}
        </Form>
      </SubContainer>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          Unit added successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
}
