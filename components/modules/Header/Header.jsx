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
      <div className="bg-gray-200">
        <div className="h-16 container">
          <div className="flex w-full h-full">
            <div className="flex-1 flex items-center justify-start">
              <Link href={"/cart"}>
                <span className="relative bg-gray-300 rounded-full h-9 w-9 flex justify-center items-center">
                  <ShoppingCartRounded className="text-gray-700" />
                  <span className="absolute -bottom-0 text-white -left-1.5 font-dana bg-red-500 rounded-full text-xs w-4 h-4 flex justify-center items-center">
                    {cartCount}
                  </span>
                </span>
              </Link>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <h1 className="text-lg font-morabba-bold">
                نکستـــ{" "}
                <span className="text-red-500 font-morabba-bold mr-0.5 ">
                  فـــود
                </span>
              </h1>
            </div>
            <div className="flex-1 flex justify-end">
              <div className="h-full flex items-center gap-x-1.5">
                <span className="bg-gray-300 rounded-full h-9 w-9 flex justify-center items-center">
                  <BedtimeRounded className="text-gray-700" />
                </span>
                <LoginLink />
                {isAdminUser && (
                  <Link
                    href={"/p-admin"}
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
