import Image from "next/image";
import React from "react";
import imgSam from "@/public/images/pizzasam.png";
const CategoryItem = ({category}) => {
  return (
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
  );
};

export default CategoryItem;
