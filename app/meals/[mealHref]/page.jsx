import { getMeal } from "@/libs/requests";
import React from "react";
import imgSam from "@/public/images/pizzasam.png";
import Image from "next/image";
import MealBuyBox from "@/components/templates/meal/MealBuyBox/MealBuyBox";
const page = async ({ params: { mealHref } }) => {
  const meal = await getMeal(mealHref);
  const sizes = meal.sizes.map((size) => {
    return {
      size: size.size,
      price: size.price,
      _id: String(size._id),
    };
  });
  return (
    <div>
      <div className="my-8 bg-white p-4 rounded-2xl">
        <div className="grid grid-cols-2">
          <div className="relative flex justify-center items-center">
            <Image
              src={imgSam}
              fill
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="my-6 flex flex-col justify-center">
            <div className="flex flex-col gap-y-2">
              <h1 className="font-morabba-bold text-red-500 text-2xl text-center">
                {meal.name}
              </h1>
              <p className="text-gray-700 mt-3">{meal.description}</p>
            </div>
            <MealBuyBox mealID={String(meal._id)} sizes={sizes} />
            <span>s</span>
            <p></p>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
