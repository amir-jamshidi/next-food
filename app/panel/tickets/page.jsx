import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import { getUserTickets } from "@/libs/requests";
import React from "react";
import TicketItemPanel from "@/components/modules/panel/TicketItemPanel/TicketItemPanel";
import {
  AddRounded,
  DoneAllRounded,
  HourglassBottomRounded,
  SendRounded,
  ViewStreamRounded,
} from "@mui/icons-material";
import BackButton from "@/components/modules/panel/BackButton/BackButton";
import Link from "next/link";

const Tickets = async () => {
  const { tickets, ticketPending, ticketAnswer } = await getUserTickets();
  return (
    <div className="relative mb-12">
      <TitleUserPanel title={"تیکت های من"} />
      <div className="absolute top-6 left-0">
        <Link href={`/panel/tickets/insert`}>
          <span className="w-10 h-10 flex justify-center items-center bg-green-500 rounded-full">
            <AddRounded className="text-gray-100" />
          </span>
        </Link>
      </div>
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
        {tickets.length > 0 ? (
          <div className="grid grid-cols-2 gap-2">
            {tickets.map((ticket) => (
              <TicketItemPanel ticket={ticket} key={ticket._id} />
            ))}
          </div>
        ) : (
          <div className="flex rounded-2xl py-2 justify-center linier-bg mt-14">
            <p className="text-sm text-gray-400">اخیرا سفارشی ثبت نشده</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tickets;
