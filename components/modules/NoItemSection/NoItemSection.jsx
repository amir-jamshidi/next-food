import React from "react";

const NoItemSection = ({ categoryTitle = "" }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-2 rounded-2xl mt-12 mb-12 flex justify-center items-center h-72">
      <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
        برای <span className="text-red-500 font-morabba-bold mx-0.5">{categoryTitle}</span> هنوز آیتمی نیست
      </p>
    </div>
  );
};

export default NoItemSection;
