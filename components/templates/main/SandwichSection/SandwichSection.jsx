import MealItem from "@/components/modules/MealItem/MealItem";
import MoreSection from "@/components/modules/MoreSection/MoreSection";
import TitleSection from "@/components/modules/TitleSection/TitleSection";
import { getMeals } from "@/libs/requests";
import React from "react";

const SandwichSection = async () => {
  const {meals:sandwiches} = await getMeals("sandwich");
  return (
    <div>
      <TitleSection title={"ساندویــچ"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-1.5 mt-12">
        {sandwiches.map((sandwich) => (
          <MealItem key={sandwich._id} meal={sandwich} />
        ))}
      </div>
      <MoreSection href={"sandwich"} />
    </div>
  );
};

export default SandwichSection;
