import MealItem from "@/components/modules/MealItem/MealItem";
import { getMeals } from "@/libs/requests";
import { CancelRounded, SortRounded } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import categoryModel from "@/models/category";
import { notFound } from "next/navigation";
import NoItemSection from "@/components/modules/NoItemSection/NoItemSection";
export async function generateMetadata({ params }) {
  const category = await categoryModel
    .findOne({ href: `/${params.categoryID}` })
    .select("title");
  return {
    title: `نکست فود | منوی ${category?.title || ""}`,
  };
}
const Category = async ({ params, searchParams }) => {
  const details = await getMeals(params.categoryID, searchParams?.sort);
  if (!details) notFound();
  const { meals, categoryDetails } = details;

  return (
    <div>
      <div className="flex items-center mt-8">
        <span className="flex-1 inline-block h-px bg-black/5 dark:bg-gray-700"></span>
        <h1 className="text-center text-3xl font-morabba-bold mx-5 text-red-500">
          {categoryDetails.title}
        </h1>
        <span className="flex-1 inline-block h-px bg-black/5 dark:bg-gray-700"></span>
      </div>
      {meals.length > 0 ? (
        <>
          <div className="flex justify-between items-center dark:bg-gray-800 bg-white rounded-xl py-3 mb-4 mt-12 px-4">
            <div className="flex-1 gap-x-3 flex text-sm sm:text-base">
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
              <div className="flex flex-1 justify-end items-center md:justify-start gap-x-1.5">
                <p className="text-gray-700 dark:text-gray-300 hidden md:inline-block">
                  فیلتر اعمال شده :{" "}
                </p>
                <div className="relative">
                  <div className="bg-red-500 flex items-center py-1 px-1.5 sm:px-3 rounded-xl gap-x-1">
                    <span className="text-gray-100 text-xs sm:text-sm">
                      {searchParams?.sort === "popular"
                        ? "محبوبترین"
                        : searchParams?.sort === "expensive"
                        ? "گرانترین"
                        : searchParams.sort === "inexpensive"
                        ? "ارزانترین"
                        : ""}
                    </span>
                    <Link
                      className="rounded-full flex"
                      href={`/category/${params.categoryID}`}
                    >
                      <CancelRounded fontSize="small text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-1.5">
            {meals.map((meal) => (
              <MealItem key={meal._id} meal={meal} />
            ))}
          </div>
        </>
      ) : (
        <NoItemSection categoryTitle={categoryDetails.title} />
      )}
    </div>
  );
};

export default Category;
