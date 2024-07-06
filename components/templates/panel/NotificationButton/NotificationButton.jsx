"use client";

import { SeenNotification } from "@/libs/postRequests";
import { useRouter } from "next/navigation";

const NotificationButton = ({ notificationID }) => {
  const router = useRouter();
  const startSeenNotification = () => {
    SeenNotification(notificationID, (_) => {
      router.refresh();
    });
  };

  return (
    <span
      onClick={startSeenNotification}
      className="text-green-600 cursor-pointer"
    >
      باشه
    </span>
  );
};

export default NotificationButton;
