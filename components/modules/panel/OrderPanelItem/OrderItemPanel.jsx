import ConvertToPersian from "@/helpers/convertToPersian";
import sectionModel from "@/models/section";
import Image from "next/image";
import Link from "next/link";
const OrderItemPanel = ({ order }) => {
  return (
    <div className="border-gray-700 rounded-2xl border border-t-0">
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
                className={`bg-gray-700 relative ${
                  order.mealDetails.length <= 2 ? "h-full" : "h-20"
                }  p-2 flex justify-center items-center ${
                  order.mealDetails.length === 3 && i === 2 && "col-span-2"
                } `}
              >
                <img className="h-14 w-14" src={meal.mealID.img} />
                <span className="absolute w-4 h-4 flex items-center justify-center bg-gray-800 rounded-full top-1 right-1 text-gray-100 font-dana text-sm">
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
                className={`bg-gray-700 relative ${
                  order.mealDetails.length <= 2 ? "h-full" : "h-20"
                } p-2 flex justify-center items-center`}
              >
                <img className="h-12 w-12" src={meal.mealID.img} />
                <span className="absolute w-4 h-4 flex items-center justify-center bg-gray-800 rounded-full top-1 right-1 text-gray-100 font-dana text-sm">
                  {meal.count}
                </span>
              </div>
            ))}
            <div
              className={`bg-gray-700 relative h-20
                        p-2 flex justify-center items-center`}
            >
              <span className=" w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full top-1 right-1 text-gray-100 font-dana text-sm">
                {order.mealDetails.length - 3}+
              </span>
            </div>
          </>
        )}
      </div>
      <div className="mt-3 mb-3">
        <div className="flex justify-between px-3 items-center">
          <span className="text-gray-300 text-sm">در تاریخ : </span>
          <span className="font-dana text-gray-300 text-sm">
            {ConvertToPersian(order.createdAt)}
          </span>
        </div>
        <div className="flex justify-between px-3 items-center">
          <span className="text-gray-300 text-sm">مبلغ کل : </span>
          <span className="font-dana text-gray-300 text-sm">
            {Number(order.price).toLocaleString()}
          </span>
        </div>
      </div>
      <Link href={`/panel/orders/${order._id}`}>
        <button className="bg-gray-800 w-full rounded-2xl py-2 text-green-500 border-t border-t-gray-700 text-sm">
          مشاهده جزئیات
        </button>
      </Link>
    </div>
  );
};

export default OrderItemPanel;
