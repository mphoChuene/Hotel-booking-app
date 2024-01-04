import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import Carousel from "react-material-ui-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faMoneyBillWave,
  faBath,
  faDumbbell,
  faCar,
  faShieldAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import Footer from "../Footer/Footer";
import Newsletter from "../newsletter/Newsletter";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  MenuItem,
  Modal,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import {
  Bathtub,
  FitnessCenter,
  LocalParking,
  Pool,
  PoolOutlined,
  Restaurant,
  Tv,
} from "@mui/icons-material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: "#fff";
`;

const UnitDesc = styled.div`
  border-bottom: 1px solid grey;
  width: 70%;
  display: "flex";
  flex-direction: "row";
  margin-top: 5dvh;
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

const currencies = [
  {
    value: "1",
    label: "One",
  },
  {
    value: "2",
    label: "Two",
  },
  {
    value: "3",
    label: "Three",
  },
  {
    value: "4",
    label: "Four",
  },
  {
    value: "5",
    label: "Five",
  },
  {
    value: "6",
    label: "Six",
  },
  {
    value: "7",
    label: "Seven",
  },
  {
    value: "8",
    label: "Eight",
  },
  {
    value: "9",
    label: "Nine",
  },
];
const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column; /* Update to column or row based on your design */
  align-items: center;
  margin-top: 20px;
`;

const Image = styled.div`
  position: relative;

  img {
    width: 100%;
    max-height: 500px;
    height: auto;
    margin-bottom: 20px;
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 10px;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: auto;
  margin: 0 5px;
  cursor: pointer;
`;

const ViewRooms = () => {
  const { unitId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [checkin, setCheckin] = useState(null);
  const [checkout, setCheckout] = useState(null);
  const [guest, setGuest] = useState("");
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

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
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchRoomDetails();
  }, [unitId]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Full height of the viewport
        }}>
        <CircularProgress />
      </div>
    );
  }

  if (!roomDetails) {
    return <div>No data available</div>;
  }

  // Function to handle Paystack payment
  const handlePaystackPayment = () => {
    // Check if checkin, checkout, and guest are set
    if (!checkin || !checkout || !guest) {
      console.error("Check-in, check-out, and guest information are required.");
      return;
    }

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

        // Call the function to add the reservation after payment
        addReservation();
      },
    });

    // Open the Paystack payment dialog
    paystack.openIframe();
  };

  // Function to add reservation to Firestore
  const addReservation = async () => {
    try {
      const reservationRef = collection(db, "reservation"); // Reference to the 'reservation' collection
      const newReservation = {
        roomDetails: roomDetails, // You can modify this structure as needed
        timestamp: serverTimestamp(), // Use server timestamp
        check_in: checkin instanceof Date ? checkin : new Date(checkin),
        check_out: checkout instanceof Date ? checkout : new Date(checkout),
        guest: guest,
      };

      // Add the reservation to the 'reservation' collection
      await addDoc(reservationRef, newReservation);

      console.log("Reservation added to Firestore");
    } catch (error) {
      console.error("Error adding reservation to Firestore:", error);
    }
  };
  const carouselSettings = {
    animation: "slide",
    indicators: true,
    timeout: 600,
    autoplay: true,
    interval: 2000,
    navButtonsAlwaysInvisible: false,
    clickToChange: true,
    centerSlidePercentage: 80,
    responsive: {
      0: {
        centerSlidePercentage: 100,
      },
      600: {
        centerSlidePercentage: 80,
      },
      1024: {
        centerSlidePercentage: 70,
      },
    },
    containerClass: "custom-carousel-container",
  };

  const StyledCarousel = styled(Carousel)`
    width: 100%;
    max-width: 800px; /* Adjust the max-width as needed */
    margin: 0 auto;
    overflow: hidden;

    .slick-prev,
    .slick-next {
      font-size: 24px;
      color: white;
      background-color: #007bff;
      // border-radius: 50%;
      width: 10px;
      padding: 10px;
      z-index: 1;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }
    }

    .slick-prev {
      left: 10px;
    }

    .slick-next {
      right: 10px;
    }

    .slick-dots {
      bottom: 10px;

      li {
        button {
          font-size: 12px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin: 0 5px;
          background-color: #007bff;
          color: transparent;
          transition: background-color 0.3s ease;

          &:hover,
          &.slick-active {
            background-color: #0056b3;
          }
        }
      }
    }
  `;

  // console.log(roomDetails.Img[0]);

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
        <CarouselContainer style={{ display: "flex", flexDirection: "column" }}>
          {roomDetails.Img && roomDetails.Img.length > 0 ? (
            <StyledCarousel {...carouselSettings}>
              {roomDetails.Img.map((image, index) => (
                <Image key={index}>
                  <img
                    src={image}
                    alt={`Image ${index}`}
                    style={{
                      height: "80dvh",
                      width: "100%",
                      marginTop: "20px",
                    }}
                  />
                </Image>
              ))}
            </StyledCarousel>
          ) : (
            <div>No images available</div>
          )}
          <ThumbnailContainer>
            {roomDetails.carouselImages &&
              roomDetails.carouselImages.length > 0 &&
              roomDetails.carouselImages.map((image, index) => (
                <Thumbnail
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  onClick={() => Slider.slickGoTo(index)}
                />
              ))}
          </ThumbnailContainer>
        </CarouselContainer>

        <UnitDesc
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <SubContainer>
            <Name>Private room in resort in Thabo Mofutsanyane</Name>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                listStyleType: "none",
              }}>
              <li style={{ marginRight: "30px" }}>
                {roomDetails.Specifications.bedrooms} guests{" "}
              </li>
              <li style={{ marginRight: "30px" }}>
                {" "}
                {roomDetails.Specifications.bedrooms} bedrooms
              </li>
              <li style={{ marginRight: "30px" }}>
                {roomDetails.Specifications.bedrooms} beds
              </li>
              <li style={{ marginRight: "30px" }}>
                {roomDetails.Specifications.bathrooms} baths
              </li>
            </div>
            <Rating name="size-small" defaultValue={5} size="small" readOnly />
            <button
              style={{
                backgroundColor: "yellow",
                color: "#000",
                width: "20%",
                height: "5dvh",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                display: "flex",
                marginTop: "0px",
              }}
              onClick={handlePaystackPayment}>
              Reserve
            </button>
          </SubContainer>
          <Box
            sx={{
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.6)",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "10px",
            }}>
            <BookingContainer>
              <Heading>
                PRICE: R{roomDetails.price || "N/A"} ZAR per night
              </Heading>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  // backgroundColor: "blue",
                  alignItems: "center",
                }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <SubContainer
                      style={{ display: "flex", flexDirection: "column" }}>
                      <label style={{ marginLeft: 10 }}>check-in</label>
                      <DatePicker
                        value={checkin}
                        onChange={(newValue) => setCheckin(newValue)}
                        sx={{ width: "10vw", margin: "10px", padding: 0 }}
                      />
                    </SubContainer>
                    <SubContainer
                      style={{ display: "flex", flexDirection: "column" }}>
                      <label style={{ marginLeft: 10 }}>check-out</label>
                      <DatePicker
                        value={checkout}
                        onChange={(newValue) => setCheckout(newValue)}
                        sx={{ width: "10vw", margin: "10px", padding: 0 }}
                      />
                    </SubContainer>
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <Text>Guests</Text>
              <TextField
                id="outlined-select-guests"
                select
                label="Select"
                defaultValue="1"
                value={guest}
                onChange={(e) => setGuest(e.target.value)}
                helperText="Please select the number of guests"
                sx={{ width: "22vw" }}
                InputLabelProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faUsers} />
                    </InputAdornment>
                  ),
                }}>
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </BookingContainer>
          </Box>
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
                style={{ fontWeight: "bold", marginBottom: "10px" }}>
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
