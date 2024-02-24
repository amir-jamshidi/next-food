import React from "react";

const TitleSection = ({ title }) => {
  return (
    <div className="flex justify-center items-center">
      <span className="flex-1 inline-block h-px bg-gray-200 dark:bg-gray-800"></span>
      <h3 className="text-gray-800 dark:text-gray-300 mx-5">
        منوی <span className="text-red-500 text-lg">{title}</span>
      </h3>
      <span className="flex-1 inline-block h-px bg-gray-200  dark:bg-gray-800"></span>
    </div>
  );
};

export default TitleSection;
