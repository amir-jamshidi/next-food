import ConvertToPersian from "@/helpers/convertToPersian";
import Link from "next/link";
import React from "react";
const TicketItemPanel = ({ ticket }) => {
  return (
    <div
      key={ticket._id}
      className="relative dark:bg-gray-800 bg-gray-100 border dark:border-gray-700 border-gray-200 rounded-2xl line-clamp-1 p-3 flex flex-col"
    >
      <p className="dark:text-gray-300 line-clamp-1 text-gray-700 text-justify">{ticket.body}</p>
      <span className=" h-px border border-dashed inline dark:border-gray-700 border-gray-300 mt-3"></span>
      <div className="flex justify-between mt-3">
        <div className="flex items-center gap-x-1">
          <span
            className={`w-2 h-2 inline rounded top-2 ml-1 right-2 ${
              ticket.isAnswer === 1 ? "bg-green-500" : "bg-orange-500"
            }`}
          ></span>
          <span className="text-sm dark:text-gray-300 text-gray-600">ارسال شده در</span>
          <span className="font-dana dark:text-gray-300 text-gray-600 text-sm pt-0.5">
            {ConvertToPersian(ticket.createdAt)}
          </span>
        </div>
        <Link className="text-sm text-green-400" href={`/panel/tickets/${ticket._id}`}>
          نمایش جزئیات
        </Link>
      </div>
    </div>
  );
};

export default TicketItemPanel;
