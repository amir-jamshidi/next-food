import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import ConvertToPersian from "@/helpers/convertToPersian";
import { getOrderDetails } from "@/libs/requests";
import { VerifiedRounded } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShowOrder = async ({ params: { orderID } }) => {
  const order = await getOrderDetails(orderID);

  return (
    <div>
      <TitleUserPanel title={"جزئیات سفارش من"} />
      <div className="mt-14">
        <div className="grid grid-cols-5">
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
                <Link href={`/meals/${meal.mealID.href}`}>
                  <Image
                    src={meal.mealID.img}
                    style={{ objectFit: "contain" }}
                    fill
                  />
                </Link>
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
          <div className="bg-orange-500 rounded-2xl p-2 text-gray-50">
            <div className="bg-orange-600 w-full h-full rounded-2xl flex flex-col items-center p-2">
              <div className="flex items-center gap-x-1">
                <span>
                  <VerifiedRounded />
                </span>
                <p>وضعیت پرداخت : موفق</p>
              </div>

              <div className="flex items-center gap-x-1">
                <p>ثبت شده در</p>
                <p className="font-dana">{ConvertToPersian(order.createdAt)}</p>
              </div>
              <div className="flex items-center gap-x-1">
                <p>شناسه سفارش</p>
                <p className="font-dana">{order.code}</p>
              </div>

              <div className="flex items-center">
                <p>وضعیت سفارش : </p>
                <p>{order.stateID.name}</p>
              </div>
              <div className="flex items-center">
                <p>قیمت کل</p>
                <div className="flex items-center gap-x-1">
                  <p className="font-dana">
                    {Number(order.price).toLocaleString()}
                  </p>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOrder;
