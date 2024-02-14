import { getMeal } from "@/libs/requests";
import React from "react";

const page = async ({ params: { mealHref } }) => {
  const meal = await getMeal(mealHref);
  return (
    <div>
      <div className="my-8 bg-white p-2 rounded-2xl">
        <div className="grid grid-cols-2">
          <div>s</div>
          <div>s</div>
        </div>
      </div>
    </div>
  );
};

export default page;
