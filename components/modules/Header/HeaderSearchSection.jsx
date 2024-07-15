"use client";

import { SearchRounded } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HeaderSearchSection = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    router.push(`/search?query=${query}`);
    setQuery("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="flex gap-x-1.5 px-2 items-center bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full h-10 w-72">
        <span
          onClick={handleSubmit}
          className="flex justify-center items-center cursor-pointer"
        >
          <SearchRounded className="text-gray-600 dark:text-gray-400" />
        </span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="دنبال چی هستی ؟ برام نویس"
          type="text"
          className="px-0.5 w-full rounded-full h-full dark:text-gray-300 dark:bg-gray-800 bg-gray-200 text-gray-700 text-sm outline-none border-none"
          autoComplete="off"
        />
      </div>
    </form>
  );
};

export default HeaderSearchSection;
