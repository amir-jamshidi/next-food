"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const DeleteAddressButton = ({ addressID }) => {
  const router = useRouter();

  const removeAddress = () => {
    const promise = axios
      .delete(`/api/address/${addressID}`)
      .then((res) => {
        console.log(res);
        router.refresh();
      })
      .catch((err) => {
        console.log(err);
      });

    toast.promise(promise, {
      loading: "لطفا صبر کنید ...",
      success: "آدرس با موفقیت حذف شد",
      error: "خطای ناشناخته",
    });
  };

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

    if (isConfirmed) removeAddress();
  };

  return (
    <button onClick={removeAddressDialog} className="text-red-500">
      حذف
    </button>
  );
};

export default DeleteAddressButton;
