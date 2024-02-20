import {
  KeyboardArrowRightRounded,
  MoreHorizRounded,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const MoreSection = ({ href }) => {
  return (
    <div className="flex justify-center items-center mb-8">
      <Link href={`/category/${href}`}>
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
