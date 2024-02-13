import { PersonRounded } from "@mui/icons-material";
import { cookies } from "next/headers";
import Link from "next/link";

const LoginLink = async () => {
  let state = "";
  if (cookies().get("token")) {
    state = "logout";
  } else {
    state = "login";
  }
  return (
    <>
      {state === "logout" ? (
        <Link href={"/panel"} className="">
          <span className="bg-gray-300 rounded-full h-9 w-9 flex justify-center items-center border border-red-300">
            <PersonRounded className="text-gray-700" />
          </span>
        </Link>
      ) : (
        <Link
          href={"/login"}
          className="bg-red-500 px-4 py-2 rounded-full text-gray-100 text-sm"
        >
          ورود به حساب
        </Link>
      )}
    </>
  );
};

export default LoginLink;
