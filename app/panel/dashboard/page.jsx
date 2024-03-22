import OrderItemPanel from "@/components/modules/panel/OrderPanelItem/OrderItemPanel";
import TicketItemPanel from "@/components/modules/panel/TicketItemPanel/TicketItemPanel";
import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import { getUserDashboard } from "@/libs/requests";
import {
  EuroSymbolRounded,
  LocationOnRounded,
  SendRounded,
  ViewStreamRounded,
} from "@mui/icons-material";

const PanelDashboard = async () => {
  const { orderCount, ticketCount, addressCount, totalPrice, tickets, orders } =
    await getUserDashboard();

  return (
    <div className="mb-12">
      <TitleUserPanel title={"داشبورد"} />
      <div className="mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1.5">
          <div className="h-20 dark:bg-gray-800 bg-gray-100 border rounded-2xl dark:border-gray-700 border-gray-200 flex justify-center items-center gap-x-1 dark:text-gray-200 text-gray700">
            <span>
              <EuroSymbolRounded className="text-green-500" />
            </span>
            <span>مجموع پرداختی شما</span>
            <span className="font-dana-bold">
              {Number(totalPrice).toLocaleString()}
            </span>
            <span>تومان</span>
          </div>
          <div className="h-20 dark:bg-gray-800 bg-gray-100 border rounded-2xl dark:border-gray-700 border-gray-200 flex justify-center items-center gap-x-1 dark:text-gray-200 text-gray700">
            <span>
              <ViewStreamRounded className="text-orange-500" />
            </span>
            <span>مجموع سفارش های شما</span>
            <span className="font-dana-bold">
              {Number(orderCount).toLocaleString()}
            </span>
            <span>سفارش</span>
          </div>
          <div className="h-20 dark:bg-gray-800 bg-gray-100 border rounded-2xl dark:border-gray-700 border-gray-200 flex justify-center items-center gap-x-1 dark:text-gray-200 text-gray700">
            <span>
              <SendRounded className="text-sky-500" />
            </span>
            <span>مجموع تیکت های شما</span>
            <span className="font-dana-bold">
              {Number(ticketCount).toLocaleString()}
            </span>
            <span>تیکت</span>
          </div>
          <div className="h-20 dark:bg-gray-800 bg-gray-100 border rounded-2xl dark:border-gray-700 border-gray-200 flex justify-center items-center gap-x-1 dark:text-gray-200 text-gray700">
            <span>
              <LocationOnRounded className="text-gray-100" />
            </span>
            <span>مجموع آدرس های شما</span>
            <span className="font-dana-bold">
              {Number(addressCount).toLocaleString()}
            </span>
            <span>آدرس</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8">
        <span className="text-sm dark:text-gray-300 text-gray-700">سفارش های اخیر</span>
      </div>
      {orders.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-8">
          {orders.map((order) => (
            <OrderItemPanel key={order._id} order={order} />
          ))}
        </div>
      ) : (
        <div className="flex rounded-2xl py-2 justify-center mt-6 linier-bg">
          <p className="text-sm text-gray-600 dark:text-gray-400">اخیرا سفارشی ثبت نشده</p>
        </div>
      )}

      <div className="flex justify-center items-center mt-8">
        <span className="text-sm dark:text-gray-300 text-gray-700">تیکت های اخیر</span>
      </div>
      {tickets.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-2">
          {tickets.map((ticket) => (
            <TicketItemPanel ticket={ticket} key={ticket._id} />
          ))}
        </div>
      ) : (
        <div className="flex rounded-2xl py-2 justify-center mt-6 linier-bg">
          <p className="text-sm text-gray-600 dark:text-gray-400">اخیرا تیکتی ثبت نشده</p>
        </div>
      )}
    </div>
  );
};

export default PanelDashboard;
