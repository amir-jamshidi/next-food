import LoginLink from "@/components/templates/header/LoginLink/LoginLink";
import { BedtimeRounded } from "@mui/icons-material";
import Image from "next/image";
import logoImg from "@/public/images/logo.png";
import React from "react";
import SubHeader from "@/components/templates/header/SubHeader/SubHeader";

const Header = () => {
  return (
    <header className="">
      <div className="bg-gray-200">
        <div className="h-16 container">
          <div className="flex w-full h-full">
            <div className="flex-1">
              <Image src={logoImg} width={45} height={45} priority />
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
