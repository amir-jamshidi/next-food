import Image from "next/image";
import React from "react";
import AboutImg from "@/public/images/about.svg";
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
      <div className="mt-12 bg-gray-800 rounded-2xl px-4 py-6 flex flex-col gap-2 text-gray-300">
        <div className="flex items-center justify-center">
          <Image src={AboutImg} className="w-2/5" />
        </div>
        <div className="bg-gray-900 rounded-2xl px-4 py-4 gap-y-2.5 flex flex-col">
          <p>
            نکستــ فــود یک پلتفرم جذاب برای سفارش غذا هست که سعی میکنیم در سریع
            ترین زمان ممکن بهترین کیفیت را به شما برسانیم
          </p>
          <p>
            این پلتفرم ، زیر مجموعه دِوامیر میباشید و تحت نظر آن به فعالیت خود
            ادامه می دهد . دِو امیر یک مجموعه بزرگ و گسترده می باشد که در زمینه
            های مختلف فعالت میکند
          </p>
          <p>
            در نکستــ فــود تضمین میدهیم که به شما سالم ترین مواد خوراکی ممکن را
            تحویل میدهیم و از هیچ نوع مواد نگهدارنده ای استفاده نمیشود و تمامی
            عذا های موجود در سایت تازه می باشند
          </p>
          <p>
            مجموعه ما متشکل از بهترین آشپز ها و بهترین تستر ها میباشد و به صورت
            روزانه کیفت غدا ها مورد ارزیابی قرار خواهند گرفت و درصورت وجود مشکل
            ، سریعا برطرف میگردد
          </p>
          <p>
            بسیار افتخار میکنیم که توانسته ایم تعداد بسیار زیادی مشتری جذب کنیم
            که به صورت روزانه از ما خرید میکنند و این کیفیت و اعتماد به نکستــ
            فــود را نشان میدهد
          </p>
          <p>
            در صورت هرگونه سوال یا انتقاد و پیشنهاد میتوانید به بخش مورد نظر
            تیکت بزنید یا با شماره زیر تماس برقرار کنید
          </p>
          <div className="flex gap-x-1">
            <p>مدیریت سایت و مجموعه : </p>
            <p className="font-dana">09195854705</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
