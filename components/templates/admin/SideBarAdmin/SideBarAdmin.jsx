import Link from "next/link";
import React from "react";

const SideBarAdmin = () => {
  return (
    <div className="bg-gray-50 rounded-2xl p-2 dark:bg-gray-800 sticky top-2.5">
      <div className="flex justify-center items-center mt-4 mx-2">
        <h1 className="font-morabba-bold text-2xl text-red-500">
          نکستـــ فـــود
        </h1>
      </div>
      <div className="my-4 flex flex-col divide-y divide-gray-200/60 dark:divide-gray-700/60">
        <div className="py-3 px-3 mx-3 ">
          <Link href={"/admin-p/dashnoard"}>
            <p className="text-gray-700 dark:text-gray-300">داشبورد</p>
          </Link>
        </div>
        <div className="py-3 px-3 mx-3 ">
          <Link href={"/admin-p/orders"}>
            <p className="text-gray-700 dark:text-gray-300">سفارش ها</p>
          </Link>
        </div>
        <div className="py-3 px-3 mx-3 ">
          <Link href={"/admin-p/meals"}>
            <p className="text-gray-700 dark:text-gray-300">محصولات</p>
          </Link>
        </div>
        <div className="py-3 px-3 mx-3 ">
          <Link href={"/admin-p/categories"}>
            <p className="text-gray-700 dark:text-gray-300">دسته بندی ها</p>
          </Link>
        </div>
        <div className="py-3 px-3 mx-3 ">
          <Link href={"/admin-p/users"}>
            <p className="text-gray-700 dark:text-gray-300">کاربران</p>
          </Link>
        </div>
        <div className="py-3 px-3 mx-3 ">
          <Link href={"/admin-p/tickets"}>
            <p className="text-gray-700 dark:text-gray-300">تیکت ها</p>
          </Link>
        </div>
        <div className="py-3 px-3 mx-3 ">
          <Link href={"/admin-p/offers"}>
            <p className="text-gray-700 dark:text-gray-300">کد های تخفیف</p>
          </Link>
        </div>
        <div className="py-3 px-3 mx-3 ">
          <Link href={"/admin-p/offers"}>
            <p className="text-red-500 dark:text-red-500">خـــروج</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBarAdmin;
