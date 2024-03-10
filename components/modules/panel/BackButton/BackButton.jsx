"use client";
import { ArrowBackRounded } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  
  return (
    <div onClick={() => router.back()} className="absolute top-6 left-0">
      <span className="w-10 h-10 flex rounded-full bg-gray-700 items-center justify-center">
        <ArrowBackRounded className="text-gray-400" />
      </span>
    </div>
  );
};

export default BackButton;
