import MealItem from "@/components/modules/MealItem/MealItem";
import { getMeals } from "@/libs/requests";
import React from "react";

const Category = async ({ params }) => {
  const meals = await getMeals(params.categoryID);

  return (
    <div>
      <div className="flex items-center mt-8">
        <span className="flex-1 inline-block h-px bg-black/5"></span>
        <h1 className="text-center text-3xl font-morabba-bold mx-5 text-red-500">
          {meals[0].categoryID.title}
        </h1>
        <span className="flex-1 inline-block h-px bg-black/5"></span>
      </div>
      <div className="grid grid-cols-4 gap-2 my-12">
        {meals.map((meal) => (
          <MealItem key={meal._id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Category;
