import BackButton from "@/components/modules/panel/BackButton/BackButton";
import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import ConvertToPersian from "@/helpers/convertToPersian";
import { getTicketDetails } from "@/libs/requests";
import { NotListedLocationRounded } from "@mui/icons-material";
import { notFound } from "next/navigation";
import React from "react";
export const metadata = {
  title: `پنل کاربری | مشاهده تیکت  `,
};
const ShowTicket = async ({ params: { ticketID } }) => {
  const ticket = await getTicketDetails(ticketID);

  if (!ticket) return notFound();

  return (
    <div className="relative">
      <TitleUserPanel title={"جزئیات تیکت من"} />
      <BackButton />
      <div className="mt-14">
        <div className="hidden md:flex  border border-gray-200 dark:border-gray-700 p-3 mx-3 bg-gray-100 dark:bg-gray-800  rounded-2xl text-sm">
          <div className="flex gap-x-0.5 items-center border-l border-l-gray-200 dark:border-l-gray-700 pl-2">
            <span className="">
              <NotListedLocationRounded className="dark:text-gray-300 text-gray-700" />
            </span>
            <p className="dark:text-gray-300 text-gray-700">وضعیت تیکت : </p>
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
              ticket.orderID
                ? "border-l border-l-gray-200 dark:border-l-gray-700"
                : ""
            } flex gap-x-0.5 items-center  px-2`}
          >
            <p className="dark:text-gray-300 text-gray-700">شناسه تیکت : </p>
            <p className={`dark:text-gray-300 text-gray-700 font-dana pt-0.5`}>
              {ticket.code}
            </p>
          </div>
          {ticket.orderID && (
            <div className="flex gap-x-0.5 items-center px-2">
              <p className="dark:text-gray-300 text-gray-700">
                شناسه سفارش در حال پیگیری :{" "}
              </p>
              <p
                className={`dark:text-gray-300 text-gray-700 font-dana pt-0.5`}
              >
                {ticket.orderID?.code}
              </p>
            </div>
          )}
        </div>

        <div className="flex divide-y divide-gray-200 bg-gray-100 dark:bg-gray-800 dark:divide-gray-700 flex-col md:hidden border border-gray-200 dark:border-gray-700 px-2 py-1.5 rounded-2xl mx-3">
          <div className="flex gap-x-0.5 items-center py-1">
            <span className="">
              <NotListedLocationRounded className="dark:text-gray-300 text-gray-700" />
            </span>
            <p className="dark:text-gray-300 text-gray-700">وضعیت تیکت : </p>
            <p
              className={`${
                ticket.isAnswer === 1 ? "text-green-500" : "text-orange-500"
              }`}
            >
              {ticket.isAnswer === 1 ? "پاسخ پشتیبان" : "انتظار پاسخ"}
            </p>
          </div>

          <div className={`flex gap-x-0.5 items-center px-2 py-1`}>
            <p className="dark:text-gray-300 text-gray-700">شناسه تیکت : </p>
            <p className={`dark:text-gray-300 text-gray-700 font-dana pt-0.5`}>
              {ticket.code}
            </p>
          </div>

          {ticket.orderID && (
            <div className="flex gap-x-0.5 items-center px-2 py-1">
              <p className="dark:text-gray-300 text-gray-700">شناسه سفارش : </p>
              <p
                className={`dark:text-gray-300 text-gray-700 font-dana pt-0.5`}
              >
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
            <div className="border p-2 rounded-2xl rounded-tr border-gray-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
              <p className="dark:text-gray-200 text-gray-800 pr-5">
                {ticket.body}
              </p>
            </div>
            <div className="text-sm dark:text-gray-400 text-gray-600 flex gap-x-0.5 pr-7 mt-1">
              <p>ارسال شده در :</p>
              <p className="font-dana">{ConvertToPersian(ticket.createdAt)}</p>
            </div>
          </div>
          {ticket.isAnswer === 1 && (
            <div className="p-3 relative">
              <span className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center text-sm absolute -left-1 -top-1">
                پاسخ
              </span>
              <div className="border p-2 rounded-2xl rounded-tl border-gray-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
                <p className="dark:text-gray-200 text-gray-800 pl-5">
                  {ticket.answerContent}
                </p>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 flex justify-end gap-x-0.5 pl-7 mt-1">
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
