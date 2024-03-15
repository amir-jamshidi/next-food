import { getMeal } from "@/libs/requests";
import React from "react";
import Image from "next/image";
import MealBuyBox from "@/components/templates/meal/MealBuyBox/MealBuyBox";
import { KeyboardArrowLeftRounded, MopedRounded } from "@mui/icons-material";
import Link from "next/link";
import AdditionalSlider from "@/components/templates/AdditionalSlider/AdditionalSlider";
import FavoriteButton from "@/components/templates/FavoriteButton/FavoriteButton";
const page = async ({ params: { mealHref } }) => {
  const { meal, isFavorite, loginUser } = await getMeal(mealHref);

  const sizes = meal.sizes.map((size) => {
    return {
      size: size.size,
      price: size.price,
      _id: String(size._id),
    };
  });

  const sellers = meal.sellerID.map((seller) => {
    return {
      _id: String(seller._id),
      name: seller.name,
    };
  });

  return (
    <div>
      <div className="my-8 dark:bg-gray-800 bg-white p-4 rounded-2xl">
        <div className="grid grid-cols-2">
          <div className="relative flex justify-center items-center">
            <div className="delay-100 group overflow-hidden w-10 h-10 z-10 transition-all hover:w-36 rounded-full flex-nowrap bg-red-500 absolute right-0 top-0 flex py-2 px-2 gap-x-1.5 items-center">
              <span>
                <MopedRounded fontSize="medium" className="text-white" />
              </span>
              <p className="group-hover:visible invisible  transition-all line-clamp-1 text-white text-sm">
                ارسال از همین الان
              </p>
            </div>
            {loginUser && (
              <FavoriteButton
                isFavorite={isFavorite}
                mealID={String(meal._id)}
              />
            )}

            <Image
              alt={meal.name}
              className="p-4"
              src={meal.img}
              fill
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="py-12 px-4 flex flex-col justify-center relative">
            <div className="w-10 h-10 z-10 transition-colors rounded-full hover:bg-red-600 bg-red-500 absolute left-0 top-0 flex pr-0.5 items-center">
              <Link href={"/"}>
                <span className="w-10 h-10 flex items-center justify-center">
                  <KeyboardArrowLeftRounded
                    fontSize="medium"
                    className="text-white"
                  />
                </span>
              </Link>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1 className="font-morabba-bold text-red-500 text-2xl text-center">
                {meal.name}
              </h1>
              <p className="text-gray-700 mt-3 dark:text-gray-300">
                {meal.description}
              </p>
            </div>
            <MealBuyBox
              mealID={String(meal._id)}
              sizes={sizes}
              sellers={sellers}
            />
            <div className=" bg-white dark:bg-gray-800 flex mt-6 pt-4 items-center gap-x-1 border-t dark:border-t-gray-700 border-t-black/5 mx-10 justify-center ">
              <p className="text-gray-700 dark:text-gray-300">
                دسته بندی ها :{" "}
              </p>
              <Link href={`/category/${meal.categoryID.href}`}>
                <p className="bg-red-500 rounded-full px-4 py-0.5 text-gray-100">
                  {meal.categoryID.title}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex items-center gap-x-4 mx-4">
          <span className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></span>
          <h3 className="text-red-500 text-lg font-morabba-bold">اضافی هــا</h3>
          <span className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></span>
        </div>
        <AdditionalSlider />
      </div>
    </div>
  );
};

export default page;
