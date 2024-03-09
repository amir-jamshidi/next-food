import { ReplyRounded } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import NotificationButton from "./../../../templates/panel/NotificationButton/NotificationButton";

const NotificationItem = ({ notification }) => {
  return (
    <div className="p-2 flex flex-col transition-colors bg-gray-800 rounded-xl">
      <div className="flex items-start gap-x-1.5 ">
        {/* <span
          className={`w-2 h-2 rounded inline-block shrink-0 mt-1.5 ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        ></span> */}
        <p className="text-justify text-gray-300">{notification.message}</p>
      </div>
      <div className="flex justify-between gap-x-1">
        <div>
            <span>{notification.createdAt}</span>
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
