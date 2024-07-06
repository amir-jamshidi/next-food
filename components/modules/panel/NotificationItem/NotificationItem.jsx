import { ReplyRounded } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import NotificationButton from "./../../../templates/panel/NotificationButton/NotificationButton";
import ConvertToPersian from "@/helpers/convertToPersian";

const NotificationItem = ({ notification }) => {
  return (
    <div className="py-2.5 px-2 flex flex-col transition-colors dark:bg-gray-900 bg-gray-200 rounded-xl">
      <div className="flex items-start gap-x-1.5 ">
        <p className="text-justify dark:text-gray-300 text-gray-700">{notification.message}</p>
      </div>
      <div className="flex justify-between gap-x-1 mt-1.5 items-center">
        <div>
          <span className="font-dana dark:text-gray-400 text-gray-600 text-sm">
            {ConvertToPersian(notification.createdAt)}
          </span>
        </div>
        <div>
          {notification.href && (
            <Link href={`${notification.href}`}>
              <span className="inline-block">
                <ReplyRounded className="text-sky-500 rotate" />
              </span>
            </Link>
          )}
          <NotificationButton notificationID={String(notification._id)} />
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
