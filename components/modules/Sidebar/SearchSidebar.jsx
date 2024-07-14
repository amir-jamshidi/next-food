"use client";

import ThemeContext from "@/contexts/ThemeContext";
import { SearchRounded } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const SearchSidebar = () => {
  const { setIsOpenSidebar } = useContext(ThemeContext);

  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?query=${query}`);
    setIsOpenSidebar(false);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white dark:bg-gray-700 px-2 flex items-center h-11 mx-4 mt-6 rounded-2xl gap-x-1">
        <span
          onClick={handleSubmit}
          className="flex justify-center items-center"
        >
          <SearchRounded className="text-gray-600 dark:text-gray-400" />
        </span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="دنبال چی هستی ؟"
          className="border-none text-sm w-full outline-none bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
        />
      </div>
    </form>
  );
};

export default SearchSidebar;
