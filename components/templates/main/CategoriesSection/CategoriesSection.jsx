import TitleSection from "@/components/modules/TitleSection/TitleSection";
import { getCategoires } from "@/libs/requests";
import Image from "next/image";
import React from "react";
import imgSam from "@/public/images/pizzasam.png";
import CategoryItem from "@/components/modules/CategoryItem/CategoryItem";
const CategoriesSection = async () => {
  const categories = await getCategoires();

  return (
    <div>
      <TitleSection title={"دسته بندی هــا"} />
      <div
        className="grid grid-cols-6 gap-2 my-12 divide-x divide-black/5"
        dir="ltr"
      >
        {categories.map((category) => (
          <CategoryItem key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
