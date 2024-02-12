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
        <Link
          href={"/panel"}
          className="bg-red-500 px-4 py-2 rounded-full text-gray-100 text-sm"
        >
          داشبورد
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
