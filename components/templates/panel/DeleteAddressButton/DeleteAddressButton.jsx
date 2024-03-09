"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteAddressButton = ({ addressID }) => {
  const router = useRouter();
  const removeAddress = () => {
    console.log(addressID);
    axios
      .delete(`/api/address/${addressID}`)
      .then((res) => {
        console.log(res);
        router.refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button onClick={removeAddress} className="text-red-500">
      حذف
    </button>
  );
};

export default DeleteAddressButton;
