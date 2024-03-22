import MealItem from "@/components/modules/MealItem/MealItem";
import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import { getUserFavorite } from "@/libs/requests";
import { LunchDiningRounded } from "@mui/icons-material";
import React from "react";

const Favorites = async () => {
  const favorites = await getUserFavorite();
  return (
    <div className="mb-12">
      <TitleUserPanel title={"علاقه مندی های من"} />
      <div className="mt-14">
        <div className="grid gap-1.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="h-20 dark:bg-gray-800 bg-gray-100 border rounded-2xl dark:border-gray-700 border-gray-200 flex justify-center items-center gap-x-1 dark:text-gray-200 text-gray700">
            <span>
              <LunchDiningRounded className="text-red-500" />
            </span>
            <span>غدا های در علاقه مندی</span>
            <span className="font-dana-bold">
              {Number(favorites.length).toLocaleString()}
            </span>
            <span>غدا</span>
          </div>
        </div>
      </div>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
          {favorites.map((favorite) => (
            <MealItem
              circle={false}
              key={favorite._id}
              meal={favorite.mealID}
            />
          ))}
        </div>
      ) : (
        <div className="flex rounded-2xl py-2 justify-center linier-bg mt-14">
          <p className="text-sm text-gray-600 dark:text-gray-400">چیزی در علاقه مندی وجود ندارد</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
