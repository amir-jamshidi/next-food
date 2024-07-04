import Image from "next/image";
import React from "react";
import AboutImg from "@/public/images/about.svg";

export const metadata = {
  title: "نکست فود | درباره ما",
};

const page = () => {
  return (
    <div>
      <div className="flex items-center mt-8">
        <span className="flex-1 inline-block h-px bg-black/5 dark:bg-gray-700"></span>
        <h1 className="text-center text-3xl font-morabba-bold mx-5 text-red-500">
          درباره ما
        </h1>
        <span className="flex-1 inline-block h-px bg-black/5 dark:bg-gray-700"></span>
      </div>
      <div className="mt-12 dark:bg-gray-800 bg-white rounded-2xl px-4 py-6 flex flex-col gap-2 dark:text-gray-300 text-gray-700">
        <div className="flex items-center justify-center">
          <Image alt="About Icon" src={AboutImg} className="w-2/5" />
        </div>
        <div className="dark:bg-gray-900 bg-gray-100 rounded-2xl px-4 py-4 gap-y-2.5 flex flex-col">
          <div className="flex items-start gap-x-1.5">
            <span className="w-3 h-3 bg-red-500 flex mt-1.5 rounded-full shrink-0"></span>
            <p>
              نکستــ فــود یک پلتفرم جذاب برای سفارش غذا هست که سعی میکنیم در
              سریع ترین زمان ممکن بهترین کیفیت را به شما برسانیم
            </p>
          </div>

          <div className="flex items-start gap-x-1.5">
            <span className="w-3 h-3 bg-red-500 flex mt-1.5 rounded-full shrink-0"></span>
            <p>
              این پلتفرم ، زیر مجموعه دِوامیر میباشید و تحت نظر آن به فعالیت خود
              ادامه می دهد . دِو امیر یک مجموعه بزرگ و گسترده می باشد که در
              زمینه های مختلف فعالت میکند
            </p>
          </div>

          <div className="flex items-start gap-x-1.5">
            <span className="w-3 h-3 bg-red-500 flex mt-1.5 rounded-full shrink-0"></span>
            <p>
              در نکستــ فــود تضمین میدهیم که به شما سالم ترین مواد خوراکی ممکن
              را تحویل میدهیم و از هیچ نوع مواد نگهدارنده ای استفاده نمیشود و
              تمامی عذا های موجود در سایت تازه می باشند
            </p>
          </div>

          <div className="flex items-start gap-x-1.5">
            <span className="w-3 h-3 bg-red-500 flex mt-1.5 rounded-full shrink-0"></span>
            <p>
              مجموعه ما متشکل از بهترین آشپز ها و بهترین تستر ها میباشد و به
              صورت روزانه کیفت غدا ها مورد ارزیابی قرار خواهند گرفت و درصورت
              وجود مشکل ، سریعا برطرف میگردد
            </p>
          </div>

          <div className="flex items-start gap-x-1.5">
            <span className="w-3 h-3 bg-red-500 flex mt-1.5 rounded-full shrink-0"></span>
            <p>
              بسیار افتخار میکنیم که توانسته ایم تعداد بسیار زیادی مشتری جذب
              کنیم که به صورت روزانه از ما خرید میکنند و این کیفیت و اعتماد به
              نکستــ فــود را نشان میدهد
            </p>
          </div>

          <div className="flex items-start gap-x-1.5">
            <span className="w-3 h-3 bg-red-500 flex mt-1.5 rounded-full shrink-0"></span>
            <p>
              در صورت هرگونه سوال یا انتقاد و پیشنهاد میتوانید به بخش مورد نظر
              تیکت ارسال کنید
            </p>
          </div>
          <div className="flex gap-x-1 justify-center mt-4">
            <p className="text-gray-400 text-sm">مدیریت : امیرحسین جمشیدی</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
