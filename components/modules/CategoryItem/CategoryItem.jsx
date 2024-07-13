import Image from "next/image";
import React from "react";
import imgSam from "@/public/images/pizzasam.png";
import Link from "next/link";
const CategoryItem = ({ category }) => {
  return (
    <Link href={`category/${category.href}`}>
      <div
        className="cursor-pointer py-5 rounded-2xl transition-all bg-white dark:bg-gray-800 px-2.5"
        key={category._id}
      >
        <div className="relative rounded-full h-36">
          <Image
            src={category?.img}
            fill
            style={{ objectFit: "contain" }}
            alt={category.title}
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
