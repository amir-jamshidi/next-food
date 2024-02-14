import Image from "next/image";
import React from "react";
import imgSam from "@/public/images/pizzasam.png";
import Link from "next/link";
const CategoryItem = ({ category }) => {
  return (
    <Link href={`category/${category.href}`}>
      <div
        className="cursor-pointer py-5 rounded-2xl transition-all category-item "
        key={category._id}
      >
        <div className="relative rounded-full">
          <Image
            src={imgSam}
            style={{ objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex justify-center">
          <p className="text-lg text-red-500">{category.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
