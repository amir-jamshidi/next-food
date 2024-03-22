import AddressItemPanel from "@/components/modules/panel/AddressItemPanel/AddressItemPanel";
import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import { getUserAddresses } from "@/libs/requests";
import { AddRounded, LocationOnRounded } from "@mui/icons-material";
import Link from "next/link";

const Addresses = async () => {
  const addresses = await getUserAddresses();

  return (
    <div className="relative mb-12">
      <TitleUserPanel title={"آدرس های من"} />
      <div className="absolute top-6 left-0">
        <Link href={`/panel/addresses/insert`}>
          <span className="w-10 h-10 flex justify-center items-center bg-green-500 rounded-full">
            <AddRounded className="text-gray-100" />
          </span>
        </Link>
      </div>
      <div className="mt-14">
        <div className="grid gap-1.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="h-20 dark:bg-gray-800 bg-gray-100 border rounded-2xl dark:border-gray-700 border-gray-200 flex justify-center items-center gap-x-1 dark:text-gray-200 text-gray700">
            <span>
              <LocationOnRounded className="text-sky-500" />
            </span>
            <span>تعداد همه آدرس ها</span>
            <span className="font-dana-bold">
              {Number(addresses.length).toLocaleString()}
            </span>
            <span>آدرس</span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        {addresses.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {addresses.map((address) => (
              <AddressItemPanel key={address._id} address={address} />
            ))}
          </div>
        ) : (
          <div className="flex rounded-2xl py-2 justify-center linier-bg mt-14">
            <p className="text-sm text-gray-600 dark:text-gray-400">اخیرا آدرسی ثبت نشده</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Addresses;
