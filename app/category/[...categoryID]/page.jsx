import MealItem from "@/components/modules/MealItem/MealItem";
import { getMeals } from "@/libs/requests";
import { CancelRounded, SortRounded } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import categoryModel from "@/models/category";
import { notFound } from "next/navigation";
export async function generateMetadata({ params }) {
  const category = await categoryModel
    .findOne({ href: `/${params.categoryID}` })
    .select("title");
  return {
    title: `نکست فود | منوی ${category?.title || ""}`,
  };
}
const Category = async ({ params, searchParams }) => {
  const meals = await getMeals(params.categoryID, searchParams?.sort);

  if (!meals) notFound();

  return (
    <div>
      <div className="flex items-center mt-8">
        <span className="flex-1 inline-block h-px bg-black/5 dark:bg-gray-700"></span>
        <h1 className="text-center text-3xl font-morabba-bold mx-5 text-red-500">
          {meals[0].categoryID.title}
        </h1>
        <span className="flex-1 inline-block h-px bg-black/5 dark:bg-gray-700"></span>
      </div>
      <div className="flex justify-between dark:bg-gray-800 bg-white rounded-xl py-3 mb-4 mt-12 px-4">
        <div className="flex-1 gap-x-3 flex">
          <span>
            <SortRounded className="text-gray-700 dark:text-gray-200 " />
          </span>
          <Link href={`/category/${params.categoryID}?sort=popular`}>
            <span className="text-gray-600 dark:text-gray-300 cursor-pointer dark:hover:text-red-500 hover:text-red-500 transition-colors">
              محبوبترین
            </span>
          </Link>
          <Link href={`/category/${params.categoryID}?sort=inexpensive`}>
            <span className="text-gray-600 dark:text-gray-300 cursor-pointer dark:hover:text-red-500 hover:text-red-500 transition-colors">
              ارزانترین
            </span>
          </Link>
          <Link href={`/category/${params.categoryID}?sort=expensive`}>
            <span className="text-gray-600 dark:text-gray-300 cursor-pointer dark:hover:text-red-500 hover:text-red-500 transition-colors">
              گرانترین
            </span>
          </Link>
        </div>
        {searchParams.sort && (
          <div className="flex flex-1 justify-end md:justify-start gap-x-1.5">
            <p className="text-gray-700 dark:text-gray-300 hidden md:inline-block">
              فیلتر اعمال شده :{" "}
            </p>
            <div className="relative">
              <span className="bg-red-500 rounded-full px-3 py-1 pl-6 text-gray-100 text-sm">
                {searchParams?.sort === "popular"
                  ? "محبوبترین"
                  : searchParams?.sort === "expensive"
                  ? "گرانترین"
                  : searchParams.sort === "inexpensive"
                  ? "ارزانترین"
                  : ""}
              </span>
              <Link
                className="inline-block rounded-full absolute left-1.5 top-0"
                href={`/category/${params.categoryID}`}
              >
                <CancelRounded fontSize="small text-white" />
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {meals.map((meal) => (
          <MealItem key={meal._id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Category;