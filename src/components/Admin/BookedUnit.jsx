import React, { useEffect, useState } from "react";
import { db, auth } from "../../firebase-config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import styled from "styled-components";
import { Card, Typography, Button } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  max-width: 960px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 28px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const UnitCard = styled(Card)`
  width: 48%;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const UnitImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
`;

const DetailsContainer = styled.div`
  padding: 16px;
`;

const UnitInfo = styled.div`
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const BookedUnit = () => {
  const [bookedUnits, setBookedUnits] = useState([]);

  useEffect(() => {
    const fetchBookedUnits = async () => {
      try {
        const reservationCollectionRef = collection(db, "reservation");
        const querySnapshot = await getDocs(reservationCollectionRef);

        const units = [];
        querySnapshot.forEach((doc) => {
          units.push({ id: doc.id, ...doc.data() });
        });

        setBookedUnits(units);
      } catch (error) {
        console.error("Error fetching booked units:", error);
      }
    };

    fetchBookedUnits();
  }, []);

  const handleCancelBooking = async (bookingId) => {
    try {
      await deleteDoc(doc(db, "reservation", bookingId));
      setBookedUnits((prevUnits) =>
        prevUnits.filter((unit) => unit.id !== bookingId)
      );
    } catch (error) {
      console.error("Error canceling booking:", error);
    }
  };

  const handleStayCompleted = (bookingId) => {
    // Implement the logic for marking the stay as completed as needed
    console.log("Stay completed for booking ID:", bookingId);
  };

  return (
    <Container>
      <Heading>Booked Units</Heading>
      {bookedUnits.map((unit, index) => (
        <UnitCard key={index}>
          <UnitImage src={unit.roomDetails.Img} alt={unit.roomDetails.name} />
          <DetailsContainer>
            <UnitInfo>
              <Typography variant="h5">{unit.roomDetails.name} Unit</Typography>
              <Typography>Date: {unit.roomDetails.Date}</Typography>
              <Typography>Guest: {auth.currentUser.email}</Typography>
              <Typography>
                Bathrooms: {unit.roomDetails.Specifications.bathrooms}
              </Typography>
            </UnitInfo>
            {unit.check_in && (
              <Typography>
                Check-in:{" "}
                {unit.check_in.toDate().toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </Typography>
            )}
            {unit.check_out && (
              <Typography>
                Check-out:{" "}
                {unit.check_out.toDate().toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </Typography>
            )}
            <Typography>
              Booked at: {unit.timestamp.toDate().toLocaleString()}
            </Typography>
            <ButtonContainer>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleCancelBooking(unit.id)}>
                Cancel Booking
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleStayCompleted(unit.id)}>
                Stay Completed
              </Button>
            </ButtonContainer>
          </DetailsContainer>
        </UnitCard>
      ))}
    </Container>
  );
};

export default BookedUnit;
