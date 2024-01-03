import React, { useEffect, useState } from "react";
import { db, auth } from "../../firebase-config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import styled from "styled-components";
import { Card, CardContent, Typography, Button } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 420px;
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const UnitCard = styled(Card)`
  width: 80%;
  margin-bottom: 20px;
`;

const UnitImage = styled.img`
  width: 100%;
  height: auto;
`;

const DetailsContainer = styled.div`
  padding: 16px;
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
          <div>

          <UnitImage src={unit.roomDetails.Img} alt={unit.roomDetails.name} />
          <DetailsContainer>
            <Typography variant="h5">{unit.roomDetails.name} Unit</Typography>
            <Typography>Date: {unit.roomDetails.Date}</Typography>
            <Typography>Guest: {auth.currentUser.email}</Typography>
            <Typography>
              Bathrooms: {unit.roomDetails.Specifications.bathrooms}
            </Typography>

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

            {/* Buttons for canceling booking and marking stay as completed */}
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
          </DetailsContainer>
          </div>
        </UnitCard>
      ))}
    </Container>
  );
};

export default BookedUnit;
