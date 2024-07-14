"use client";

import { SearchRounded } from "@mui/icons-material";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("query") || "");

  useEffect(() => {
    const timmer = setTimeout(() => {
      router.replace(`/search?query=${query}`);
    }, 500);
    return () => clearTimeout(timmer);
  }, [query, router]);

  useEffect(() => {
    setQuery(searchParams.get("query"));
  }, [searchParams]);

  return (
    <div className="bg-white dark:bg-gray-800 p-2 rounded-2xl mt-12">
      <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-2xl px-2 gap-x-2">
        <span className="flex justify-center">
          <SearchRounded className="text-gray-600 dark:text-gray-400" />
        </span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="خوردنی مورد علاقتو بنویس برام"
          className="border-none bg-gray-100 dark:bg-gray-700 outline-none rounded-xl h-11 w-full text-sm text-gray-700 dark:text-gray-300"
        />
      </div>
    </div>
  );
};

export default SearchComponent;
