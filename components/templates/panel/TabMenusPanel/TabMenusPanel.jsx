import {
  DashboardRounded,
  FavoriteRounded,
  LocationOnRounded,
  MarkEmailReadRounded,
  PersonPinCircleRounded,
  SellRounded
} from "@mui/icons-material";
import Link from "next/link";
import TabMenuNotifications from "./TabMenuNotifications";
import TabMenuPanelMobile from "./TabMenuPanelMobile";

const TabMenusPanel = async () => {
  return (
    <>
      <div className="hidden lg:flex bg-white dark:bg-gray-800 w-full mt-14 rounded-2xl py-2 px-4 justify-between z-40">
        <div className="flex text-sm ">
          <div className="flex pl-2 border-l border-l-gray-100 dark:border-l-gray-700 items-center">
            <Link
              href={"/panel/dashboard"}
              className="flex items-center gap-x-1"
            >
              <span>
                <DashboardRounded className="dark:text-gray-300 text-gray-700" />
              </span>
              <p className="dark:text-gray-200 text-gray-800">داشبـورد</p>
            </Link>
          </div>
          <div className="flex gap-x-1 px-2 border-l border-l-gray-100 dark:border-l-gray-700 items-center">
            <Link href={"/panel/orders"} className="flex items-center gap-x-1">
              <span>
                <SellRounded className="dark:text-gray-300 text-gray-700" />
              </span>
              <p className="dark:text-gray-200 text-gray-800">سفارشات</p>
            </Link>
          </div>
          <div className="flex gap-x-1 px-2 border-l border-l-gray-100 dark:border-l-gray-700 items-center">
            <Link href={"/panel/tickets"} className="flex items-center gap-x-1">
              <span>
                <MarkEmailReadRounded className="dark:text-gray-300 text-gray-700" />
              </span>
              <p className="dark:text-gray-200 text-gray-800">تیکت ها</p>
            </Link>
          </div>
          <div className="flex gap-x-1 px-2 border-l border-l-gray-100 dark:border-l-gray-700 items-center">
            <Link
              href={"/panel/addresses"}
              className="flex items-center gap-x-1"
            >
              <span>
                <LocationOnRounded className="dark:text-gray-300 text-gray-700" />
              </span>
              <p className="dark:text-gray-200 text-gray-800">آدرس من</p>
            </Link>
          </div>
          <div className="flex gap-x-1 px-2 border-l border-l-gray-100 dark:border-l-gray-700 items-center">
            <Link
              href={"/panel/favorites"}
              className="flex items-center gap-x-1"
            >
              <span>
                <FavoriteRounded className="dark:text-gray-300 text-gray-700" />
              </span>
              <p className="dark:text-gray-200 text-gray-800">علاقه مندی</p>
            </Link>
          </div>
          <div className="flex gap-x-1 pr-2 items-center">
            <Link
              href={"/panel/my-infos"}
              className="flex items-center gap-x-1"
            >
              <span>
                <PersonPinCircleRounded className="dark:text-gray-300 text-gray-700" />
              </span>
              <p className="dark:text-gray-200 text-gray-800">جزئیات حساب</p>
            </Link>
          </div>
        </div>
        <TabMenuNotifications forMobile={false} />
      </div>

      <div className="flex flex-col lg:hidden rounded-2xl dark:bg-gray-800 bg-white mt-8 py-2 px-3 z-40">
        <TabMenuNotifications />
        <TabMenuPanelMobile />
      </div>
    </>
  );
};

export default TabMenusPanel;
