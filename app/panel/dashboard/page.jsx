import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import { getUserDashboard } from "@/libs/requests";
import { EuroSymbolRounded, LocationOnRounded, SendRounded, ViewStreamRounded } from "@mui/icons-material";

const PanelDashboard = async () => {

  const { orderCount, ticketCount, addressCount, totalPrice, tickets, orders } =
    await getUserDashboard();

  return (
    <div>
      <TitleUserPanel title={"داشبورد"} />
      <div className="mt-14">
        <div className="grid grid-cols-4 gap-1.5">
          <div className="h-20 border rounded-2xl border-gray-700 flex justify-center items-center gap-x-1 text-gray-200">
            <span>
              <EuroSymbolRounded className="text-green-500" />
            </span>
            <span>مجموع پرداختی شما</span>
            <span className="font-dana-bold">
              {Number(totalPrice).toLocaleString()}
            </span>
            <span>تومان</span>
          </div>
          <div className="h-20 border rounded-2xl border-gray-700 flex justify-center items-center gap-x-1 text-gray-200">
            <span>
              <ViewStreamRounded className="text-orange-500" />
            </span>
            <span>مجموع سفارش های شما</span>
            <span className="font-dana-bold">
              {Number(orderCount).toLocaleString()}
            </span>
            <span>سفارش</span>
          </div>
          <div className="h-20 border rounded-2xl border-gray-700 flex justify-center items-center gap-x-1 text-gray-200">
            <span>
              <SendRounded className="text-sky-500" />
            </span>
            <span>مجموع تیکت های شما</span>
            <span className="font-dana-bold">
              {Number(ticketCount).toLocaleString()}
            </span>
            <span>تیکت</span>
          </div>
          <div className="h-20 border rounded-2xl border-gray-700 flex justify-center items-center gap-x-1 text-gray-200">
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
    </div>
  );
};


export default PanelDashboard;
