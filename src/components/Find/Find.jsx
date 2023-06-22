import React from "react";
import styles from "./Find.module.css";
import Card from "./Card";
import { Navigation, Pagination, Scrollbar, Ally } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/Navigation";

const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Find your stay</h1>
        <div className={styles.text_bg}>
          <p>
            {" "}
            <span>explore South Africa's luxury accomodation</span>
          </p>
        </div>
        <div className={styles.slider}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Ally]}
            spaceBetween={10}
            slidesPerView={5}
            navigation
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Card image="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Find;
