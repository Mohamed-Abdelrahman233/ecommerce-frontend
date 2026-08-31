import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";

import "./home.css";
import { Link } from "react-router-dom";

export default function HomeSlider() {
  return (
    <div className="hero">
      <div className="container"></div>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="content">
            <div className="info">
              <h4>Introducing</h4>
              <h3>
                Microsoft Xbox
                <br /> 360 Controller
              </h3>
              <p>Windows XP/10/7/8/PS3, TV Box</p>
              <Link to="/" className="btn">
                Shop now
              </Link>
            </div>
            <img src="/src/img/banner_Hero2.jpg" alt="slider" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="content">
            <div className="info">
              <h4>Introducing</h4>
              <h3>
                Microsoft Xbox
                <br /> 360 Controller
              </h3>
              <p>Windows XP/10/7/8/PS3, TV Box</p>
              <Link to="/" className="btn">
                Shop now
              </Link>
            </div>
            <img src="/src/img/banner_Hero3.jpg" alt="slider" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="content">
            <div className="info">
              <h4>Introducing</h4>
              <h3>
                Microsoft Xbox
                <br /> 360 Controller
              </h3>
              <p>Windows XP/10/7/8/PS3, TV Box</p>
              <Link to="/" className="btn">
                Shop now
              </Link>
            </div>
            <img src="/src/img/banner_Hero1.jpg" alt="slider" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
