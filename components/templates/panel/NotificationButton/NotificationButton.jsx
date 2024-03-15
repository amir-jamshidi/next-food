"use client";

import { SeenNotification } from "@/libs/postRequests";
import axios from "axios";
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
      دیدم
    </span>
  );
};

export default NotificationButton;
