import LoginLink from "@/components/templates/header/LoginLink/LoginLink";
import { BedtimeRounded, ShoppingCartRounded } from "@mui/icons-material";
import Image from "next/image";
import logoImg from "@/public/images/logo.png";
import React from "react";
import SubHeader from "@/components/templates/header/SubHeader/SubHeader";
import { isAdmin } from "@/middlewares/isAdmin";
import Link from "next/link";
import { getCartCount } from "@/libs/requests";
import { isLogin } from "@/middlewares/isLogin";
import ChangeThemeButton from "../ChangeThemeButton/ChangeThemeButton";

const Header = async () => {
  //Check Is Admin
  const isAdminUser = await isAdmin();
  const isLoginUser = await isLogin();
  let cartCount = 0;
  if (isLoginUser) {
    cartCount = await getCartCount();
  }

  return (
    <header className="">
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
                    className="bg-green-500 px-4 py-2 rounded-full text-gray-100 text-sm"
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
  );
};

export default Header;
