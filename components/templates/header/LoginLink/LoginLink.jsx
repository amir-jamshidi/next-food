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
          className="bg-red-500 px-4 py-2 h-9 inline-block rounded-full text-gray-100 text-sm"
        >
          ورود به حساب
        </Link>
      )}
    </>
  );
};

export default LoginLink;
