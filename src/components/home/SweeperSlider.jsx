import React from 'react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Heroslider from './Heroslider';
import img from "../../../src/assets/blog1.jpeg";
const SweeperSlider = () => {
    const slideDetails = [
      {
        id:1,
        title: "Welcome to our Service center",
        subtitle: "Lorem ipsum dolor sit amet.",
        img: img,
      },
      {
        id:2,
        title: "Welcome to our Service center",
        subtitle: "Lorem ipsum dolor sit amet.",
        img: img,
      },
      {
        id:3,
        title: "Welcome to our Service center",
        subtitle: "Lorem ipsum dolor sit amet.",
        img: img,
      },
      {
        id:4,
        title: "Welcome to our Service center",
        subtitle: "Lorem ipsum dolor sit amet.",
        img: img,
      }
    ];
    return (
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slideDetails.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Heroslider title={slide.title} subtitle={slide.subtitle} img={slide.img}/>
          </SwiperSlide>
        ))}
      </Swiper>
    );
};

export default SweeperSlider;