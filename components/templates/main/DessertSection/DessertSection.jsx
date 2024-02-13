import MealItem from "@/components/modules/MealItem/MealItem";
import TitleSection from "@/components/modules/TitleSection/TitleSection";
import { getMeals } from "@/libs/requests";
import React from "react";

const DessertSection = async () => {
  const desserts = await getMeals("dessert");
  return (
    <div>
      <TitleSection title={"دسـر"} />
      <div className="grid grid-cols-4 gap-2 my-12">
        {desserts.map((desserts) => (
          <MealItem key={desserts._id} meal={desserts} />
        ))}
      </div>
    </div>
  );
};

export default DessertSection;
