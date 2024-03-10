"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

const NotificationButton = ({ notificationID }) => {
  const router = useRouter();
  const seenNotification = () => {
    axios
      .put(`/api/notification/${notificationID}`)
      .then((res) => {
        router.refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <span onClick={seenNotification} className="text-green-600 cursor-pointer">دیدم</span>;
};

export default NotificationButton;
