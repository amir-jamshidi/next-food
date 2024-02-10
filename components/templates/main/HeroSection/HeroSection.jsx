import Image from "next/image";
import React from "react";
import heroImg from "@/public/images/pizza.png";
const HeroSection = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex items-center justify-center relative">
        <Image src={heroImg} fill />
      </div>
      <div className="">
        <h1 className="text-2xl">نکستـــ فـــود</h1>
        <p>
          هرجایی که باشی تو کمترین زمان ممکن نکست فود غدای شمارو داغ داغ بهتون
          میرسونه حتی اگه توی بیابون باشی !
        </p>
        <p>
          ما توی سراسر ایران شعبه داریم و این تضمین رو بهتون میدیم که تموم سر
          آشپزهای ما آموزش دیده هستن و خوشمزه ترین غذا ها و فست فود هارو برای
          شما میفرستن
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
