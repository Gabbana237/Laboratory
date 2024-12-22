import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import des styles Swiper
import "swiper/css";
import "swiper/css/pagination";
import "../styles/swiper.css";

const Carousel = () => {
  return (
    <div className="carousel-container relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet", // Classe de base pour les bullets
          bulletActiveClass: "swiper-pagination-bullet-active", // Classe pour la bullet active
        }}
        loop
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img
            src="/images/carousel4.webp"
            alt="Laboratoire 1"
            className="w-full h-[500px] object-cover"
          />
          {/* Dégradé fumée */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-darkGreen to-transparent"></div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="/images/carousel5.jpeg"
            alt="Laboratoire 2"
            className="w-full h-[500px] object-cover"
          />
          {/* Dégradé fumée */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-darkGreen to-transparent"></div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="/images/carousel8.jpg"
            alt="Laboratoire 3"
            className="w-full h-[500px] object-cover"
          />
          {/* Dégradé fumée */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-darkGreen to-transparent"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
