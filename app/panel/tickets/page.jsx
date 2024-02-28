import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import { getUserTickets } from "@/libs/requests";
import React from "react";
import TicketItemPanel from "@/components/modules/panel/TicketItemPanel/TicketItemPanel";
import {
  DoneAllRounded,
  HourglassBottomRounded,
  SendRounded,
  ViewStreamRounded,
} from "@mui/icons-material";

const Tickets = async () => {
  const { tickets, ticketPending, ticketAnswer } = await getUserTickets();
  return (
    <div>
      <TitleUserPanel title={"تیکت های من"} />
      <div className="mt-14">
        <div className="grid grid-cols-4 gap-1.5">
          <div className="h-20 border rounded-2xl border-gray-700 flex justify-center items-center gap-x-1 text-gray-200">
            <span>
              <SendRounded className="text-sky-500" />
            </span>
            <span>تعداد همه تیکت ها</span>
            <span className="font-dana-bold">
              {Number(ticketPending + ticketAnswer).toLocaleString()}
            </span>
            <span>تیکت</span>
          </div>
          <div className="h-20 border rounded-2xl border-gray-700 flex justify-center items-center gap-x-1 text-gray-200">
            <span>
              <DoneAllRounded className="text-green-500" />
            </span>
            <span>تیکت های پاسخ داده شده</span>
            <span className="font-dana-bold">
              {Number(ticketAnswer).toLocaleString()}
            </span>
            <span>تیکت</span>
          </div>
          <div className="h-20 border rounded-2xl border-gray-700 flex justify-center items-center gap-x-1 text-gray-200">
            <span>
              <HourglassBottomRounded className="text-orange-500" />
            </span>
            <span>تیکت های در انتظار پاسخ</span>
            <span className="font-dana-bold">
              {Number(ticketPending).toLocaleString()}
            </span>
            <span>تیکت</span>
          </div>
        </div>
      </div>
      <div className="mt-8">
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
