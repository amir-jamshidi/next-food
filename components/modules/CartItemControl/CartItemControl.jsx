"use client";

import { AddCountCart, MinusCountCart, RemoveCart } from "@/libs/postRequests";
import { AddRounded, DeleteRounded, RemoveRounded } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CartItemControl = ({ mealID, count, sizeID }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const startAddCount = () => {
    setIsLoading(true);
    AddCountCart({ mealID, sizeID, action: "PLUS" }, (res) => {
      setIsLoading(false);
      router.refresh();
    });
  };

  const startRemoveCart = () => {
    setIsLoading(true);
    RemoveCart({ mealID, sizeID, action: "REMOVE" }, (res) => {
      setIsLoading(false);
      router.refresh();
    });
  };

  const minusCount = () => {
    setIsLoading(true);
    MinusCountCart({ mealID, sizeID, action: "MINUS" }, (res) => {
      setIsLoading(false);
      router.refresh();
    });
  };

  return (
    <div className="flex justify-center items-center bg-white dark:bg-gray-800 rounded-lg py-2 px-3">
      <button
        disabled={isLoading}
        onClick={startAddCount}
        className="px-1 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer rounded-full"
      >
        <AddRounded className="text-green-500" />
      </button>
      <p className="font-dana-bold min-w-8 text-center text-gray-700 dark:text-gray-200">
        {count}
      </p>
      {count === 1 ? (
        <button
          disabled={isLoading}
          onClick={startRemoveCart}
          className="px-1 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer rounded-full"
        >
          <DeleteRounded className="text-red-500" />
        </button>
      ) : (
        <button
          disabled={isLoading}
          onClick={minusCount}
          className="px-1 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer rounded-full"
        >
          <RemoveRounded className="text-red-500" />
        </button>
      )}
    </div>
  );
};

export default CartItemControl;
