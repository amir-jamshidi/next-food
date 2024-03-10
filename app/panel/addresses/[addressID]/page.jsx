import BackButton from "@/components/modules/panel/BackButton/BackButton";
import EditAddressForm from "@/components/modules/panel/EditAddressForm/EditAddressForm";
import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import { getAddressDetails } from "@/libs/requests";
import React from "react";

const ShowAddress = async ({ params: { addressID } }) => {
  const { _id, reciver, phone, name, fullAddress } = await getAddressDetails(
    addressID
  );

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
