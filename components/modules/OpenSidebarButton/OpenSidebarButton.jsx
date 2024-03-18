"use client";
import { ThemeContext } from "@emotion/react";
import { MenuRounded } from "@mui/icons-material";
import React, { useContext } from "react";

const OpenSidebarButton = () => {
  const { setIsOpenSidebar } = useContext(ThemeContext);

  return (
    <span
      onClick={()=>setIsOpenSidebar(true)}
      className="w-8 h-8 rounded-full bg-gray-700 flex justify-center items-center cursor-pointer"
    >
      <MenuRounded className="text-gray-200" fontSize="small" />
    </span>
  );
};

export default OpenSidebarButton;
