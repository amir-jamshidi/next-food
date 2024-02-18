"use client";

import ToastPromise from "@/utils/ToastPromise";
import { AddRounded, DeleteRounded, RemoveRounded } from "@mui/icons-material";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const CartItemControl = ({ mealID, count, sizeID }) => {
  const router = useRouter();

  const addCount = () => {
    console.log(sizeID);

    const promise = axios
      .post("/api/cart", { mealID, sizeID, action: "PLUS" })
      .then((res) => {
        if (res.status === 200) {
          router.refresh();
        }
      })
      .catch((err) => {});
    ToastPromise(promise, "تعداد محصول اضافه شد");
  };
  const removeFromCart = () => {
    const promise = axios
      .post("/api/cart", { mealID, sizeID, action: "REMOVE" })
      .then((res) => {
        if (res.status === 200) {
          router.refresh();
        }
      })
      .catch((err) => {});
    ToastPromise(promise, "محصول از سبد حذف شد");
  };
  const minusCount = () => {
    const promise = axios
      .post("/api/cart", { mealID, sizeID, action: "MINUS" })
      .then((res) => {
        if (res.status === 200) {
          router.refresh();
        }
      })
      .catch((err) => {});
    ToastPromise(promise, "تعداد محصول کم شد");
  };

  return (
    <div className="flex justify-center items-center bg-white rounded-lg py-2 px-3">
      <span
        onClick={addCount}
        className="px-1 py-1 hover:bg-gray-100 transition-colors cursor-pointer rounded-full"
      >
        <AddRounded className="text-green-500" />
      </span>
      <p className="font-dana-bold min-w-8 text-center text-gray-700">
        {count}
      </p>
      {count === 1 ? (
        <span
          onClick={removeFromCart}
          className="px-1 py-1 hover:bg-gray-100 transition-colors cursor-pointer rounded-full"
        >
          <DeleteRounded className="text-red-500" />
        </span>
      ) : (
        <span
          onClick={minusCount}
          className="px-1 py-1 hover:bg-gray-100 transition-colors cursor-pointer rounded-full"
        >
          <RemoveRounded className="text-red-500" />
        </span>
      )}
    </div>
  );
};

export default CartItemControl;
