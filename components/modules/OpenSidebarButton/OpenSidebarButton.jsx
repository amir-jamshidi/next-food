"use client";

import  ThemeContext  from "@/contexts/ThemeContext";
import { MenuRounded } from "@mui/icons-material";
import React, { useContext } from "react";

const OpenSidebarButton = () => {

  const {setIsOpenSidebar} = useContext(ThemeContext);

  return (
    <span
      onClick={() => setIsOpenSidebar(true)}
      className="w-8 h-8 rounded-full dark:bg-gray-700 bg-gray-300 flex justify-center items-center cursor-pointer"
    >
      <MenuRounded
        className="dark:text-gray-200 text-gray-700"
        fontSize="small"
      />
    </span>
  );
};

export default OpenSidebarButton;
