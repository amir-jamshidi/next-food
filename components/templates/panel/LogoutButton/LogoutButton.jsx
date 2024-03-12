'use client'
import { PowerSettingsNewRounded } from "@mui/icons-material";
import axios from "axios";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const logout = () => {
    axios
      .post("/api/logout")
      .then((res) => {
          router.push("/");
          router.refresh();
      })
      .catch((err) => {
        console.log(err.message)
      });
  };
  return (
    <div onClick={logout} className="flex gap-0.5 pr-2 items-center cursor-pointer">
      <span>
        <PowerSettingsNewRounded className="text-red-500" />
      </span>
      <span className="text-red-500">خروج</span>
    </div>
  );
};

export default LogoutButton;
