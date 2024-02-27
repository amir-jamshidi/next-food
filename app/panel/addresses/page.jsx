import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import { getUserAddresses } from "@/libs/requests";
import { LocationOnRounded } from "@mui/icons-material";
import Link from "next/link";

const Addresses = async () => {
  const addresses = await getUserAddresses();

  return (
    <div>
      <TitleUserPanel title={"آدرس های من"} />
      <div className="mt-14">
        <div className="grid grid-cols-5 gap-2">
          {addresses.map((address) => (
            <div
              key={address._id}
              className="border border-t-0 border-gray-700 rounded-2xl"
            >
              <div className="h-32 bg-gray-700 rounded-2xl flex justify-center items-center">
                <LocationOnRounded fontSize="large" className="text-gray-300" />
              </div>
              <div className="text-gray-300 text-sm px-3 mt-2">
                <p>{address.name}</p>
                <p>{address.reciver}</p>
                <p className="font-dana">{address.phone}</p>
              </div>
              <div className="px-3 flex justify-end gap-x-2 mb">
                <Link href="" className="text-green-400">
                  مشاهده
                </Link>
                <Link href="" className="text-red-500">
                  حذف
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Addresses;
