import ConvertToPersian from "@/helpers/convertToPersian";
import sectionModel from "@/models/section";
import Image from "next/image";
import Link from "next/link";
const OrderItemPanel = ({ order }) => {
  return (
    <div className="dark:border-gray-700 border-gray-100 rounded-2xl border border-t-0">
      <div
        className={`h-40 grid ${
          order.mealDetails.length === 1 ? "grid-cols-1" : "grid-cols-2"
        } gap-0.5 rounded-2xl overflow-hidden`}
      >
        {order.mealDetails.length <= 4 ? (
          <>
            {order.mealDetails.map((meal, i) => (
              <div
                key={meal._id}
                className={`dark:bg-gray-700 bg-gray-100 relative ${
                  order.mealDetails.length <= 2 ? "h-full" : "h-20"
                }  p-2 flex justify-center items-center ${
                  order.mealDetails.length === 3 && i === 2 && "col-span-2"
                } `}
              >
                <img className="h-14 w-14" src={meal.mealID.img} />
                <span className="absolute w-4 h-4 flex items-center justify-center dark:bg-gray-800 bg-gray-300 rounded-full top-1 right-1 dark:text-gray-100 text-gray-600 font-dana text-sm">
                  {meal.count}
                </span>
              </div>
            ))}
          </>
        ) : (
          <>
            {order.mealDetails.slice(0, 3).map((meal, i) => (
              <div
                key={meal._id}
                className={`dark:bg-gray-700 bg-gray-100 relative ${
                  order.mealDetails.length <= 2 ? "h-full" : "h-20"
                } p-2 flex justify-center items-center`}
              >
                <img className="h-12 w-12" src={meal.mealID.img} />
                <span className="absolute w-4 h-4 flex items-center justify-center dark:bg-gray-800 bg-gray-300 rounded-full top-1 right-1 dark:text-gray-100 text-gray-600 font-dana text-sm">
                  {meal.count}
                </span>
              </div>
            ))}
            <div
              className={`dark:bg-gray-700 bg-gray-100 relative h-20
                        p-2 flex justify-center items-center`}
            >
              <span className=" w-10 h-10 flex items-center justify-center dark:bg-gray-800 bg-gray-300 rounded-full top-1 right-1 dark:text-gray-100 text-gray-600 font-dana text-sm">
                {order.mealDetails.length - 3}+
              </span>
            </div>
          </>
        )}
      </div>
      <div className="mt-3 mb-3">
        <div className="flex justify-between px-3 items-center">
          <span className="dark:text-gray-300 text-sm text-gray-600">در تاریخ : </span>
          <span className="font-dana dark:text-gray-300 text-sm text-gray-600">
            {ConvertToPersian(order.createdAt)}
          </span>
        </div>
        <div className="flex justify-between px-3 items-center">
          <span className="dark:text-gray-300 text-sm text-gray-600">مبلغ کل : </span>
          <span className="font-dana dark:text-gray-300 text-sm text-gray-600">
            {Number(order.price).toLocaleString()}
          </span>
        </div>
      </div>
      <Link href={`/panel/orders/${order._id}`}>
        <button className="dark:bg-gray-800 bg-gray-100 w-full rounded-2xl py-2 text-green-500 border-t dark:border-t-gray-700 border-t-gray-100 text-sm">
          مشاهده جزئیات
        </button>
      </Link>
    </div>
  );
};

export default OrderItemPanel;
