"use client";
import { VerifiedRounded } from "@mui/icons-material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const BuyCartButton = ({ price, addresses }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [addressID, setAddressID] = useState("");

  const router = useRouter();

  const completeBuy = async () => {
    if (!addressID) return toast.error("لطفا آدرس خودتو انتخاب کن");
    setIsLoading(true);
    axios
      .post("/api/order", { price, addressID })
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
      });
  };

  return (
    <>
      <div className="py-2 flex flex-col gap-y-2">
        <p className="text-sm text-gray-600 px-1">آدرس خودتو انتخاب کن</p>
        <div className="flex flex-col gap-y-1">
          {addresses.map((address) => (
            <p
              onClick={() => setAddressID(address._id)}
              key={address._id}
              className="bg-gray-100 py-2 px-3 rounded-lg text-gray-700 cursor-pointer"
            >
              {addressID === address._id && (
                <span className="ml-2">
                  <VerifiedRounded className="text-green-500" />
                </span>
              )}
              {address.name}
            </p>
          ))}
        </div>
      </div>
      <button
        disabled={isLoading}
        onClick={completeBuy}
        className="bg-red-500 text-gray-100 py-2 rounded-lg"
      >
        {isLoading ? "در حال اتصال ..." : "  تسویه حساب و پرداخت آنلاین"}
      </button>
    </>
  );
};

export default BuyCartButton;
