import { getCart } from "@/libs/requests";
import imgSam from "@/public/images/pizzasam.png";
import {
  AddRounded,
  RemoveRounded,
  VerifiedRounded,
} from "@mui/icons-material";
import Image from "next/image";

const page = async () => {
  const cart = await getCart();
  const totalPrice = cart.reduce((cur, acc) => cur + acc.totalPrice, 0);
  return (
    <div>
      <div className="flex items-center mt-8">
        <span className="flex-1 inline-block h-px bg-black/5"></span>
        <h1 className="text-center text-3xl font-morabba-bold mx-5 text-red-500">
          سبد خریــد
        </h1>
        <span className="flex-1 inline-block h-px bg-black/5"></span>
      </div>
      <div className="bg-white mt-8 p-4 rounded-2xl flex gap-x-4">
        <div className="bg-gray-100 flex-1 p-2 rounded-2xl">
          <ul className="flex flex-col divide-y">
            {cart.map((c) => (
              <li className="py-2.5">
                <div className="flex">
                  <div className="flex-1 flex items-center gap-x-2">
                    <div className="relative">
                      <Image src={imgSam} height={100} width={100} />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg text-red-500">{c.mealID.name}</p>
                      <p className="text-gray-700 text-sm">{c.size}</p>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-center items-center">
                    <div className="flex justify-center items-center bg-white rounded-lg py-2 px-3">
                      <span className="px-1 py-1 hover:bg-gray-100 transition-colors cursor-pointer rounded-full">
                        <AddRounded className="text-green-500" />
                      </span>
                      <p className="font-dana-bold min-w-8 text-center text-gray-700">
                        {c.count}
                      </p>
                      <span className="px-1 py-1 hover:bg-gray-100 transition-colors cursor-pointer rounded-full">
                        <RemoveRounded className="text-red-500" />
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex h-full flex-col items-end justify-center pl-3">
                      <div className="flex items-center gap-x-0.5">
                        <p className="font-dana-bold text-red-500 text-lg ">
                          {Number(c.totalPrice).toLocaleString()}
                        </p>
                        <p className="text-red-500 text-sm">تومــان</p>
                      </div>
                      <div className="flex gap-x-1 items-center">
                        <p className="text-sm text-gray-700">قیمت هر عدد </p>
                        <p className="text-sm text-gray-700 font-dana-bold">
                          {Number(c.price).toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-700">تــــ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-96 bg-white p-2 rounded-2xl">
          <div className="flex items-center">
            <span className="flex-1 h-px bg-red-100"></span>
            <h2 className="mx-2 text-gray-700">جزئیات خرید</h2>
            <span className="flex-1 h-px bg-red-100"></span>
          </div>
          <div className="py-2 flex flex-col gap-y-2">
            <p className="text-sm text-gray-600 px-1">آدرس خودتو انتخاب کن</p>
            <div className="flex flex-col gap-y-1">
              <p className="bg-gray-100 py-2 px-3 rounded-lg text-gray-700 cursor-pointer">
                <span className="ml-2">
                  <VerifiedRounded className="text-green-500" />
                </span>
                آدرس خونمون
              </p>
              <p className="bg-gray-100 py-2 px-3 rounded-lg text-gray-700 cursor-pointer">
                آدرس ویلامون
              </p>
            </div>
          </div>
          <div className="py-2 flex flex-col gap-y-2">
            <p className="text-sm text-gray-600 px-1">صورت حساب</p>
            <div>
              <div className="flex justify-between">
                <p>قیمت کل</p>
                <div className="flex gap-x-0.5">
                  <p className="font-dana-bold">
                    {totalPrice.toLocaleString()}
                  </p>
                  <p>تومان</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
