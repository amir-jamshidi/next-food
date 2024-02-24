"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useQuery } from "react-query";
import axios from "axios";
import MealItem from "@/components/modules/MealItem/MealItem";

// import required modules

const AdditionalSlider = () => {
  const { data: { data: meals = [] } = {} } = useQuery(
    ["category/additional"],
    () => axios.get("/api/category/additional")
  );
  return (
    <div className="mt-7">
      <Swiper loop slidesPerView={4} spaceBetween={10} className="mySwiper rounded-2xl">
        {meals.map((meal) => (
          <SwiperSlide className="bg-white dark:bg-gray-800 rounded-2xl" key={meal._id}>
            <MealItem meal={meal} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdditionalSlider;
