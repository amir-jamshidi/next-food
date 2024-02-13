import MealItem from "@/components/modules/MealItem/MealItem";
import TitleSection from "@/components/modules/TitleSection/TitleSection";
import { getMeals } from "@/libs/requests";
import React from "react";

const BeverageSection = async () => {
  const beverages = await getMeals("beverage");
  
  return (
    <div>
      <TitleSection title={"نوشیدنی"} />
      <div className="grid grid-cols-4 gap-2 my-12">
        {beverages.map((beverage) => (
          <MealItem key={beverage._id} meal={beverage} />
        ))}
      </div>
    </div>
  );
};

export default BeverageSection;
