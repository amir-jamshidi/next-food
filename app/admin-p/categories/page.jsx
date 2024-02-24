import TitleAdminPage from "@/components/modules/TitleAdminPage/TitleAdminPage";
import ConvertToPersian from "@/helpers/convertToPersian";
import { getCategoriesAdmin } from "@/libs/requests";
import { DownloadDoneRounded } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

const Categories = async () => {
  const categories = await getCategoriesAdmin();
  return (
    <div className="p-4">
      <TitleAdminPage title={"لیست دسته بندی ها"} />
      <div className="relative overflow-x-auto shadow sm:rounded-lg">
        <table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
          <thead className="text-sm text-gray-700 uppercase bg-gray-200">
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="col" className="px-6 py-3">
                عنوان
              </th>
              <th scope="col" className="px-6 py-3">
                آدرس
              </th>
              <th scope="col" className="px-2 py-3">
                تصویر
              </th>
              <th scope="col" className="px-2 py-3">
                ایجاد در
              </th>
              <th scope="col" className="px-2 py-3">
                ویرایش
              </th>
              <th scope="col" className="px-2 py-3">
                تغییر تصویر
              </th>
              <th scope="col" className="px-2 py-3">
                حذف
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cate) => (
              <tr
                key={cate._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-2 py-4">{cate.title}</td>
                <td className="px-2 py-4">{cate.href}</td>
                <td className="px-2 py-4 flex justify-center">
                  <Image src={cate.img} width={60} height={60} />
                </td>
                <td className="px-2 py-4">{ConvertToPersian("2024-02-21")}</td>
                <td className="px-2 py-4">
                  <button className="bg-green-500 rounded-full px-3 py-0.5 text-white text-sm">
                    ویرایش
                  </button>
                </td>
                <td className="px-2 py-4">
                  <button className="bg-sky-500 rounded-full px-3 py-0.5 text-white text-sm">
                    آپلود عکس
                  </button>
                </td>
                <td className="px-2 py-4">
                  <button className="bg-red-500 rounded-full px-3 py-0.5 text-white text-sm">
                    حذف
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

export default Categories;
