import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faMoneyBillWave,
  faBath,
  faDumbbell,
  faCar,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import Footer from "../Footer/Footer";
import Newsletter from "../newsletter/Newsletter";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const Container = styled.div``;
const Image = styled.div``;
const UnitDesc = styled.div``;
const Name = styled.h5``;

const ViewRooms = () => {
  const { unitId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const roomDocRef = doc(db, "bookings", unitId);
        const roomSnapshot = await getDoc(roomDocRef);

        if (roomSnapshot.exists()) {
          setRoomDetails(roomSnapshot.data());
        } else {
          console.log("Room not found.");
        }
      } catch (error) {
        console.error("Error fetching room details:", error);
      }
    };

    fetchRoomDetails();
  }, [unitId]);

  if (!roomDetails) {
    return <div>Loading...</div>;
  }

  // Function to handle Paystack payment
  const handlePaystackPayment = () => {
    // Replace with your Paystack public key
    const publicKey = "pk_test_e2727380bb9d57851e6db041e8e538d206fd13fb";

    // Amount should be in kobo (i.e., amount * 100)
    const amountInKobo = roomDetails.price * 100;

    // Generate the reference here, after roomDetails is available
    const reference = `room_${roomDetails.id}_${Date.now()}`;

    // Initialize Paystack payment
    const paystack = window.PaystackPop.setup({
      key: publicKey,
      email: "Mphochuene42@gmail.com", // Replace with the customer's email
      amount: amountInKobo,
      currency: "ZAR", // Replace with the appropriate currency code
      ref: reference, // Use the dynamically generated reference
      callback: (response) => {
        // Handle the Paystack callback, e.g., update your database
        console.log(response);
      },
    });

    // Open the Paystack payment dialog
    paystack.openIframe();

    const addReservation = async () => {
      try {
        const reservationRef = collection(db, "reservation"); // Reference to the 'reservation' collection
        const newReservation = {
          roomDetails: roomDetails, // You can modify this structure as needed
          timestamp: new Date(), // You can add a timestamp to the reservation
        };

        // Add the reservation to the 'reservation' collection
        await addDoc(reservationRef, newReservation);

        console.log("Reservation added to Firestore");
      } catch (error) {
        console.error("Error adding reservation to Firestore:", error);
      }
    };

    // Call the function to add the reservation after payment
    addReservation();
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Navbar />
      <Slider {...carouselSettings}>
        <Image>
          <img src={roomDetails.Img} />
        </Image>
      </Slider>

      <UnitDesc>
        <Name>Private room in resort in Thabo Mofutsanyane</Name>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            listStyleType: "none",
          }}>
          <li style={{ marginRight: "30px" }}>guest</li>
          <li style={{ marginRight: "30px" }}>bedrooms</li>
          <li style={{ marginRight: "30px" }}>beds</li>
          <li style={{ marginRight: "30px" }}>baths</li>
        </div>
        
      </UnitDesc>

      {/* <div className={styles.Specifications}>
        <h2>Room Specifications</h2>
        <p>
          <FontAwesomeIcon icon={faMoneyBillWave} /> Price: R
          {roomDetails.price || "N/A"}
          <br />
          <FontAwesomeIcon icon={faBed} /> Bedrooms:{" "}
          {roomDetails.Specifications?.bedrooms || "N/A"}
          <br />
          <FontAwesomeIcon icon={faBath} /> Bathrooms:{" "}
          {roomDetails.Specifications?.bathrooms || "N/A"}
          <br />
          <FontAwesomeIcon icon={faDumbbell} /> Gym:{" "}
          {roomDetails.Specifications?.hasGym ? "Yes" : "No"}
          <br />
          <FontAwesomeIcon icon={faCar} /> Free Parking:{" "}
          {roomDetails.Specifications?.hasFreeParking ? "Yes" : "No"}
          <br />
          <FontAwesomeIcon icon={faShieldAlt} /> 24-Hr Security:{" "}
          {roomDetails.Specifications?.has24HrSecurity ? "Yes" : "No"}
          <br />
        </p>
        <button onClick={handlePaystackPayment}>Checkout</button>
      </div> */}
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ViewRooms;
