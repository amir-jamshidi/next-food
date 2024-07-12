"use client";

import { SeenNotification } from "@/libs/postRequests";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const NotificationButton = ({ notificationID }) => {
  const router = useRouter();
  const [isLoading, startTransition] = useTransition();
  const startSeenNotification = () => {
    startTransition(() =>
      SeenNotification(notificationID, (_) => {
        router.refresh();
      })
    );
  };

  return (
    <button
      disabled={isLoading}
      onClick={startSeenNotification}
      className="text-green-600 cursor-pointer my-auto text-xs md:text-sm"
    >
      {isLoading ? <div className="loader-notif ml-1"></div> : "باشه"}
    </button>
  );
};

export default NotificationButton;
