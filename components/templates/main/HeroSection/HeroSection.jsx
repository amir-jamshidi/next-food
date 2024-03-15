import Image from "next/image";
import React from "react";
import heroImg from "@/public/images/pizz-logo.png";
import Link from "next/link";

import { KeyboardArrowDownRounded } from "@mui/icons-material";
const HeroSection = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center relative">
          <Image
            src={heroImg}
            fill
            style={{ objectFit: "contain" }}
            alt="Main Pizza Image"
            className="my-4"
          />
        </div>
        <div className="my-28 text-center flex flex-col gap-y-2">
          <h1 className="text-4xl text-gray-800 dark:text-gray-100 mb-8">
            نکستـــ{" "}
            <span className="text-red-500 font-morabba-bold">فـــود</span>
          </h1>
          <p className="text-gray-800 text-lg font-morabba-bold dark:text-gray-200">
            هرجایی که باشی تو کمترین زمان ممکن نکست فود غدای شمارو داغ داغ بهتون
            میرسونه حتی اگه توی بیابون باشی ! پس خیالت راحت راحت باشه :)
          </p>
          <p className="text-gray-700 mx-4 dark:text-gray-300">
            ما توی سراسر ایران شعبه داریم و این تضمین رو بهتون میدیم که تموم سر
            آشپزهای ما آموزش دیده هستن و خوشمزه ترین غذا ها و فست فود هارو برای
            شما میفرستن
          </p>
          <div className="mt-8 flex gap-x-2 justify-center">
            <Link
              href={"/category/pizza"}
              className="bg-green-500 px-6 rounded-full py-1.5 text-gray-100"
            >
              شروع خرید
            </Link>
            <Link
              href={"/about-us"}
              className="bg-gray-200 rounded-full border border-white/0 hover:border-black/10 transition-colors px-6 py-1.5"
            >
              چرا از نکست فود غذا بگیرم ؟
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mb-8">
        <div className="flex justify-between w-14 mb-3">
          <span className="h-16 w-1 bg-red-400 rounded-md"></span>
          <span className="h-8 mt-4 w-1 bg-red-300 rounded-md"></span>
          <span className="h-20 w-1 bg-red-500 rounded-md"></span>
          <span className="h-8 mt-4 w-1 bg-red-300 rounded-md"></span>
          <span className="h-16 w-1 bg-red-400 rounded-md"></span>
        </div>

        <div className="w-14 h-14 bg-red-500 rounded-full flex justify-center items-center">
          <div className="w-11 h-11 bg-red-400 rounded-full flex justify-center items-center">
            <span className="">
              <KeyboardArrowDownRounded
                fontSize="medium"
                className="text-white"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
