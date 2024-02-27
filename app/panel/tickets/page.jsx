import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import { getUserTickets } from "@/libs/requests";
import React from "react";
import TicketItemPanel from "@/components/modules/panel/TicketItemPanel/TicketItemPanel";

const Tickets = async () => {
  const tickets = await getUserTickets();
  return (
    <div>
      <TitleUserPanel title={"تیکت های من"} />
      <div className="mt-14">
        <div className="grid grid-cols-2 gap-2">
          {tickets.map((ticket) => (
            <TicketItemPanel ticket={ticket} key={ticket._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
