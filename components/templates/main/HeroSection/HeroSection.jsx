import Image from "next/image";
import React from "react";
import heroImg from "@/public/images/pizza.png";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex items-center justify-center relative">
        <Image src={heroImg} fill style={{ objectFit: "contain" }} />
      </div>
      <div className="my-28 text-center flex flex-col gap-y-2">
        <h1 className="text-4xl text-gray-800 mb-8">
          نکستـــ <span className="text-red-500 font-morabba-bold">فـــود</span>
        </h1>
        <p className="text-gray-800 font-morabba-bold">
          هرجایی که باشی تو کمترین زمان ممکن نکست فود غدای شمارو داغ داغ بهتون
          میرسونه حتی اگه توی بیابون باشی ! پس خیالت راحت راحت باشه :)
        </p>
        <p className="text-gray-700 mx-4">
          ما توی سراسر ایران شعبه داریم و این تضمین رو بهتون میدیم که تموم سر
          آشپزهای ما آموزش دیده هستن و خوشمزه ترین غذا ها و فست فود هارو برای
          شما میفرستن
        </p>
        <div className="mt-8 flex gap-x-2 justify-center">
          <Link
            href={"/pizza"}
            className="bg-green-500 px-6 rounded-full py-1.5 text-gray-100"
          >
            منو غذاها
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
  );
};

export default HeroSection;
