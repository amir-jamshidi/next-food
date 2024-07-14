import MealItem from "@/components/modules/MealItem/MealItem";
import React from "react";

const SearchMealsSection = ({ meals = [] }) => {
  return (
    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-1.5">
      {meals.map((meal) => (
        <MealItem key={meal.key} meal={meal} />
      ))}
    </div>
  );
};

export default SearchMealsSection;
