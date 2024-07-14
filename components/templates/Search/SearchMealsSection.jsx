import MealItem from "@/components/modules/MealItem/MealItem";
import React from "react";

const SearchMealsSection = ({ meals = [] }) => {
  return (
    <>
      {meals.length ? (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-1.5">
          {meals.map((meal) => (
            <MealItem key={meal._id} meal={meal} />
          ))}
        </div>
      ) : (
        <div className="h-72 mt-4 bg-white dark:bg-gray-800 rounded-2xl flex justify-center items-center">
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">چیزی که دنبالشی پیدا نشد !!!</p>
        </div>
      )}
    </>
  );
};

export default SearchMealsSection;
