import Link from "next/link";
import React from "react";

const SideBarAdmin = () => {
  return (
    <div className="bg-gray-50 rounded-2xl p-2">
      <div className="flex justify-center items-center p-2 border-b border-b-gray-100 mx-2">
        <h1 className="font-morabba-bold text-2xl text-red-500">
          نکستـــ فـــود
        </h1>
      </div>
      <div className="my-4 flex flex-col divide-y divide-gray-200/60">
        <div className="py-2 px-3">
          <Link href={"/admin-p/dashnoard"}>
            <p className="text-gray-700">داشبورد</p>
          </Link>
        </div>
        <div className="py-2 px-3">
          <Link href={"/admin-p/orders"}>
            <p className="text-gray-700">سفارش ها</p>
          </Link>
        </div>
        <div className="py-2 px-3">
          <Link href={"/admin-p/meals"}>
            <p className="text-gray-700">محصولات</p>
          </Link>
        </div>
        <div className="py-2 px-3">
          <Link href={"/admin-p/categories"}>
            <p className="text-gray-700">دسته بندی ها</p>
          </Link>
        </div>
        <div className="py-2 px-3">
          <Link href={"/admin-p/users"}>
            <p className="text-gray-700">کاربران</p>
          </Link>
        </div>
        <div className="py-2 px-3">
          <Link href={"/admin-p/tickets"}>
            <p className="text-gray-700">تیکت ها</p>
          </Link>
        </div>
        <div className="py-2 px-3">
          <Link href={"/admin-p/offers"}>
            <p className="text-gray-700">کد های تخفیف</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBarAdmin;
