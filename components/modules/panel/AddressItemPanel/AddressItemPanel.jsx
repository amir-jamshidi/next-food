import Link from "next/link";
import React from "react";
import { LocationOnRounded } from "@mui/icons-material";
import DeleteAddressButton from "@/components/templates/panel/DeleteAddressButton/DeleteAddressButton";
const AddressItemPanel = ({ address }) => {
  return (
    <div
      key={address._id}
      className="border border-t-0 dark:border-gray-700 border-gray-100 rounded-2xl pb-2"
    >
      <div className="h-32 bg-gray-100 dark:bg-gray-700 rounded-2xl flex justify-center items-center">
        <LocationOnRounded fontSize="large" className="dark:text-gray-300 text-gray-700" />
      </div>
      <div className="dark:text-gray-300 text-gray-600 text-sm px-3 mt-2">
        <p>{address.name}</p>
        <p>{address.reciver}</p>
        <p className="font-dana">{address.phone}</p>
      </div>
      <div className="px-3 flex justify-end gap-x-2 mb">
        <Link
          href={`/panel/addresses/${address._id}`}
          className="text-green-400"
        >
          مشاهده
        </Link>
        <DeleteAddressButton addressID={String(address._id)} />
      </div>
    </div>
  );
};

export default AddressItemPanel;
