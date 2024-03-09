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

  return <span onClick={seenNotification}>دیدم</span>;
};

export default NotificationButton;
