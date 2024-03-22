import BackButton from "@/components/modules/panel/BackButton/BackButton";
import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import EditAddressForm from "@/components/modules/panel/EditAddressForm/EditAddressForm";

export const metadata = {
  title: `پنل کاربری | افزودن آدرس`,
};

const route = () => {
  return (
    <div className="relative">
      <TitleUserPanel title={"اضافه کردن آدرس"} />
      <BackButton />
      <EditAddressForm />
    </div>
  );
};

export default route;
