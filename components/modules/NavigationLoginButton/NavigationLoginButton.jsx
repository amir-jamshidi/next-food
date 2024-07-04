"use client";
import ThemeContext from "@/contexts/ThemeContext";
import Link from "next/link";
import { useContext } from "react";

const NavigationLoginButton = () => {
  const { setIsOpenSidebar } = useContext(ThemeContext);

  return (
    <Link
      onClick={() => setIsOpenSidebar(false)}
      href="/login"
      className="border text-sm py-1.5 px-2 bg-gray-200 dark:bg-gray-800 dark:border-gray-700 border-gray-300 dark:text-gray-300 text-gray-700 rounded-2xl"
    >
      ورود یا ثبت نام
    </Link>
  );
};

export default NavigationLoginButton;
