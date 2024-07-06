import BackButton from "@/components/modules/panel/BackButton/BackButton";
import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import ConvertToPersian from "@/helpers/convertToPersian";
import { getOrderDetails } from "@/libs/requests";
import { QuestionMarkRounded } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export const metadata = {
  title: `پنل کاربری | مشاهده سفارش`,
};

const ShowOrder = async ({ params: { orderID } }) => {
  const order = await getOrderDetails(orderID);

  if (!order) notFound();

  return (
    <div className="relative">
      <TitleUserPanel title={"جزئیات سفارش من"} />
      <BackButton />
      <div className="mt-14">
        <div className="grid gap-y-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {order.mealDetails.map((meal, i) => (
            <div
              key={meal._id}
              className={`px-4 py-4`}
            >
              <div className="relative h-36">
                <span className="absolute bg-sky-500 z-50 inline-block rounded top-0 right-0 px-1 text-xs md:text-sm text-gray-100 dark:text-gray-200">
                  {meal.size}
                </span>
                <Link href={`/meals/${meal.mealID.href}`}></Link>
                <Image
                  alt={meal.mealID.name}
                  src={meal.mealID.img}
                  style={{ objectFit: "contain" }}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
              <div className="flex flex-col mt-4 gap-1">
                <div className="text-xs sm:text-sm flex items-center justify-between text-gray-700 dark:text-gray-300">
                  <p>قیمت هر عدد</p>
                  <div className="flex items-center gap-x-1">
                    <p className="font-dana">
                      {Number(meal.price).toLocaleString()}
                    </p>
                    <span>تومان</span>
                  </div>
                </div>
                <div className="text-xs sm:text-sm flex items-center justify-between text-gray-700 dark:text-gray-300">
                  <p>تعداد سفارش</p>
                  <div className="flex items-center gap-x-1">
                    <p className="font-dana">
                      {Number(meal.count).toLocaleString()}
                    </p>
                    <span>عدد</span>
                  </div>
                </div>
                <div className="text-xs sm:text-sm flex items-center justify-between text-gray-700 dark:text-gray-300">
                  <p>قیمت کل</p>
                  <div className="flex items-center gap-x-1">
                    <p className="font-dana">
                      {Number(meal.totalPrice).toLocaleString()}
                    </p>
                    <span>تومان</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="border border-gray-100 bg-gray-100 dark:bg-gray-900 dark:border-gray-800 rounded-2xl py-3">
            <div className="flex justify-center items-center flex-col gap-y-1 bg-gray-200 dark:bg-gray-800 mx-2 rounded-xl py-4">
              <span>
                <QuestionMarkRounded
                  fontSize="large"
                  className="text-blue-600 w-12 h-12"
                />
              </span>
              <span>
                <p className="dark:text-gray-200 text-gray-800 font-morabba-bold text-lg">
                  {order.stateID.name}
                </p>
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 mx-2 gap-y-1.5 rounded-2xl py-3">
              <div className="flex gap-x-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300 ">
                <p>کد پیگیری</p>
                <p className="font-dana-bold pt-0.5">{order.code}</p>
              </div>
              <div className="flex gap-x-1 text-xs sm:text-sm  text-gray-700 dark:text-gray-300 ">
                <p>مبلغ</p>
                <p className="font-dana-bold pt-0.5">
                  {Number(order.price).toLocaleString()}
                </p>
              </div>
              <div className="flex gap-x-1 text-xs sm:text-sm  text-gray-700 dark:text-gray-300 ">
                <p>تاریخ</p>
                <p className="font-dana-bold pt-0.5">
                  {ConvertToPersian(order.createdAt)}
                </p>
              </div>
              <div className="flex gap-x-1 text-xs sm:text-sm  text-gray-700 dark:text-gray-300 ">
                <p>ارسال شده به</p>
                <p className="text-violet-500">{order.addressID.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOrder;
