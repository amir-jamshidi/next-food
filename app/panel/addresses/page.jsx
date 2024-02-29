import AddressItemPanel from "@/components/modules/panel/AddressItemPanel/AddressItemPanel";
import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import { getUserAddresses } from "@/libs/requests";
import { LocationOnRounded } from "@mui/icons-material";

const Addresses = async () => {
  const addresses = await getUserAddresses();

  return (
    <div>
      <TitleUserPanel title={"آدرس های من"} />
      <div className="mt-14">
        <div className="grid grid-cols-4 gap-1.5">
          <div className="h-20 border rounded-2xl border-gray-700 flex justify-center items-center gap-x-1 text-gray-200">
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
        <div className="grid grid-cols-5 gap-2">
          {addresses.map((address) => (
            <AddressItemPanel key={address._id} address={address} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Addresses;
