"use client";
import { VerifiedRounded } from "@mui/icons-material";
import React, { useState } from "react";
import toast from "react-hot-toast";

const MealBuyBox = ({ sizes, mealID }) => {
  const [sizeID, setSizeID] = useState("");

  const addToCart = () => {
    if (!sizeID) {
      toast.error("لطفا سایز سفارش رو مشخص کن");
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex flex-col mt-5 rounded-2xl px-4 py-4 gap-y-1">
        <p className="mb-2 text-gray-600 mx-2 text-sm">
          لطفا سایز را انتخاب کنید
        </p>
        {sizes.map((size) => (
          <div
            onClick={() => {
              setSizeID(size._id);
            }}
            key={size._id}
            className={`${
              sizeID === size._id ? "bg-white" : "bg-gray-100"
            } flex px-4 items-center py-2 rounded-lg border border-black/5 cursor-pointer hover:bg-white transition-colors`}
          >
            <span className={`${sizeID === size._id ? "flex" : "hidden"} ml-1`}>
              <VerifiedRounded className="text-green-500" />
            </span>
            <p>سایز : {size.size}</p>
            <span className="flex-1 h-px border border-dashed mx-3"></span>
            <div className="flex gap-x-1">
              <p className="font-dana-bold text-red-500">
                {Number(size.price).toLocaleString()}
              </p>
              <p className="text-red-500">تومــان</p>
            </div>
          </div>
        ))}

        <div className="flex justify-center items-center" onClick={addToCart}>
          <button className="bg-red-500 rounded-xl w-full py-2 text-white">
            اضافه کن به سبد خرید
          </button>
        </div>
      </div>
    </>
  );
};

export default MealBuyBox;
