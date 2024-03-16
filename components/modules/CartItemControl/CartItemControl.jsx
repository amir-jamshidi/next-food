"use client";

import { AddCountCart, MinusCountCart, RemoveCart } from "@/libs/postRequests";
import { AddRounded, DeleteRounded, RemoveRounded } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const CartItemControl = ({ mealID, count, sizeID }) => {
  const router = useRouter();

  const startAddCount = () => {
    AddCountCart({ mealID, sizeID, action: "PLUS" }, (res) => {
      router.refresh();
    });
  };

  const startRemoveCart = () => {
    RemoveCart({ mealID, sizeID, action: "REMOVE" }, (res) => {
      router.refresh();
    });
  };

  const minusCount = () => {
    MinusCountCart({ mealID, sizeID, action: "MINUS" } , (res=>{
      router.refresh();
    }))
  };

  return (
    <div className="flex justify-center items-center bg-white dark:bg-gray-800 rounded-lg py-2 px-3">
      <span
        onClick={startAddCount}
        className="px-1 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer rounded-full"
      >
        <AddRounded className="text-green-500" />
      </span>
      <p className="font-dana-bold min-w-8 text-center text-gray-700 dark:text-gray-200">
        {count}
      </p>
      {count === 1 ? (
        <span
          onClick={startRemoveCart}
          className="px-1 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer rounded-full"
        >
          <DeleteRounded className="text-red-500" />
        </span>
      ) : (
        <span
          onClick={minusCount}
          className="px-1 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer rounded-full"
        >
          <RemoveRounded className="text-red-500" />
        </span>
      )}
    </div>
  );
};

export default CartItemControl;
