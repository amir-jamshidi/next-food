import React from "react";

const TitleAdminPage = ({ title }) => {
  return (
    <div className="flex items-center gap-x-4 mb-8">
      <span className="flex-1 bg-gray-100 dark:bg-gray-600 inline-block h-px"></span>
      <h1 className="text-center text-xl dark:text-gray-300 text-gray-800">{title}</h1>
      <span className="flex-1 bg-gray-100 dark:bg-gray-600 inline-block h-px"></span>
    </div>
  );
};

export default TitleAdminPage;
