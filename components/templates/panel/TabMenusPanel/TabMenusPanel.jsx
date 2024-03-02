import { getUserNotifications } from "@/libs/requests";
import {
  DashboardRounded,
  FavoriteRounded,
  LocationOnRounded,
  MarkEmailReadRounded,
  NotificationsActiveRounded,
  PersonPinCircleRounded,
  PowerSettingsNewRounded,
  ReplyRounded,
  SellRounded,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const TabMenusPanel = async () => {
  const notification = await getUserNotifications();

  
  return (
    <div className="flex bg-gray-800 w-full mt-14 rounded-2xl py-2 px-4 justify-between">
      <div className=" flex text-sm">
        <div className="flex pl-2 border-l border-l-gray-700 items-center">
          <Link href={"/panel/dashboard"} className="flex items-center gap-x-1">
            <span>
              <DashboardRounded className="dark:text-gray-300" />
            </span>
            <p className="text-gray-200">داشبـورد</p>
          </Link>
        </div>
        <div className="flex gap-x-1 px-2 border-l border-l-gray-700 items-center">
          <Link href={"/panel/orders"} className="flex items-center gap-x-1">
            <span>
              <SellRounded className="dark:text-gray-300" />
            </span>
            <p className="text-gray-200">سفارشات</p>
          </Link>
        </div>
        <div className="flex gap-x-1 px-2 border-l border-l-gray-700 items-center">
          <Link href={"/panel/tickets"} className="flex items-center gap-x-1">
            <span>
              <MarkEmailReadRounded className="dark:text-gray-300" />
            </span>
            <p className="text-gray-200">تیکت ها</p>
          </Link>
        </div>
        <div className="flex gap-x-1 px-2 border-l border-l-gray-700 items-center">
          <Link href={"/panel/addresses"} className="flex items-center gap-x-1">
            <span>
              <LocationOnRounded className="dark:text-gray-300" />
            </span>
            <p className="text-gray-200">آدرس من</p>
          </Link>
        </div>
        <div className="flex gap-x-1 px-2 border-l border-l-gray-700 items-center">
          <Link href={"/panel/favorites"} className="flex items-center gap-x-1">
            <span>
              <FavoriteRounded className="dark:text-gray-300" />
            </span>
            <p className="text-gray-200">علاقه مندی</p>
          </Link>
        </div>{" "}
        <div className="flex gap-x-1 pr-2 items-center">
          <Link href={"/panel/my-infos"} className="flex items-center gap-x-1">
            <span>
              <PersonPinCircleRounded className="dark:text-gray-300" />
            </span>
            <p className="text-gray-200">جزئیات حساب</p>
          </Link>
        </div>
      </div>

      <div className=" flex justify-end text-sm items-center">
        <div className="group relative flex gap-0.5 px-2 items-center border-l border-l-gray-700">
          {notification.length > 0 && (<span className="w-2 h-2 inline-block rounded bg-red-500"></span>)}
          <span className="cursor-pointer">
            <NotificationsActiveRounded className="text-gray-200" />
          </span>
          
          <span className="text-gray-200 cursor-pointer">اعلان ها</span>
          <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 top-7 pt-3 left-0 delay-75">
            <div className=" flex flex-col bg-gray-800 shadow-md divide-y divide-gray-700 w-64 p-3  rounded-xl border border-gray-700">
              {notification.map((notification) => (
                <div className="py-2 flex flex-col transition-colors hover:bg-gray-700">
                  <div className="flex items-start gap-x-1.5 ">
                    <span
                      className={`w-2 h-2 rounded inline-block shrink-0 mt-1.5 ${
                        notification.type === "success"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    ></span>
                    <p className="text-justify text-gray-300">
                      {notification.message}
                    </p>
                  </div>
                  <div className="flex justify-end gap-x-1">
                    {notification.href && (
                      <Link href={`${notification.href}`}>
                        <span className="inline-block">
                          <ReplyRounded className="text-sky-500 rotate" />
                        </span>
                      </Link>
                    )}
                    <span className="text-green-500 text-sm pt-0.5">دیدم</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
        <div className="flex gap-0.5 pr-2 items-center">
          <span>
            <PowerSettingsNewRounded className="text-red-500" />
          </span>
          <span className="text-red-500">خروج</span>
        </div>
      </div>
    </div>
  );
};


export default TabMenusPanel;
