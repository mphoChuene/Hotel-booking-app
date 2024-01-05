import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { db, doc } from "../../firebase-config";
import { collection, onSnapshot, deleteDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faDumbbell,
  faCar,
  faShieldAlt,
  faCirclePlus,
  faUser,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import BookedUnit from "./BookedUnit";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
`;

const OptionsContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  font-size: 16px;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  align-items: center;

  &:last-child {
    background-color: #007bff;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 25px;
  margin-right: 10px;
`;

const UnitContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
`;

const UnitCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
  }

  .availability {
    padding: 15px;

    .sub_text {
      display: flex;
      align-items: center;
      color: #777;
      font-size: 14px;

      svg {
        margin-right: 5px;
        color: #4caf50;
      }
    }

    .specifications {
      font-size: 14px;
      margin-top: 10px;
    }
  }

  .btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 15px;
    margin-top: 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Spinner = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  align-self: center;
  margin-top: 50px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Admin = () => {
  const navigate = useNavigate();

  const updateUnit = (id) => {
    navigate(`/updateunit/${id}`);
  };

  const deleteUnit = async (id) => {
    const unitDoc = doc(db, "bookings", id);
    await deleteDoc(unitDoc);
  };

  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);

  const unitCollectionRef = collection(db, "bookings");

  useEffect(() => {
    const unsubscribe = onSnapshot(unitCollectionRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUnits(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <Navbar />

      <OptionsContainer>
        <Button>
          <Icon icon={faBed} />
          All rooms
        </Button>
        <Button onClick={() => navigate("/addunit")}>
          <Icon icon={faCirclePlus} />
          Add Room
        </Button>
      </OptionsContainer>

      {loading ? (
        <Spinner />
      ) : (
        <UnitContainer>
          {units.map((unit) => (
            <UnitCard key={unit.id}>
              <img src={unit.Img} alt="room unit" />
              <div className="availability">
                <span className="sub_text">
                  <FontAwesomeIcon icon={faCirclePlus} /> {unit.Date}
                </span>
                <p className="specifications">
                  <span>
                    <FontAwesomeIcon icon={faBed} />{" "}
                    {unit.Specifications.bedrooms} Bedrooms
                  </span>
                  <br />
                  <span>
                    <FontAwesomeIcon icon={faBath} />{" "}
                    {unit.Specifications.bathrooms} Bathrooms
                  </span>
                  <br />
                  <span>
                    {unit.Specifications.hasGym && (
                      <FontAwesomeIcon icon={faDumbbell} />
                    )}{" "}
                    Gym Available
                  </span>
                  <br />
                  <span>
                    {unit.Specifications.hasFreeParking && (
                      <FontAwesomeIcon icon={faCar} />
                    )}{" "}
                    Free Parking
                  </span>
                  <br />
                  <span>
                    {unit.Specifications.has24HrSecurity && (
                      <FontAwesomeIcon icon={faShieldAlt} />
                    )}
                    24-Hr Security
                  </span>
                  <br />
                  <span>
                    <FontAwesomeIcon icon={faMoneyBillWave} /> R
                    {unit.price || "N/A"}
                  </span>
                </p>
                <button
                  className="btn"
                  style={{ margin: "0px 10px" }}
                  onClick={() => updateUnit(unit.id)}>
                  Update
                </button>
                <button
                  className="btn"
                  style={{ margin: "0px 10px", backgroundColor: "red" }}
                  onClick={() => deleteUnit(unit.id)}>
                  Delete
                </button>
              </div>
            </UnitCard>
          ))}
        </UnitContainer>
      )}

      <BookedUnit />
      <Footer />
    </Container>
  );
};

export default Admin;
