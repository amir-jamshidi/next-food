import React from "react";
import Image from "next/image";
//
import imgSam from "@/public/images/pizzasam.png";
import {
  AccessAlarmRounded,
  FavoriteBorderRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";

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
      <div className="flex items-center mt-4">
        <span className="w-10 h-10 rounded-full bg-gray-100 inline-block -mr-5"></span>
        <span className="inline-block h-px border border-dashed border-black/5 flex-1 mx-2"></span>
        <span className="w-10 h-10 rounded-full bg-gray-100 inline-block -ml-5"></span>
      </div>
      <div className="my-4 flex px-3 justify-between">
        <div className="flex items-center gap-x-0.5">
          <span>
            <AccessAlarmRounded fontSize="small" className="text-red-500" />
          </span>
          <p className="text-green-500 text-sm">ارسال از همین الان</p>
        </div>
        <div className="flex gap-x-1">
          <button className="w-10 h-10 hover:w-20 hover:border-red-400 transition-all  text-gray-800  border border-red-300 rounded-full text-sm">
            <FavoriteBorderRounded fontSize="small" className=" text-red-500" />
          </button>
          <button className="w-10 h-10 hover:w-20 hover:border-red-400 transition-all  text-gray-800  border border-red-300 rounded-full text-sm">
            <ShoppingCartRounded fontSize="small" className=" text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealItem;
