import TitleSection from "@/components/modules/TitleSection/TitleSection";
import { getCategoires } from "@/libs/requests";
import Image from "next/image";
import React from "react";


import CategoryItem from "@/components/modules/CategoryItem/CategoryItem";
import MoreSection from "@/components/modules/MoreSection/MoreSection";
const CategoriesSection = async () => {
  const categories = await getCategoires();

  return (
    <div>
      <TitleSection title={"دسته بندی هــا"} />
      <div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 md:gap-1.5 mt-12 divide-x divide-black/0"
        dir="ltr"
      >
        {categories.map((category) => (
          <CategoryItem key={category._id} category={category} />
        ))}
      </div>
      <MoreSection href={'/categories'}/>
    </div>
  );
};

export default CategoriesSection;
