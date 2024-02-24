import React from "react";

const TitleAdminPage = ({ title }) => {
  return (
    <div className="flex items-center gap-x-4 mb-8">
      <span className="flex-1 bg-gray-100 inline-block h-px"></span>
      <h1 className="text-center text-xl">{title}</h1>
      <span className="flex-1 bg-gray-100 inline-block h-px"></span>
    </div>
  );
};

export default TitleAdminPage;
