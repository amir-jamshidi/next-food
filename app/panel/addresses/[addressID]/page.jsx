import BackButton from "@/components/modules/panel/BackButton/BackButton";
import EditAddressForm from "@/components/modules/panel/EditAddressForm/EditAddressForm";
import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import { getAddressDetails } from "@/libs/requests";
import { notFound } from "next/navigation";
import React from "react";
export const metadata = {
  title: `پنل کاربری | ویرایش آدرس `,
};
const ShowAddress = async ({ params: { addressID } }) => {
  const address = await getAddressDetails(addressID);
  if (!address) notFound();
  const { _id, reciver, phone, name, fullAddress } = address;

  const addressData = {
    id: String(_id),
    reciver,
    phone,
    name,
    fullAddress,
  };

  return (
    <div className="relative">
      <TitleUserPanel title={"اضافه کردن آدرس"} />
      <BackButton />
      <EditAddressForm address={addressData} />
    </div>
  );
};

export default ShowAddress;
