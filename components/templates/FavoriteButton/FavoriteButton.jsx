"use client";
import { FavoriteBorderRounded, FavoriteRounded } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";

const FavoriteButton = ({ isFavorite: isFavoriteMeal, mealID }) => {
  const [isFavorite, setIsFavorite] = useState(isFavoriteMeal);

  const addToFavorite = () => {
    console.log("ADD");
    axios
      .post(`/api/favorite/${mealID}`)
      .then((res) => {
        if (res.status === 201) setIsFavorite(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeFromFavorite = () => {
    axios
      .delete(`/api/favorite/${mealID}`)
      .then((res) => {
        if (res.status === 200) {
          setIsFavorite(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        onClick={isFavorite ? removeFromFavorite : addToFavorite}
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
