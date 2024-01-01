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
import { Box, Button, Modal, Rating, Typography } from "@mui/material";
import {
  Bathtub,
  FitnessCenter,
  LocalParking,
  Pool,
  PoolOutlined,
  Restaurant,
  Tv,
} from "@mui/icons-material";

const Container = styled.div`
  background-color: "#fff";
`;
const Image = styled.div``;
const UnitDesc = styled.div`
  border-bottom: 1px solid grey;
  width: 70%;
`;
const Name = styled.h5``;
const Divider = styled.div`
  border-bottom: 1px solid grey;
  width: 70%;
  margin-top: 2dvh;
`;

const Text = styled.p``;

const Heading = styled.h6``;

const MainContainer = styled.div``;
const SubContainer = styled.div``;
const BookingContainer = styled.div``;

const ViewRooms = () => {
  const { unitId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <MainContainer>
      <Navbar />

      <Container
        style={{
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}>
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
            <li style={{ marginRight: "30px" }}>8 guest</li>
            <li style={{ marginRight: "30px" }}>4 bedrooms</li>
            <li style={{ marginRight: "30px" }}>6 beds</li>
            <li style={{ marginRight: "30px" }}>4 baths</li>
          </div>
          <Rating name="size-small" defaultValue={5} size="small" readOnly />
          <BookingContainer>
            <Heading>PRICE ZAR</Heading>
            <button
              style={{
                backgroundColor: "yellow",
                color: "#000",
                width: "10%",
                height: "5dvh",
                justifyContent: "center",
                display: "flex",
                marginTop: "0px",
              }}>
              Reserve
            </button>
          </BookingContainer>
        </UnitDesc>
        <Divider>
          <Heading
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}>
            {" "}
            <PoolOutlined style={{ marginRight: "10px" }} />
            DIVE RIGHT IN
          </Heading>
          <Text>this is one of the few units with a private pool</Text>
        </Divider>
        <Divider>
          <Heading>The space</Heading>
          <Text>
            Fully self catering, free standing Villa sleeping a maximum 8 people
            Main bedroom has a king size bed with en-suite bathroom Second
            bedroom has twin beds with a en-suite bathroom Third bedroom has a
            queen size bed with en-suite bathroom Fourth bedroom has twin
            beds.....
          </Text>
          <button
            onClick={handleOpen}
            style={{
              backgroundColor: "whitesmoke",
              color: "#000",
              width: "12%",
              height: "5dvh",
              justifyContent: "center",
              display: "flex",
              marginTop: "0px",
            }}>
            <Text style={{ textAlign: "center" }}> show more </Text>
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "& .MuiPaper-root": {
                maxHeight: "100vh", // Set a maximum height for the modal
                overflowY: "auto", // Enable vertical scrolling if content exceeds maxHeight
              },
            }}>
            <div
              style={{
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                padding: "20px", // Adjust padding as needed
                borderRadius: "20px",
                maxHeight: "95vh", // Set a maximum height to enable scrolling
                overflowY: "auto", // Enable vertical scrolling
                height: "100%", // Allow the height to adjust based on content
                width: "50%",
              }}>
              <Typography
                id="modal-modal-title"
                variant="h5"
                component="h5"
                style={{ fontWeight: "bold",marginBottom:'10px' }}>
                About this unit
              </Typography>
              <Text>
                Fully self catering, free standing Villa sleeping a maximum 8
                people Main bedroom has a king size bed with en-suite bathroom
                Second bedroom has twin beds with a en-suite bathroom Third
                bedroom has a queen size bed with en-suite bathroom Fourth
                bedroom has twin beds Lounge with fire place Fully equipped
                kitchen with dishwasher TV with selected DSTV channels
                Entertainment area with braai, splash pool and fire pit Serviced
                daily except Sundays and Public Holidays
              </Text>

              <Heading>Guest access</Heading>
              <div
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}>
                <li>BBQ Area</li>
                <li>Security Parking (charges apply)</li>
                <li>WiFi Internet</li>
                <li>Day Spa</li>
                <li>Guest Laundry</li>
                <li> Indoor Swimming Pool</li>
                <li>Heated Pool</li>
                <li>On Site Restaurant</li>
              </div>
              <Heading style={{ marginTop: "2vh" }}>
                Other things to note
              </Heading>
              <Text>
                Only a person over 18 years may sign the Guest Registration Card
                at check-in. The indemnifier must remain in occupation for the
                duration of the stay. Please contact the resort directly in
                advance to make arrangements for late arrivals or arrivals on a
                Sunday/Public holidays. A security fee of R1000 will be taken as
                a pre-authorisation upon arrival. Check out time is strictly
                10:00 am daily. The use of braai’s (barbeques) is restricted to
                accommodation where the facility is provided at the unit itself.
                Specific amenities and facilities may be subject to a fee.
                Smoking in units, on patios, or any of the other buildings on
                the resort premises is not allowed by law. Should Management, at
                their discretion, find that you and/ or your party has violated
                this policy, you will be liable to pay a fine. We accept no
                liability whatsoever for any injury, death, loss, damage, or
                expense suffered by you, your guests, or anyone else taking
                occupation with you, arising from any act of God, theft, strike,
                fire or the acts or omissions of any other person, including but
                not limited to the local or national government, limitations,
                restrictions and requirements for visas, permits, licenses and
                certificates on border controls and immigration (if applicable),
                military, police and security services intervention,
                international and local travel, movement of goods and persons,
                occupation of accommodation and the use and enjoyment of
                facilities, amenities and public and private venues, while under
                the jurisdiction of such local or national government. Day
                Visitors will be allowed subject to 24 hours prior notice
                directly to the resort. Kindly note the number of guests will
                not be allowed to exceed the max sleeper size per unit.
              </Text>
            </div>
          </Modal>
        </Divider>
        <Divider>
          <Heading>what this place offers</Heading>
          <div
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              fontSize: "13px",
              fontWeight: "bold",
              marginTop: "20px",
            }}>
            <li>
              <Restaurant style={{ marginRight: "10px" }} /> Kitchen
            </li>
            <li>
              <Pool style={{ marginRight: "10px" }} /> Pool
            </li>
            <li>
              <Bathtub style={{ marginRight: "10px" }} /> Bathtub
            </li>
            <li>
              <LocalParking style={{ marginRight: "10px" }} />
              Free parking on premises
            </li>
            <li>
              <Tv style={{ marginRight: "10px" }} /> TV
            </li>
            <li>
              <FitnessCenter style={{ marginRight: "10px" }} /> Gym
            </li>
          </div>
        </Divider>

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
      </Container>

      <Newsletter />
      <Footer />
    </MainContainer>
  );
};

export default ViewRooms;
