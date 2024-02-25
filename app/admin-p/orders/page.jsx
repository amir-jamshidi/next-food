import TitleAdminPage from "@/components/modules/TitleAdminPage/TitleAdminPage";
import ConvertToPersian from "@/helpers/convertToPersian";
import { getOrdersAdmin } from "@/libs/requests";
import { DownloadDoneRounded } from "@mui/icons-material";
import React from "react";

const Orders = async () => {
  const orders = await getOrdersAdmin();

  return (
    <div className="p-4">
      <TitleAdminPage title={"لیست سفارشات"} />
      <div className="relative overflow-x-auto rounded-2xl">
        <table className="w-full text-sm text-gray-700 dark:text-gray-300 text-center">
          <thead className="text-sm text-gray-700 uppercase bg-gray-200 dark:bg-gray-800">
            <tr className="text-gray-800 dark:text-gray-300 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="col" className="px-6 py-3">
                شناسه
              </th>
              <th scope="col" className="px-2 py-3">
                تلفن کاربر
              </th>
              <th scope="col" className="px-2 py-3">
                پرداخت در
              </th>
              <th scope="col" className="px-2 py-3">
                پرداخت موفق
              </th>
              <th scope="col" className="px-2 py-3">
                وضعیت
              </th>
              <th scope="col" className="px-2 py-3">
                مبلغ
              </th>
              <th scope="col" className="px-2 py-3">
                تغییر وضعیت
              </th>
              <th scope="col" className="px-2 py-3">
                جزئیات
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-2 py-4">#{order.code}</td>
                <td className="px-2 py-4">{order.userID.phone}</td>
                <td className="px-2 py-4">
                  {ConvertToPersian(order.createdAt)}
                </td>
                <td className="px-2 py-4">
                  <span className="">
                    <DownloadDoneRounded className="text-green-500" />
                  </span>
                </td>
                <td
                  className={`${
                    order.statusID.type === "warning"
                      ? "text-orange-500"
                      : order.statusID.type === "error"
                      ? "text-red-500"
                      : "text-green-500"
                  } px-2 py-4`}
                >
                  {order.statusID.name}
                </td>
                <td className="px-2 py-4 font-dana">
                  {Number(order.price).toLocaleString()} ت
                </td>
                <td className="px-2 py-4">
                  <button className="bg-green-500 rounded-full px-3 py-0.5 text-white text-sm">
                    تغییر
                  </button>
                </td>
                <td className="px-2 py-4">
                  <button className="bg-sky-500 rounded-full px-3 py-0.5 text-white text-sm">
                    جزئیات
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
