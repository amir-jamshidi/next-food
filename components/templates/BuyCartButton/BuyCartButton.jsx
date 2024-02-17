"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const BuyCartButton = ({ price }) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const completeBuy = async () => {
    setIsLoading(true);
    axios
      .post("/api/order", { price })
      .then((res) => {
        if (res.status === 201) {
          toast.success("سفارش ثبت شد و در حال ارساله");
          setIsLoading(false);
          router.refresh();
        }
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("خطای ناشناخته");
        console.log(err);
      });
  };

  return (
    <button
      disabled={isLoading}
      onClick={completeBuy}
      className="bg-red-500 text-gray-100 py-2 rounded-lg"
    >
      {isLoading ? "در حال اتصال ..." : "  تسویه حساب و پرداخت آنلاین"}
    </button>
  );
};

export default BuyCartButton;
