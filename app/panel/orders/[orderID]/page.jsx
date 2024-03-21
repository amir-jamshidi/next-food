import BackButton from "@/components/modules/panel/BackButton/BackButton";
import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import ConvertToPersian from "@/helpers/convertToPersian";
import { getOrderDetails } from "@/libs/requests";
import { QuestionMarkRounded } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShowOrder = async ({ params: { orderID } }) => {
  const order = await getOrderDetails(orderID);

  return (
    <div className="relative">
      <TitleUserPanel title={"جزئیات سفارش من"} />
      <BackButton />
      <div className="mt-14">
        <div className="grid gap-y-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {order.mealDetails.map((meal, i) => (
            <div
              key={meal._id}
              className={`${
                i + 1 === order.mealDetails.length ? "border-l-0" : "border-l"
              } px-4 py-6  border-l-gray-700`}
            >
              <div className="relative h-36">
                <span className="absolute text-sm bg-sky-500 z-50 inline-block rounded top-0 right-0 px-1 text-gray-300">
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
                <div className="flex items-center justify-between text-gray-300">
                  <p>قیمت هر عدد</p>
                  <div className="flex items-center gap-x-1">
                    <p className="font-dana">
                      {Number(meal.price).toLocaleString()}
                    </p>
                    <span>تومان</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-gray-300">
                  <p>تعداد سفارش</p>
                  <div className="flex items-center gap-x-1">
                    <p className="font-dana">
                      {Number(meal.count).toLocaleString()}
                    </p>
                    <span>عدد</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-gray-300">
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
        
          <div className="border border-gray-700 rounded-2xl py-3">
            <div className="flex justify-center items-center flex-col gap-y-1">
              <span>
                <QuestionMarkRounded
                  fontSize="large"
                  className="text-blue-600 w-12 h-12"
                />
              </span>
              <span>
                <p className="text-gray-200 font-morabba-bold text-lg">
                  {order.stateID.name}
                </p>
              </span>
            </div>
            <div className="flex flex-col items-center justify-center mt-4 bg-gray-900 mx-2 gap-y-2.5 rounded-2xl py-3">
              <div className='flex gap-x-1 text-sm text-gray-300 '>
                <p>کد پیگیری</p>
                <p className='font-dana-bold pt-0.5'>{order.code}</p>
              </div>
              <div className='flex gap-x-1 text-sm text-gray-300 '>
                <p>مبلغ</p>
                <p className='font-dana-bold pt-0.5'>{Number(order.price).toLocaleString()}</p>
              </div>
              <div className='flex gap-x-1 text-sm text-gray-300 '>
                <p>تاریخ</p>
                <p className='font-dana-bold pt-0.5'>{ConvertToPersian(order.createdAt)}</p>
              </div>
              <div className='flex gap-x-1 text-sm text-gray-300 '>
                <p>ارسال شده به</p>
                <p className='text-violet-500'>{order.addressID.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOrder;
