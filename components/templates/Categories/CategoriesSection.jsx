import CategoryItem from "@/components/modules/CategoryItem/CategoryItem";
import { getAllCategories } from "@/libs/requests";
import React from "react";

const CategoriesSection = async () => {
  const categories = await getAllCategories();

  return (
    <div className="grid grid-cols-2 mt-12 gap-1 md:gap-1.5">
      {categories.map((category) => (
        <CategoryItem key={category._id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesSection;
