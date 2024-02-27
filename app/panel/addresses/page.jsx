import AddressItemPanel from "@/components/modules/panel/AddressItemPanel/AddressItemPanel";
import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import { getUserAddresses } from "@/libs/requests";

const Addresses = async () => {
  const addresses = await getUserAddresses();

  return (
    <div>
      <TitleUserPanel title={"آدرس های من"} />
      <div className="mt-14">
        <div className="grid grid-cols-5 gap-2">
          {addresses.map((address) => (
          <AddressItemPanel key={address._id} address={address}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Addresses;
