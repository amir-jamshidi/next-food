"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const BuyCartButton = ({ price, addresses }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [addressID, setAddressID] = useState("");

  const router = useRouter();

  const completeBuy = async () => {
    if (!addressID) return toast.error("لطفا آدرس خودتو انتخاب کن");
    setIsLoading(true);
    const promis = axios
      .post("/api/order", { price, addressID })
      .then((res) => {
        if (res.status === 201) {
          setIsLoading(false);
          router.push("/panel");
        }
      })
      .catch((err) => {
        setIsLoading(false);
      });

    toast.promise(promis, {
      loading: "انتقال به درگاه بانکی ...",
      success: "پرداخت موفق",
      error: "خطای ناشناخته",
    });
  };

  return (
    <>
      <div className="py-2 flex flex-col gap-y-2 mt-2">
        <p className="text-sm text-gray-600 dark:text-gray-300 px-1 text-center">
          آدرس خودتو انتخاب کن
        </p>
        <div className="flex flex-col gap-y-1">
          {addresses.map((address) => (
            <div
              onClick={() => setAddressID(address._id)}
              key={address._id}
              className="bg-white dark:bg-gray-800 relative px-4 items-center rounded-lg text-gray-700 cursor-pointer flex justify-between"
            >
              <span
                className={`${
                  addressID === address._id ? "w-2.5" : "w-0"
                } absolute transition-all bg-green-500 inline-block right-0 h-full rounded-r-md`}
              ></span>
              <div>
                <p className="text-gray-700 dark:text-gray-200 py-2">{address.name}</p>
              </div>
              <div className="">
                <p className="text-red-500 text-sm">تحویل فوری</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        disabled={isLoading}
        onClick={completeBuy}
        className="bg-red-500 text-gray-100 py-2 rounded-lg"
      >
        {isLoading ? "در حال اتصال ..." : "  تسویه حساب و پرداخت آنلاین"}
      </button>
    </>
  );
};

export default BuyCartButton;
