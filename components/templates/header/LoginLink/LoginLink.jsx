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
          <span className="bg-green-500 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer">
            <PersonRounded className="text-gray-100" />
          </span>
        </Link>
      ) : (
        <Link
          href={"/login"}
          className="dark:bg-gray-800 bg-gray-100 border border-gray-200  dark:border-gray-700 px-5 py-2 h-10 flex rounded-full dark:text-gray-200 text-gray-800 text-sm gap-x-1"
        >
          <div className="mt-0.5">
            <span>ورود</span>
            <span className="mx-1">|</span>
            <span>ثبت نام</span>
          </div>
        </Link>
      )}
    </>
  );
};

export default LoginLink;
