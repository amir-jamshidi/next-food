"use client";

import ThemeContext from "@/contexts/ThemeContext";
import { CloseRounded, SearchRounded } from "@mui/icons-material";
import { useContext } from "react";
import SearchSidebar from "./SearchSidebar";

const Sidebar = ({ children }) => {
  const { setIsOpenSidebar, isOpenSidebar } = useContext(ThemeContext);

  return (
    <aside
      className={`fixed top-0 ${
        isOpenSidebar
          ? " right-0 visible opacity-100 "
          : " invisible opacity-0 "
      } z-50 w-full block md:hidden`}
    >
      <div className="flex">
        <div
          className={`${
            isOpenSidebar ? "right-0" : "-right-[300px]"
          } w-[300px] transition-all absolute dark:bg-gray-800 bg-gray-200 h-screen top-0 bottom-0 z-10`}
        >
          <span
            onClick={() => setIsOpenSidebar(false)}
            className="absolute left-3 top-[22px] cursor-pointer rounded-full w-6 h-6 flex justify-center items-center"
          >
            <CloseRounded className="text-red-500" fontSize="small" />
          </span>
          <div className="flex justify-center items-center h-16 border-b border-b-gray-300 dark:border-b-gray-700/50">
            <h3 className="text-xl font-morabba-bold dark:text-gray-300 text-gray-800">
              نکست فود
            </h3>
          </div>
          <SearchSidebar />
          <div className="py-4 px-2">{children}</div>
        </div>
        <div
          onClick={() => setIsOpenSidebar(false)}
          className="flex-1 bg-gray-700/40 h-screen backdrop-blur-lg"
        ></div>
      </div>
    </aside>
  );
};

export default Sidebar;
