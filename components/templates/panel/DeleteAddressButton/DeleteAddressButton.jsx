"use client";

import { RemoveAddress } from "@/libs/postRequests";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const DeleteAddressButton = ({ addressID }) => {
  const router = useRouter();

  const removeAddressDialog = async () => {
    const { isConfirmed } = await Swal.fire({
      title: "از حذف آدرس مطمئنی ؟",
      text: "آدرس مورد نظر برای همیشه حذف خواهد شد",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "آره",
      cancelButtonText: "نه !",
    });

    if (!isConfirmed) return;
    RemoveAddress(addressID, (_) => {
      router.refresh();
    });
  };

  return (
    <button onClick={removeAddressDialog} className="text-red-500">
      حذف
    </button>
  );
};

export default DeleteAddressButton;
