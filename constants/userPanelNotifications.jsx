import {
  DashboardRounded,
  FavoriteRounded,
  LocationOnRounded,
  MarkEmailReadRounded,
  PersonPinCircleRounded,
  SellRounded,
} from "@mui/icons-material";

export const userPanelNotifications = [
  {
    id: 1,
    title: "داشبورد",
    href: "/panel/dashboard",
    icon: <DashboardRounded  fontSize="small"
    className="dark:text-gray-300 text-gray-700" />,
  },
  {
    id: 2,
    title: "سفارشات",
    href: "/panel/orders",
    icon: <SellRounded fontSize="small"
    className="dark:text-gray-300 text-gray-700"/>,
  },
  {
    id: 3,
    title: "تیکت ها",
    href: "/panel/tickets",
    icon: <MarkEmailReadRounded  fontSize="small"
    className="dark:text-gray-300 text-gray-700" />,
  },
  {
    id: 5,
    title: "آدرس من",
    href: "/panel/addresses",
    icon: <LocationOnRounded  fontSize="small"
    className="dark:text-gray-300 text-gray-700"/>,
  },
  {
    id: 6,
    title: "علاقه مندی",
    href: "/panel/favorites",
    icon: <FavoriteRounded  fontSize="small"
    className="dark:text-gray-300 text-gray-700"/>,
  },
  {
    id: 4,
    title: "حساب کاربر",
    href: "/panel/my-infos",
    icon: <PersonPinCircleRounded  fontSize="small"
    className="dark:text-gray-300 text-gray-700"/>,
  },
];
