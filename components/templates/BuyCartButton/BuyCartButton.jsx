"use client";

import { completeBuyCart } from "@/libs/postRequests";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const BuyCartButton = ({ price, addresses }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [addressID, setAddressID] = useState("");

  const router = useRouter();

  const startCompleteBuyCart = async () => {
    if (!addressID) return toast.error("لطفا آدرس خودتو انتخاب کن");
    setIsLoading(true);
    completeBuyCart({ price, addressID }, (_) => {
      setIsLoading(false);
      router.push("/panel/orders");
      router.refresh();
    });
  };

  return (
    <>
      <div className="py-2 flex flex-col gap-y-2 mt-2">
        <p className="text-sm text-gray-600 dark:text-gray-300 px-1 text-center">
          آدرس خودتو انتخاب کن
        </p>
        <div className="flex flex-col gap-y-1">
          {addresses.length > 0 ? (
            <>
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
                    <p className="text-gray-700 dark:text-gray-200 py-2">
                      {address.name}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-red-500 text-sm">تحویل فوری</p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="dark:bg-gray-800 bg-white py-2.5 rounded-lg flex justify-center">
              <Link href={`/panel/addresses`}>
                <span className="text-sm text-sky-500">اضافه کردن آدرس</span>
              </Link>
            </div>
          )}
        </div>
      </div>
      {Number(price) < 100_000 ? (
        <button
          disabled={true}
          className="bg-gray-400 hover:bg-gray-400 transition-colors text-gray-100 py-2 rounded-lg"
        >
         مبلغ کل کمتر از حد مجاز
        </button>
      ) : (
        <button
          disabled={isLoading}
          onClick={startCompleteBuyCart}
          className="bg-red-500 hover:bg-red-600 transition-colors text-gray-100 py-2 rounded-lg"
        >
          {isLoading ? "در حال اتصال ..." : "  تسویه حساب و پرداخت آنلاین"}
        </button>
      )}

      <div className="flex justify-center">
        <span className="text-xs text-center text-gray-400 dark:bg-gray-800 bg-white px-2 py-0.5 rounded-md">
          حداقل مبلغ سفارش باید صدهزار تومان باشد
        </span>
      </div>
    </>
  );
};

export default BuyCartButton;
