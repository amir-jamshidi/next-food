import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import { getUserTickets } from "@/libs/requests";
import React from "react";
import { ConvertToPersian } from "@/helpers/convertToPersian";
import Link from "next/link";

const Tickets = async () => {
  const tickets = await getUserTickets();
  return (
    <div>
      <TitleUserPanel title={"تیکت های من"} />
      <div className="mt-14">
        <div className="grid grid-cols-2 gap-2">
          {tickets.map((ticket) => (
            <div key={ticket._id} className="relative border border-gray-700 rounded-2xl line-clamp-2 p-3 flex flex-col">
              <p className="text-gray-300 line-clamp-2  text-justify">
                {ticket.body}
              </p>
              <span className=" h-px border border-dashed inline border-gray-700 mt-3"></span>
              <div className="flex justify-between mt-3">
                <div className="flex items-center gap-x-1">
                  <span
                    className={`w-2 h-2 inline rounded top-2 ml-1 right-2 ${
                      ticket.isAnswer === 1 ? "bg-green-500" : "bg-orange-500"
                    }`}
                  ></span>
                  <span className="text-sm text-gray-300">ارسال شده در</span>
                  <span className="font-dana text-gray-300 text-sm pt-0.5">
                    {ConvertToPersian(ticket.createdAt)}
                  </span>
                </div>
                <Link className="text-sm text-green-400" href={""}>
                  نمایش جزئیات
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
