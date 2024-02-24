import { getMenu } from "@/libs/requests";
import React from "react";
import m from "@/models/menu";
import Link from "next/link";
const SubHeader = async () => {
  const menus = await getMenu();

  return (
    <div className="container">
      <div className="bg-gray-300 dark:bg-gray-700 transition-colors h-10 rounded-bl-2xl rounded-br-2xl max-w-4xl mx-auto flex justify-center items-center">
        <ul className="flex justify-center gap-x-5">
          {menus.map((menu) => (
            <li key={menu._id}>
              <Link href={menu.href}>
                <p className="text-gray-800 dark:text-gray-200 dark:menu-item menu-item transition-colors">{menu.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubHeader;
