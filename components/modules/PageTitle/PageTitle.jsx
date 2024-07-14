import React from "react";

const PageTitle = ({ title = "" }) => {
  return (
    <div className="flex items-center mt-8">
      <span className="flex-1 inline-block h-px bg-black/5 dark:bg-gray-700"></span>
      <h1 className="text-center text-3xl font-morabba-bold mx-5 text-red-500">
        {title}
      </h1>
      <span className="flex-1 inline-block h-px bg-black/5 dark:bg-gray-700"></span>
    </div>
  );
};

export default PageTitle;
