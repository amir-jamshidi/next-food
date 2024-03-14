"use client";
import { AddToFavorite, RemoveFromFavorite } from "@/libs/postRequests";
import { FavoriteBorderRounded, FavoriteRounded } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FavoriteButton = ({ isFavorite: isFavoriteMeal, mealID }) => {
  const [isFavorite, setIsFavorite] = useState(isFavoriteMeal);
  const router = useRouter();

  const startAddToFavorite = () => {
    AddToFavorite(mealID, (_) => {
      setIsFavorite(true);
      router.refresh();
    });
  };

  const startRemoveFromFavorite = () => {
    RemoveFromFavorite(mealID, (_) => {
      setIsFavorite(false);
      router.refresh();
    });
  };

  return (
    <>
      <div
        onClick={isFavorite ? startRemoveFromFavorite : startAddToFavorite}
        className={`${
          isFavorite ? "bg-red-500 " : " bg-gray-100 "
        } cursor-pointer transition-colors absolute top-11 z-10 right-0 w-10 h-10 rounded-full flex items-center justify-center`}
      >
        {isFavorite ? (
          <span>
            <FavoriteRounded className="text-gray-100" />
          </span>
        ) : (
          <span>
            <FavoriteBorderRounded className="text-gray-400" />
          </span>
        )}
      </div>
    </>
  );
};

export default FavoriteButton;
