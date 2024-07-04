"use client";
import { Logout } from "@/libs/postRequests";
import { PowerSettingsNewRounded } from "@mui/icons-material";
import axios from "axios";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const startLogout = () => {
    Logout((_) => {
      router.push("/");
      router.refresh();
    });
  };

  return (
    <div
      onClick={startLogout}
      className="flex gap-0.5 pr-2 items-center cursor-pointer"
    >
      <span className="flex justify-center items-center">
        <PowerSettingsNewRounded fontSize="small" className="text-red-500" />
      </span>
      <span className="text-red-500 text-sm md:text-base">خروج</span>
    </div>
  );
};

export default LogoutButton;
