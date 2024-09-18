import { FavoriteRounded } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex h-16 bg-gray-200 dark:bg-gray-800 mt-8">
      <div className="flex justify-center items-center gap-x-0.5 w-full h-full">
        <p className="text-sm text-gray-700 dark:text-gray-300">طراحی شده با</p>
        <span className="pb-0.5">
          <FavoriteRounded fontSize="small" className="text-red-500"/>
        </span>
        <p className="text-sm text-gray-700 dark:text-gray-300">توسط دِوامیر</p>
      </div>
    </footer>
  );
};

export default Footer

