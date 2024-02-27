import OrderItemPanel from "@/components/modules/panel/OrderPanelItem/OrderItemPanel";
import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import { getUserOrders } from "@/libs/requests";


const Orders = async () => {
  const orders = await getUserOrders();
  return (
    <div>
      <TitleUserPanel title={"سفارشات من"} />
      <div className="grid grid-cols-5 gap-2 mt-14 ">
        {orders.map((order) => (
         <OrderItemPanel key={order._id} order={order}/>
        ))}
      </div>
    </div>
  );
};

export default Orders;
