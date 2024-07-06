"use client";

import { userPanelNotifications } from "@/constants/userPanelNotifications";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TabMenuPanelMobile = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div className="grid grid-cols-3 gap-1 mt-8 text-sm pb-4">
      {userPanelNotifications.map((item) => (
        <div className={`${item.href === pathName ? 'bg-gray-300 dark:bg-gray-800' : 'dark:bg-gray-900 bg-gray-100'} flex justify-center items-center py-1.5 rounded-xl  border border-gray-300 dark:border-gray-700`}>
          <Link href={item.href} className="flex items-center gap-x-1">
            <span className="flex items-center">{item.icon}</span>
            <p className="dark:text-gray-200 text-gray-800 text-sm">
              {item.title}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TabMenuPanelMobile;
