import NotificationItem from "@/components/modules/panel/NotificationItem/NotificationItem";
import { getUserNotifications } from "@/libs/requests";
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
import LogoutButton from "../LogoutButton/LogoutButton";

const TabMenusPanel = async () => {
  const notification = await getUserNotifications();

  return (
    <div className="flex bg-gray-800 w-full mt-14 rounded-2xl py-2 px-4 justify-between z-50">
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
          {notification.length > 0 && (
            <span className="w-2 h-2 inline-block rounded bg-red-500"></span>
          )}
          <span className="cursor-pointer">
            <NotificationsActiveRounded className="text-gray-200" />
          </span>

          <span className="text-gray-200 cursor-pointer">اعلان ها</span>
          <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 top-7 pt-3 left-0 delay-75">
            <div className=" flex flex-col bg-gray-700 w-72 p-3 rounded-xl gap-y-1">
              {notification.length > 0 ? (
                <>
                  {notification.map((notification) => (
                    <NotificationItem
                      key={notification._id}
                      notification={notification}
                    />
                  ))}
                </>
              ) : (
                <p className="text-gray-300 text-center py-3">
                  اعلانی برای شما نیست !!!
                </p>
              )}
            </div>
          </div>
        </div>
        <LogoutButton/>
      </div>
    </div>
  );
};

export default TabMenusPanel;
