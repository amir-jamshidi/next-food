"use client";

import { ThemeContext } from "@emotion/react";
import { ArrowLeftRounded } from "@mui/icons-material";
import Link from "next/link";
import { useContext } from "react";

const SidebarText = ({ title, href }) => {
  const { setIsOpenSidebar } = useContext(ThemeContext);

  return (
    <p className="px-1.5 dark:text-gray-300 text-gray-700">
      <Link href={`${href}`} onClick={() => setIsOpenSidebar(false)}>
        <span>
          <ArrowLeftRounded className="text-red-500" />
        </span>
        {title}
      </Link>
    </p>
  );
};

export default SidebarText;
