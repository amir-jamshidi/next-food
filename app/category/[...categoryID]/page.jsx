import MealItem from "@/components/modules/MealItem/MealItem";
import { getMeals } from "@/libs/requests";
import { SortRounded } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const Category = async ({ params, searchParams }) => {
  const meals = await getMeals(params.categoryID, searchParams?.sort);

  return (
    <div>
      <div className="flex items-center mt-8">
        <span className="flex-1 inline-block h-px bg-black/5"></span>
        <h1 className="text-center text-3xl font-morabba-bold mx-5 text-red-500">
          {meals[0].categoryID.title}
        </h1>
        <span className="flex-1 inline-block h-px bg-black/5"></span>
      </div>
      <div className="bg-white rounded-xl py-3 mb-4 mt-12 px-4 gap-x-3 flex">
        <span>
          <SortRounded className="text-gray-700 " />
        </span>
        <Link href={"/category/pizza?sort=popular"}>
          <span className="text-gray-600 cursor-pointer hover:text-red-500 transition-colors">
            محبوبترین
          </span>
        </Link>
        <Link href={"/category/pizza?sort=inexpensive"}>
          <span className="text-gray-600 cursor-pointer hover:text-red-500 transition-colors">
            ارزانترین
          </span>
        </Link>
        <Link href={"/category/pizza?sort=expensive"}>
          <span className="text-gray-600 cursor-pointer hover:text-red-500 transition-colors">
            گرانترین
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {meals.map((meal) => (
          <MealItem key={meal._id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Category;
