"use client";
import { ArrowBackRounded } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  
  return (
    <div onClick={() => router.back()} className="absolute top-6 left-0 cursor-pointer">
      <span className="w-10 h-10 flex rounded-full dark:bg-gray-700 bg-gray-200 items-center justify-center border border-gray-400">
        <ArrowBackRounded className="dark:text-gray-200 text-gray-700" />
      </span>
    </div>
  );
};

export default BackButton;
