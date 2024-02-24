import TitleAdminPage from "@/components/modules/TitleAdminPage/TitleAdminPage";
import { getUsersAdmin } from "@/libs/requests";

const Users = async () => {
  const users = await getUsersAdmin();

  return (
    <>
      <div className="p-4">
        <TitleAdminPage title={"لیست کاربران سایت"} />
        <div className="relative overflow-x-auto rounded-2xl">
          <table className="w-full text-sm text-gray-700 dark:text-gray-300 text-center">
            <thead className="text-sm text-gray-700 uppercase bg-gray-200 dark:bg-gray-800">
              <tr className="text-gray-800 dark:text-gray-300 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="col" className="px-6 py-3">
                  نام کاربر
                </th>
                <th scope="col" className="px-2 py-3">
                  شماره تلفن
                </th>
                <th scope="col" className="px-2 py-3">
                  ایمیل
                </th>
                <th scope="col" className="px-2 py-3">
                  نقش
                </th>
                <th scope="col" className="px-2 py-3">
                  تغییر
                </th>
                <th scope="col" className="px-2 py-3">
                  مسدود
                </th>
                <th scope="col" className="px-2 py-3">
                  حذف
                </th>
                <th scope="col" className="px-2 py-3">
                  ویرایش
                </th>
                <th scope="col" className="px-2 py-3">
                  جزئیات
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-2 py-4">{user.fullname}</td>
                  <td className="px-2 py-4">{user.phone}</td>
                  <td className="px-2 py-4">{user.email ? user.email : "-"}</td>
                  <td className="px-2 py-4">
                    {user.role === "ADMIN" ? "مدیر" : "کاربر"}
                  </td>
                  <td className="px-2 py-4">
                    <button className="bg-purple-500 rounded-full px-3 py-0.5 text-white text-sm">
                      تغییر نقش
                    </button>
                  </td>
                  <td className="px-2 py-4">
                    <button className="bg-orange-500 rounded-full px-3 py-0.5 text-white text-sm">
                      مسدود
                    </button>
                  </td>
                  <td className="px-2 py-4">
                    <button className="bg-red-500 rounded-full px-3 py-0.5 text-white text-sm">
                      حذف
                    </button>
                  </td>
                  <td className="px-2 py-4">
                    <button className="bg-green-500 rounded-full px-3 py-0.5 text-white text-sm">
                      ویرایش
                    </button>
                  </td>
                  <td className="px-2 py-4">
                    <button className="bg-sky-500 rounded-full px-3 py-0.5 text-white text-sm">
                      جزئیات
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
