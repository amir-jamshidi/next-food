import React from "react";
import Image from "next/image";
//
import imgSam from "@/public/images/pizzasam.png";
import {
  FavoriteBorderRounded,
} from "@mui/icons-material";
import Link from "next/link";

const MealItem = ({ meal }) => {
  return (
    <div key={meal._id} className="bg-white rounded-2xl">
      <div className="relative h-60">
        <Image src={imgSam} style={{ objectFit: "contain" }} fill alt="" />
      </div>
      <div className="flex justify-center flex-col items-center px-3 gap-y-3">
        <h3 className="font-morabba-bold text-red-500">{meal.name}</h3>
        <p className="text-sm line-clamp-3 text-justify text-gray-600">
          {meal.description}
        </p>
      </div>
      <div className="flex items-center mt-5 ">
        <span className="bg-gray-100 h-8 w-8 flex rounded-full -mr-4"></span>
        <span className="flex-1 h-px border-dashed inline-block border"></span>
        <Link
          href={`/meals/${meal.href}`}
          className="w-28 border text-center hover:bg-red-500 hover:text-gray-100 transition-all hover:border-red-500 border-red-300 rounded-full py-1 text-gray-700"
        >
          سفارش
        </Link>
        <span className="flex-1 h-px border-dashed inline-block border"></span>
        <span className="bg-gray-100 h-8 w-8 flex rounded-full -ml-4"></span>
      </div>
      <div className="my-4 flex px-3 justify-between">
        <div className="flex items-center gap-x-0.5">
          <p className="font-dana-bold text-green-500">
            {Number(meal.sizes[0].price).toLocaleString()}
          </p>
          <p className="text-green-500">تومان</p>
        </div>
        <div className="flex gap-x-1">
          <button className="w-10 h-10 hover:w-20 hover:border-red-400 transition-all  text-gray-800  border border-red-300 rounded-full text-sm">
            <FavoriteBorderRounded fontSize="small" className=" text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealItem;
