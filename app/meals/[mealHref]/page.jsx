import { getMeal } from "@/libs/requests";
import React from "react";
import imgSam from "@/public/images/pizzasam.png";
import Image from "next/image";
import MealBuyBox from "@/components/templates/meal/MealBuyBox/MealBuyBox";
import { MopedRounded } from "@mui/icons-material";
import Link from "next/link";
const page = async ({ params: { mealHref } }) => {
  const meal = await getMeal(mealHref);

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
      <div className="my-8 bg-white p-4 rounded-2xl">
        <div className="grid grid-cols-2">
          <div className="relative flex justify-center items-center">
            <div className="bg-green-500 absolute right-0 top-0 flex py-2 px-3 gap-x-1 items-center rounded-xl">
              <span>
                <MopedRounded fontSize="medium" className="text-white" />
              </span>
              <p className="text-white text-sm">ارسال از همین الان</p>
            </div>
            <Image
              src={imgSam}
              fill
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="my-6 flex flex-col justify-center py-6">
            <div className="flex flex-col gap-y-2">
              <h1 className="font-morabba-bold text-red-500 text-2xl text-center">
                {meal.name}
              </h1>
              <p className="text-gray-700 mt-3">{meal.description}</p>
            </div>
            <MealBuyBox
              mealID={String(meal._id)}
              sizes={sizes}
              sellers={sellers}
            />
            <div className="w-full bg-white flex mt-4 items-center gap-x-1">
              <p className="text-gray-700">دسته بندی ها : </p>
              <Link href={`/category/${meal.categoryID.href}`}>
                <p className="bg-red-500 rounded-full px-4 py-1 text-gray-100">
                  {meal.categoryID.title}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
