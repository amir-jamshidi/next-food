import TitleSection from "@/components/modules/TitleSection/TitleSection";
import { getCategoires } from "@/libs/requests";
import React from "react";

const CategoriesSection = async () => {
  const categories = await getCategoires();

  return (
    <div>
      <TitleSection title={"منوی دسته بندی هــا"} />
    </div>
  );
};

export default CategoriesSection;
