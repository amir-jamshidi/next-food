import MealItem from "@/components/modules/MealItem/MealItem";
import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import { getUserFavorite } from "@/libs/requests";
import React from "react";

const Favorites = async () => {
  const favorites = await getUserFavorite();
  return (
    <div>
      <TitleUserPanel title={"علاقه مندی های من"} />
      <div className="grid grid-cols-5 gap-3 mt-14">
        {favorites.map((favorite) => (
          <MealItem circle={false} key={favorite._id} meal={favorite.mealID} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
