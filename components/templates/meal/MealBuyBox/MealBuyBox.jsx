"use client";
import { insertToCart } from "@/libs/postRequests";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const MealBuyBox = ({ sizes, mealID, sellers }) => {
  const router = useRouter();
  const [sizeID, setSizeID] = useState(sizes[0]._id);
  const [sellerID, setSellerID] = useState(sellers[0]._id);
  const [price, setPrice] = useState(sizes[0].price);
  const [sizeName, setSizeName] = useState(sizes[0].size);
  const [isPending, setIsPending] = useState(false);

  const addToCart = () => {
    if (!sellerID) return toast.error("لطفا رستوران رو مشخص کن");
    if (!sizeID) return toast.error("لطفا سایز سفارش رو مشخص کن");

    const cart = {
      mealID,
      sellerID,
      sizeID,
      price,
      size: sizeName,
      action: "PLUS",
    };
    setIsPending(true);
    insertToCart(
      cart,
      (res) => {
        setIsPending(false);
        router.refresh();
        setSizeID("");
        setSellerID("");
        setPrice("");
        setSizeName("");
      },
      () => {
        setIsPending(false);
      }
    );
  };

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-700 flex flex-col mt-5 rounded-2xl px-4 py-5 gap-y-1 ">
        <p className="mb-2 text-gray-600 dark:text-gray-400 mx-2 text-sm">
          لطفا فست فودی را انتخاب کنید
        </p>
        {sellers.map((seller) => (
          <div
            onClick={() => {
              setSellerID(seller._id);
            }}
            key={seller._id}
            className={`relative bg-white dark:bg-gray-800 flex px-4 items-center py-2 rounded-lg  cursor-pointer transition-colors`}
          >
            <span
              className={`${
                sellerID === seller._id ? "w-2.5" : "w-0"
              } absolute transition-all bg-green-500 inline-block right-0 h-full rounded-r-md`}
            ></span>
            <p className="text-gray-700 dark:text-gray-200">
              نام : {seller.name}
            </p>
            <span className="flex-1 h-px border border-dashed border-gray-200 dark:border-gray-700 mx-3"></span>
            <div className="flex gap-x-1">
              <p className="text-red-500">ارسال فوری</p>
            </div>
          </div>
        ))}

        <p className="mb-2 text-gray-600 dark:text-gray-400 mx-2 text-sm mt-2">
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
            className={`relative bg-white dark:bg-gray-800 flex px-4 items-center py-2 rounded-lg cursor-pointer transition-colors`}
          >
            <span
              className={`${
                sizeID === size._id ? "w-2.5" : "w-0"
              } absolute transition-all bg-green-500 inline-block right-0 h-full rounded-r-md`}
            ></span>
            <p className="text-gray-700 dark:text-gray-200">
              سایز : {size.size}
            </p>
            <span className="flex-1 h-px border border-gray-200 dark:border-gray-700 border-dashed mx-3"></span>
            <div className="flex gap-x-1">
              <p className="font-dana-bold text-red-500">
                {Number(size.price).toLocaleString()}
              </p>
              <p className="text-red-500">تومــان</p>
            </div>
          </div>
        ))}

        <div
          className="flex justify-center items-center mt-3"
          onClick={addToCart}
        >
          <button
            disabled={isPending}
            className="bg-red-500 rounded-xl w-full py-2 text-white hover:bg-red-600 transition-colors"
          >
            {isPending ? "لطفا صبر کنید ..." : "اضافه کن به سبد خرید"}
          </button>
        </div>
      </div>
    </>
  );
};

export default MealBuyBox;
