import React from "react";
import Product from "./product";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slideproduct.css";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

export default function SlideProduct({ data = [], title }) {
  // 👈 1. فلترة البيانات أولاً لإزالة أي عنصر undefined أو مالوش title
  const validData = data?.filter((item) => item && item.title) || [];

  // لو القسم كله مفيش فيه منتجات صحيحة، ما ترسمش السلايدر خالص
  if (validData.length === 0) return null;

  return (
    <div className="slide_product">
      <div className="container">
        <div className="top_slide">
          <h2>{title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <Swiper
          navigation={true}
          slidesPerView={5}
          spaceBetween={15}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          loop={validData.length > 5}
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {/* 👈 2. عمل map للمصفوفة المفلترة فقط */}
          {validData.map((item) => (
            <SwiperSlide key={item.id}>
              <Product item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
