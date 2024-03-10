"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

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

  return (
    <button onClick={removeAddress} className="text-red-500">
      حذف
    </button>
  );
};

export default DeleteAddressButton;
