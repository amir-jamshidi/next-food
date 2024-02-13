import MealItem from "@/components/modules/MealItem/MealItem";
import MealSlider from "@/components/modules/MealSlider/MealSlider";
import TitleSection from "@/components/modules/TitleSection/TitleSection";
import { getMeals } from "@/libs/requests";
import React from "react";

const SandwichSection = async () => {
  const sandwiches = await getMeals("sandwich");
  return (
    <div>
      <TitleSection title={"ساندویــچ"} />
      <div className="grid grid-cols-4 gap-2 my-12">
        {sandwiches.map((sandwich) => (
          <MealItem key={sandwich._id} meal={sandwich} />
        ))}
      </div>
    </div>
  );
};

export default SandwichSection;
