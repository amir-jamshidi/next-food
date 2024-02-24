import {
  KeyboardArrowRightRounded,
  MoreHorizRounded,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const MoreSection = ({ href }) => {
  return (
    <div className="flex justify-center items-center flex-col mb-8">
      <div className="flex justify-between w-14 mt-5 mb-3">
        <span className="h-16 w-1 bg-red-400 rounded-md"></span>
        <span className="h-8 mt-4 w-1 bg-red-300 rounded-md"></span>
        <span className="h-20 w-1 bg-red-500 rounded-md"></span>
        <span className="h-8 mt-4 w-1 bg-red-300 rounded-md"></span>
        <span className="h-16 w-1 bg-red-400 rounded-md"></span>
      </div>
      <Link href={`/category/${href}`} className="hover:scale-110 transition-all delay-75">
        <div className="w-14 h-14 bg-red-500 rounded-full flex justify-center items-center">
          <div className="w-11 h-11 bg-red-400 rounded-full flex justify-center items-center">
            <span className="">
              <KeyboardArrowRightRounded
                fontSize="medium"
                className="text-white"
              />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MoreSection;
