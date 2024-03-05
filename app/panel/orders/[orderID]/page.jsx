import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import { getOrderDetails } from "@/libs/requests";
import React from "react";

const ShowOrder = async ({ params: { orderID } }) => {
  const order = await getOrderDetails(orderID);

  return (
    <div>
      <TitleUserPanel title={"جزئیات سفارش من"} />
      <div className="mt-14"></div>
    </div>
  );
};

export default ShowOrder;
