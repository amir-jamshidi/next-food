"use client";
import { insertToCart } from "@/libs/postRequests";
import { VerifiedRounded } from "@mui/icons-material";
import React, { useState } from "react";
import toast from "react-hot-toast";

const MealBuyBox = ({ sizes, mealID, sellers }) => {
  const [sizeID, setSizeID] = useState("");
  const [sellerID, setSellerID] = useState("");
  const [price, setPrice] = useState(0);
  const [sizeName, setSizeName] = useState("");
  const addToCart = () => {
    if (!sellerID) return toast.error("لطفا رستوران رو مشخص کن");
    if (!sizeID) return toast.error("لطفا سایز سفارش رو مشخص کن");
    const cart = {
      mealID,
      sellerID,
      sizeID,
      price,
      size: sizeName,
    };
    insertToCart(cart, (res) => {
      toast.success("به سبد خرید اضافه شد");
      setSizeID("");
      setSellerID("");
      setPrice("");
      setSizeName("");
    });
  };

  return (
    <>
      <div className="bg-gray-100 flex flex-col mt-5 rounded-2xl px-4 py-4 gap-y-1">
        <p className="mb-2 text-gray-600 mx-2 text-sm">
          لطفا رستوران را انتخاب کنید
        </p>
        {sellers.map((seller) => (
          <div
            onClick={() => {
              setSellerID(seller._id);
            }}
            key={seller._id}
            className={`${
              sellerID === seller._id ? "bg-white" : "bg-gray-100"
            } flex px-4 items-center py-2 rounded-lg border border-black/5 cursor-pointer hover:bg-white transition-colors`}
          >
            <span
              className={`${sellerID === seller._id ? "flex" : "hidden"} ml-1`}
            >
              <VerifiedRounded className="text-green-500" />
            </span>
            <p className="text-gray-700">نام : {seller.name}</p>
            <span className="flex-1 h-px border border-dashed mx-3"></span>
            <div className="flex gap-x-1">
              <p className="text-red-500">ارسال فوری</p>
            </div>
          </div>
        ))}

        <p className="mb-2 text-gray-600 mx-2 text-sm mt-2">
          لطفا سایز را انتخاب کنید
        </p>
        {sizes.map((size) => (
          <div
            onClick={() => {
              setSizeID(size._id);
              setPrice(size.price);
              setSizeName(size.size);
            }}
            key={size._id}
            className={`${
              sizeID === size._id ? "bg-white" : "bg-gray-100"
            } flex px-4 items-center py-2 rounded-lg border border-black/5 cursor-pointer hover:bg-white transition-colors`}
          >
            <span className={`${sizeID === size._id ? "flex" : "hidden"} ml-1`}>
              <VerifiedRounded className="text-green-500" />
            </span>
            <p className="text-gray-700">سایز : {size.size}</p>
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
