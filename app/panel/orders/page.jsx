import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import { getUserOrders } from "@/libs/requests";
import React from "react";

const Orders = async () => {
  const orders = await getUserOrders();

  return (
    <div>
      <TitleUserPanel title={"سفارشات من"} />
      {orders.map((order) => (
        <p>{order.price}</p>
      ))}
    </div>
  );
};

export default Orders;
