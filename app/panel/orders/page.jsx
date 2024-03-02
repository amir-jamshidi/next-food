import OrderItemPanel from "@/components/modules/panel/OrderPanelItem/OrderItemPanel";
import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import { getUserOrders } from "@/libs/requests";
import {
  CloseRounded,
  DoneAllRounded,
  HourglassBottomRounded,
  ViewStreamRounded,
} from "@mui/icons-material";

const Orders = async () => {
  const {
    orders = [],
    orderSuccessCount,
    orderPendingCount,
    orderCancelCount,
  } = await getUserOrders();

  return (
    <div>
      <TitleUserPanel title={"سفارشات من"} />
      <div className="mt-14">
        <div className="grid grid-cols-4 gap-1.5">
          <div className="h-20 border rounded-2xl border-gray-700 flex justify-center items-center gap-x-1 text-gray-200">
            <span>
              <ViewStreamRounded className="text-sky-500" />
            </span>
            <span>تعداد همه سفارش ها</span>
            <span className="font-dana-bold">
              {Number(
                orderSuccessCount + orderPendingCount + orderCancelCount
              ).toLocaleString()}
            </span>
            <span>سفارش</span>
          </div>
          <div className="h-20 border rounded-2xl border-gray-700 flex justify-center items-center gap-x-1 text-gray-200">
            <span>
              <DoneAllRounded className="text-green-500" />
            </span>
            <span>سفارش های تحویل داده شده</span>
            <span className="font-dana-bold">
              {Number(orderSuccessCount).toLocaleString()}
            </span>
            <span>سفارش</span>
          </div>
          <div className="h-20 border rounded-2xl border-gray-700 flex justify-center items-center gap-x-1 text-gray-200">
            <span>
              <HourglassBottomRounded className="text-orange-500" />
            </span>
            <span>سفارش های در حال ارسال</span>
            <span className="font-dana-bold">
              {Number(orderPendingCount).toLocaleString()}
            </span>
            <span>سفارش</span>
          </div>
          <div className="h-20 border rounded-2xl border-gray-700 flex justify-center items-center gap-x-1 text-gray-200">
            <span>
              <CloseRounded className="text-red-500" />
            </span>
            <span>سفارش های کنسل شده</span>
            <span className="font-dana-bold">
              {Number(orderCancelCount).toLocaleString()}
            </span>
            <span>سفارش</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 mt-8 ">
        {orders.map((order) => (
          <OrderItemPanel key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
