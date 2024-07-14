import TitleSection from "@/components/modules/TitleSection/TitleSection";
import { getBestSellers } from "@/libs/requests";
import { LocationOnRounded, StarRounded } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

const BestSellersSection = async () => {
  const sellers = await getBestSellers();

  return (
    <div className="mt-12">
      <TitleSection isMenu={false} title={"برترین فروشنده"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-1.5  mt-12">
        {sellers.map((seller) => (
          <div className="bg-white dark:bg-gray-800 rounded-2xl grid grid-cols-[3fr,5fr] p-2">
            <div className="relative rounded-xl overflow-hidden">
              <Image fill className="object-cover" src={seller.photo} />
            </div>
            <div className="px-2 py-1 flex flex-col gap-y-3">
              <div className="flex flex-col gap-y-2.5">
                <p className="text-gray-700 dark:text-gray-300 font-morabba-bold tracking-wide">
                  {seller.name}
                </p>
                <p className="text-sm line-clamp-3 dark:text-gray-400 text-gray-600 tracking-tight">
                  {seller.bio}
                </p>
              </div>
              <div className="flex justify-end">
                <div className="flex items-center border-l border-l-gray-200 dark:border-l-gray-700 pl-2 ml-2">
                  <span className="flex items-center justify-center">
                    <LocationOnRounded
                      fontSize="small"
                      className="text-green-400"
                    />
                  </span>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {seller.location}
                  </p>
                </div>
                <div className="flex">
                  <StarRounded fontSize="small" className="text-amber-500" />
                  <StarRounded fontSize="small" className="text-amber-500" />
                  <StarRounded fontSize="small" className="text-amber-500" />
                  <StarRounded fontSize="small" className="text-amber-500" />
                  <StarRounded fontSize="small" className="text-amber-500" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellersSection;
