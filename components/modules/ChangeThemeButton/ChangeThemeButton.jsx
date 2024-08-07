"use client";

import  ThemeContext  from "@/contexts/ThemeContext";
import { BedtimeRounded, LightModeRounded } from "@mui/icons-material";
import { useContext } from "react";

const ChangeThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };

  return (
    <div onClick={changeTheme} className="cursor-pointer">
      <span className="dark:hidden group delay-75 bg-gray-700 group transition-colors hover:bg-gray-100 rounded-full md:h-10 md:w-10 h-8 w-8 flex justify-center items-center">
        <BedtimeRounded fontSize="small" className="delay-75 text-gray-100 group-hover:text-gray-700" />
      </span>
      <span className="dark:flex delay-75 group bg-gray-200 transition-colors hover:bg-gray-700 rounded-full md:h-10 md:w-10 h-8 w-8 hidden justify-center items-center">
        <LightModeRounded fontSize="small" className="delay-75 text-gray-700 group-hover:text-gray-200" />
      </span>
    </div>
  );
};

export default ChangeThemeButton;
