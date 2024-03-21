import { getMenu } from "@/libs/requests";
import SidebarText from "../SidebarText";

const SidebarBody = async () => {
  const menus = await getMenu();

  return (
    <div className="flex flex-col divide-y dark:divide-gray-700/50 divide-gray-300">
      {menus.map((menu) => (
        <div key={menu._id} className="py-2">
          <SidebarText title={menu.title} href={menu.href} />
        </div>
      ))}
    </div>
  );
};

export default SidebarBody;
