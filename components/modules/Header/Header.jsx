import LoginLink from "@/components/templates/header/LoginLink/LoginLink";
import {
  CloseRounded,
  MenuRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import React from "react";
import SubHeader from "@/components/templates/header/SubHeader/SubHeader";
import { isAdmin } from "@/middlewares/isAdmin";
import Link from "next/link";
import { getCartCount, getMenu } from "@/libs/requests";
import { isLogin } from "@/middlewares/isLogin";
import ChangeThemeButton from "../ChangeThemeButton/ChangeThemeButton";
import Sidebar from "../Sidebar/Sidebar";

const Header = async () => {
  //Check Is Admin
  const menus = await getMenu();
  const isAdminUser = await isAdmin();
  const isLoginUser = await isLogin();
  let cartCount = 0;
  if (isLoginUser) {
    cartCount = await getCartCount();
  }

  return (
    <>
      <header className="hidden md:block">
        <div className="bg-gray-200 dark:bg-gray-800 transition-colors ">
          <div className="h-20 container">
            <div className="flex w-full h-full">
              <div className="flex-1 flex items-center justify-start">
                <Link href={"/cart"}>
                  <span className="relative bg-red-500 rounded-full h-10 w-10 flex justify-center items-center">
                    <ShoppingCartRounded className="text-white" />
                    <span className="absolute -bottom-0 text-white -left-1.5 font-dana bg-red-500 rounded-full text-xs w-4 h-4 flex justify-center items-center border-2 border-gray-200 dark:border-gray-800">
                      {cartCount}
                    </span>
                  </span>
                </Link>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <h1 className="text-2xl">
                  <Link
                    href={"/"}
                    className="font-morabba-bold text-gray-800 dark:text-gray-100"
                  >
                    نکستـــ{" "}
                    <span className="text-red-500 font-morabba-bold mr-0.5 ">
                      فـــود
                    </span>
                  </Link>
                </h1>
              </div>
              <div className="flex-1 flex justify-end">
                <div className="h-full flex items-center gap-x-1.5">
                  <ChangeThemeButton />
                  <LoginLink />
                  {isAdminUser && (
                    <Link
                      href={"/admin-p/dashboard"}
                      className="bg-gray-800 px-4 py-2 rounded-full text-gray-100 text-sm border border-gray-700"
                    >
                      پنل مدیریت
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <SubHeader />
      </header>
      <header className="block md:hidden">
        <div className="h-16 bg-gray-800 flex px-2 ">
          <div className="flex-1 flex items-center h-full justify-start gap-x-1">
            <span className="w-8 h-8 rounded-full bg-gray-700 flex justify-center items-center">
              <MenuRounded className="text-gray-200" fontSize="small" />
            </span>
            <ChangeThemeButton />
          </div>
          <div className="flex-1 h-full flex items-center justify-center">
            <h1 className="flex gap-x-1 text-xl font-font-morabba-bold">
              <p className="font-morabba-bold text-gray-200">نکستـــ</p>
              <p className="font-morabba-bold text-red-500">فـــود</p>
            </h1>
          </div>
          <div className="flex-1 flex justify-end gap-x-1.5 items-center">
            {isLoginUser ? (
              <>
                <Link href={"/cart"}>
                  <span className="relative bg-red-500 rounded-full h-8 w-8 flex justify-center items-center">
                    <ShoppingCartRounded
                      className="text-white"
                      fontSize="small"
                    />
                    <span className="absolute -bottom-0 text-white -left-1.5 font-dana bg-red-500 rounded-full text-xs w-4 h-4 flex justify-center items-center border-2 border-gray-200 dark:border-gray-800">
                      {cartCount}
                    </span>
                  </span>
                </Link>
                <Link
                  href="/"
                  className="border text-sm py-1.5 px-2 border-gray-700 text-gray-300 rounded-2xl"
                >
                  پنل کاربر
                </Link>
              </>
            ) : (
              <Link
                href="/"
                className="border text-sm py-1.5 px-2 border-gray-700 text-gray-300 rounded-2xl"
              >
                ورود یا ثبت نام
              </Link>
            )}
          </div>
        </div>
      </header>
      <Sidebar />
    </>
  );
};

export default Header;
