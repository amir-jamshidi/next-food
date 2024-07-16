"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import axios from "axios";
import { useQuery } from "react-query";
import MealItem from "@/components/modules/MealItem/MealItem";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const AdditionalSlider = () => {

  const { data: { data: meals = [] } = {} } = useQuery({
    queryKey: ["additional"],
    queryFn: () => axios.get("/api/category/additional"),
  });

  return (
    <div className="mt-7">
      <Swiper
        loop
        slidesPerView={4}
        spaceBetween={10}
        modules={[Autoplay]}
        autoplay={{ delay: 3000, waitForTransition: false }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper rounded-2xl"
      >
        {meals.map((meal) => (
          <SwiperSlide
            className="bg-white dark:bg-gray-800 rounded-2xl"
            key={meal._id}
          >
            <MealItem meal={meal} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdditionalSlider;
