"use client";

import { ThemeContext } from "@emotion/react";
import { CloseRounded } from "@mui/icons-material";
import { useContext } from "react";

const Sidebar = ({ children }) => {
  const { setIsOpenSidebar, isOpenSidebar } = useContext(ThemeContext);

  return (
    <aside
      className={`fixed top-0 ${
        isOpenSidebar
          ? " right-0 visible opacity-100 "
          : " -right-[100%] invisible opacity-0 "
      } z-50 w-full block md:hidden transition-all `}
    >
      <div className="flex">
        <div className="w-[300px] dark:bg-gray-800 bg-gray-200 h-screen relative">
          <span
            onClick={() => setIsOpenSidebar(false)}
            className="absolute left-1 top-5 cursor-pointer"
          >
            <CloseRounded className="text-red-500" />
          </span>
          <div className="flex justify-center items-center h-16 border-b border-b-gray-300 dark:border-b-gray-700/50">
            <h3 className="text-xl font-morabba-bold dark:text-gray-300 text-gray-800">
              نکست فود
            </h3>
          </div>
          <div className="py-4 px-2">

        {children}
          </div>
        </div>
        <div
          onClick={() => setIsOpenSidebar(false)}
          className="flex-1 bg-gray-700/40 h-screen"
        ></div>
      </div>
    </aside>
  );
};

export default Sidebar;
