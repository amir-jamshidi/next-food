import MealItem from "@/components/modules/MealItem/MealItem";
import MoreSection from "@/components/modules/MoreSection/MoreSection";
import TitleSection from "@/components/modules/TitleSection/TitleSection";
import { getMeals } from "@/libs/requests";
import React from "react";

const DessertSection = async () => {
  const {meals:desserts} = await getMeals("dessert");
  return (
    <div>
      <TitleSection title={"دسـر"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-1.5 mt-12">
        {desserts.map((desserts) => (
          <MealItem key={desserts._id} meal={desserts} />
        ))}
      </div>
      <MoreSection href={"dessert"} />
    </div>
  );
};

export default DessertSection;
