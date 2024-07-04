import { getMenu } from "@/libs/requests";
import SidebarText from "../SidebarText";
import ChangeThemeButton from "@/components/modules/ChangeThemeButton/ChangeThemeButton";
import { isLogin } from "@/middlewares/isLogin";
import Link from "next/link";
import NavigationLoginButton from "@/components/modules/NavigationLoginButton/NavigationLoginButton";

const SidebarBody = async () => {
  const menus = await getMenu();
  const isLoginUser = await isLogin();
  return (
    <div className="flex flex-col divide-y dark:divide-gray-700/50 divide-gray-300">
      {menus.map((menu) => (
        <div key={menu._id} className="py-2">
          <SidebarText title={menu.title} href={menu.href} />
        </div>
      ))}
      <div className="flex justify-center items-center py-3 gap-x-1">
        <ChangeThemeButton />
        {!isLoginUser && <NavigationLoginButton />}
      </div>
    </div>
  );
};

export default SidebarBody;
