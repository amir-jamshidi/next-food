import NotificationItem from "@/components/modules/panel/NotificationItem/NotificationItem";
import { getUserNotifications } from "@/libs/requests";
import LogoutButton from "../LogoutButton/LogoutButton";
import { NotificationsActiveRounded } from "@mui/icons-material";

const TabMenuNotifications = async ({ forMobile = true }) => {
  const notification = await getUserNotifications();

  return (
    <div className="flex justify-between px-1.5 mt-1">
      <div className="group relative flex gap-0.5 items-center">
        {notification.length > 0 && (
          <span className="w-2 h-2 inline-block rounded bg-red-500"></span>
        )}
        <span className="cursor-pointer flex items-center justify-center">
          <NotificationsActiveRounded
            fontSize="small"
            className="dark:text-gray-200 text-gray-700"
          />
        </span>

        <span className="dark:text-gray-200 h-6 flex items-center text-gray-800 cursor-pointer text-sm">
          اعلان ها
        </span>
        <div
          className={`absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 top-7 pt-3 ${
            forMobile ? " right-0" : "left-0"
          } delay-75`}
        >
          <div className="flex flex-col bg-gray-100 shadow-sm dark:bg-gray-800 w-72 p-3 rounded-xl gap-y-1 text-sm border border-gray-200 dark:border-gray-700">
            {notification.length > 0 ? (
              <>
                {notification.map((notification) => (
                  <NotificationItem
                    key={notification._id}
                    notification={notification}
                  />
                ))}
              </>
            ) : (
              <p className="dark:text-gray-300 text-gray-700 text-sm text-center py-3">
                اعلانی برای شما نیست !!!
              </p>
            )}
          </div>
        </div>
      </div>
      <LogoutButton />
    </div>
  );
};

export default TabMenuNotifications;
