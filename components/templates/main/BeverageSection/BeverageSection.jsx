import MealItem from "@/components/modules/MealItem/MealItem";
import MoreSection from "@/components/modules/MoreSection/MoreSection";
import TitleSection from "@/components/modules/TitleSection/TitleSection";
import { getMeals } from "@/libs/requests";
import React from "react";

const BeverageSection = async () => {
  const {meals:beverages} = await getMeals("beverage");

  return (
    <div>
      <TitleSection title={"نوشیدنی"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-1.5 mt-12">
        {beverages.map((beverage) => (
          <MealItem key={beverage._id} meal={beverage} />
        ))}
      </div>
      <MoreSection href={"/category/beverage"} />
    </div>
  );
};

export default BeverageSection;
