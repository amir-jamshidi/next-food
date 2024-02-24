import TitleAdminPage from "@/components/modules/TitleAdminPage/TitleAdminPage";
import ConvertToPersian from "@/helpers/convertToPersian";
import { getMealsAdmin } from "@/libs/requests";

const Meals = async () => {
  const meals = await getMealsAdmin();
  return (
    <div className="p-4">
      <TitleAdminPage title={"لیست محصولات"} />
      <div className="relative overflow-x-auto rounded-2xl">
        <table className="w-full text-sm text-gray-700 dark:text-gray-300 text-center">
          <thead className="text-sm text-gray-700 uppercase bg-gray-200 dark:bg-gray-800">
            <tr className="text-gray-800 dark:text-gray-300 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="col" className="px-6 py-3">
                عنوان
              </th>
              <th scope="col" className="px-6 py-3">
                آدرس
              </th>
              <th scope="col" className="px-6 py-3">
                دسته بندی
              </th>
              <th scope="col" className="px-2 py-3">
                قیمت ها
              </th>
              <th scope="col" className="px-2 py-3">
                ویرایش
              </th>

              <th scope="col" className="px-2 py-3">
                حذف
              </th>
              <th scope="col" className="px-2 py-3">
                جزئیات
              </th>
            </tr>
          </thead>
          <tbody>
            {meals.map((meal) => (
              <tr
                key={meal._id}
                className="h-[90px] bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-2 py-4">{meal.name}</td>
                <td className="px-2 py-4">{meal.href}</td>
                <td className="px-2 py-4">
                  <span className="bg-sky-300 text-gray-700 rounded-md px-2 py-0.5">
                    {meal.categoryID.title}
                  </span>
                </td>
                
                <td className="px-2 py-4 ">
                  {meal.sizes.map((size) => (
                    <div
                      key={size._id}
                      className="flex gap-x-1 mt-1 py-px justify-center"
                    >
                      <span className="text-sm">{size.size}</span>
                      <span className="font-dana text-sm">
                        {Number(size.price).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </td>
                <td className="px-2 py-4">
                  <button className="bg-green-500 rounded-2xl px-4 py-1.5 text-white text-sm">
                    ویرایش
                  </button>
                </td>

                <td className="px-2 py-4">
                  <button className="bg-red-500 rounded-2xl px-4 py-1.5 text-white text-sm">
                    حذف
                  </button>
                </td>
                <td className="px-2 py-4">
                  <button className="bg-sky-500 rounded-2xl px-4 py-1.5 text-white text-sm">
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

export default Meals;
