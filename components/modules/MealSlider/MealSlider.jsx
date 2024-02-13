"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import MealItem from "../MealItem/MealItem";

const MealSlider = ({ meals }) => {
  return (
    <>
      <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
        {meals.map((meal) => (
        //   <SwiperSlide key={meal._id}>
        //     <MealItem meal={meal}/>
        //   </SwiperSlide>
        <></>
        ))}
      </Swiper>
    </>
  );
};

export default MealSlider;
