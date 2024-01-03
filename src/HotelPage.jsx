import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Newsletter from "./components/newsletter/Newsletter.jsx";
import Rooms from "./components/Rooms/Rooms.jsx";

const HotelPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Rooms />
      <Newsletter />
      <Footer />
    </>
  );
};

export default HotelPage;
