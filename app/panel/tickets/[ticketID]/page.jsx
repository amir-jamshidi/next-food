import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import ConvertToPersian from "@/helpers/convertToPersian";
import { getTicketDetails } from "@/libs/requests";
import { NotListedLocationRounded } from "@mui/icons-material";
import React from "react";

const ShowTicket = async ({ params: { ticketID } }) => {
  const ticket = await getTicketDetails(ticketID);
  return (
    <div>
      <TitleUserPanel title={"جزئیات تیکت من"} />
      <div className="mt-14">
        <div className="border border-gray-700 p-3 mx-3 flex rounded-2xl text-sm">
          <div className="flex gap-x-0.5 items-center border-l border-l-gray-700 pl-2">
            <span className="">
              <NotListedLocationRounded className="text-gray-300" />
            </span>
            <p className="text-gray-300">وضعیت تیکت : </p>
            <p
              className={`${
                ticket.isAnswer === 1 ? "text-green-500" : "text-orange-500"
              }`}
            >
              {ticket.isAnswer === 1 ? "پاسخ پشتیبان" : "انتظار پاسخ"}
            </p>
          </div>
          <div
            className={`${
              ticket.orderID ? "border-l border-l-gray-700" : ""
            } flex gap-x-0.5 items-center  px-2`}
          >
            <p className="text-gray-300">شناسه تیکت : </p>
            <p className={`text-gray-300 font-dana pt-0.5`}>{ticket.code}</p>
          </div>
          {ticket.orderID && (
            <div className="flex gap-x-0.5 items-center px-2">
              <p className="text-gray-300">شناسه سفارش در حال پیگیری : </p>
              <p className={`text-gray-300 font-dana pt-0.5`}>
                {ticket.orderID?.code}
              </p>
            </div>
          )}
        </div>
        <div className="mt-8">
          <div className="p-3 relative">
            <span className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center text-sm absolute -right-1 -top-1">
              شما
            </span>
            <div className="border p-2 rounded-2xl rounded-tr border-gray-700">
              <p className="text-gray-200 pr-5">{ticket.body}</p>
            </div>
            <div className="text-sm text-gray-400 flex gap-x-0.5 pr-7 mt-1">
              <p>ارسال شده در :</p>
              <p className="font-dana">{ConvertToPersian(ticket.createdAt)}</p>
            </div>
          </div>
          {ticket.isAnswer === 1 && (
            <div className="p-3 relative">
              <span className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center text-sm absolute -left-1 -top-1">
                پاسخ
              </span>
              <div className="border p-2 rounded-2xl rounded-tl border-gray-700">
                <p className="text-gray-200 pl-5">{ticket.answerContent}</p>
              </div>
              <div className="text-sm text-gray-400 flex justify-end gap-x-0.5 pl-7 mt-1">
                <p>پاسخ داده شده در :</p>
                <p className="font-dana">
                  {ConvertToPersian(ticket.updatedAt)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowTicket;
