import TitleSection from "@/components/modules/TitleSection/TitleSection";
import { getCategoires } from "@/libs/requests";
import Image from "next/image";
import React from "react";
import imgSam from "@/public/images/pizzasam.png";
const CategoriesSection = async () => {
  const categories = await getCategoires();

  return (
    <div>
      <TitleSection title={"دسته بندی هــا"} />
      <div className="grid grid-cols-6 gap-2 my-12 divide-x divide-black/5" dir="ltr">
        {categories.map((category) => (
          <div className="" key={category._id}>
            <div className="relative rounded-full">
              <Image
                className=""
                src={imgSam}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <p className="text-lg text-red-500">{category.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
