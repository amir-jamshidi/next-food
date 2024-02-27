import {
  DashboardRounded,
  FavoriteRounded,
  LocationOnRounded,
  MarkEmailReadRounded,
  NotificationsActiveRounded,
  PersonPinCircleRounded,
  PowerSettingsNewRounded,
  SellRounded,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const TabMenusPanel = () => {
  return (
    <div className="flex bg-gray-800 w-full mt-14 rounded-2xl py-2 px-4 justify-between">
      <div className=" flex text-sm">
        <div className="flex pl-2 border-l border-l-gray-700 items-center">
          <Link href={"/panel/dashboard"} className="flex items-center gap-x-1">
            <span>
              <DashboardRounded className="dark:text-gray-300" />
            </span>
            <p className="text-gray-200">داشبورد</p>
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
          <Link href={"/panel/my-infos"} className="flex items-center gap-x-1">
            <span>
              <PersonPinCircleRounded className="dark:text-gray-300" />
            </span>
            <p className="text-gray-200">جزئیات حساب</p>
          </Link>
        </div>
        <div className="flex gap-x-1 pr-2 items-center">
          <Link href={"/panel/favorites"} className="flex items-center gap-x-1">
            <span>
              <FavoriteRounded className="dark:text-gray-300" />
            </span>
            <p className="text-gray-200">علاقه مندی</p>
          </Link>
        </div>
      </div>

      <div className=" flex justify-end text-sm items-center">
        <div className="flex gap-0.5 px-2 items-center border-l border-l-gray-700">
          <span>
            <NotificationsActiveRounded className="text-gray-200" />
          </span>
          <span className="text-gray-200">اعلان ها</span>
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