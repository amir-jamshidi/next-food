"use client";
import { useFormState } from "react-dom";
import Link from "next/link";
import { loginUserHandler, preUserHandler } from "@/libs/actions";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import CodeForm from "@/components/templates/login/CodeForm/CodeForm";
import PhoneForm from "@/components/templates/login/PhoneForm/PhoneForm";




const Login = () => {
  const router = useRouter();
  const [preUserState, preUserAction] = useFormState(preUserHandler, {
    isSuccess: false,
    errors: [],
  });
  const [loginUserState, loginUserAction] = useFormState(loginUserHandler, {
    isSuccess: false,
    errors: [],
  });
  useEffect(() => {
    if (loginUserState.code === 1) {
      toast.success("ورود با موفقیت انجام شد");
      router.push("/");
    } else if (loginUserState.code === 2) {
      toast.error("کد وارد شده نا معتبر");
    } else if (loginUserState.code === 3) {
      toast.error("کد فعالسازی منقضی شده");
    }
  }, [loginUserState]);

  useEffect(() => {
    if (preUserState.isSuccess) {
      toast.success("کد فعالسازی برای شما ارسال شد");
    }
  }, [preUserState]);
  return (
    <div className="flex flex-col justify-center items-center login-container">
      <div className="w-[360px] rounded-2xl bg-white dark:bg-gray-800 flex items-center flex-col">
        <div className=" bg-gray-50 dark:bg-gray-700  w-full rounded-2xl py-3 text-center border border-gray-100 dark:border-gray-700">
          <h3 className="text-gray-700 text-xl font-morabba-bold dark:text-gray-300">
            ورود | ثبت نام
          </h3>
        </div>
        <div className="w-full py-4 px-3 mt-2 ">
          {preUserState.isSuccess ? (
            <CodeForm
              loginUserAction={loginUserAction}
              phone={preUserState.phone}
              errors={loginUserState.errors}
            />
          ) : (
            <PhoneForm
              preUserAction={preUserAction}
              errors={preUserState.errors}
            />
          )}
          <div className="mt-2 flex ">
            {/* <p className="text-sm text-blue-500 ">
              نیاز به راهنمایی بیشتر داری ؟
            </p> */}
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Link
          href={"/"}
          className=" px-2 py-1 rounded transition-colors text-red-500 text-sm  hover:text-red-600"
        >
          برگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};
export default Login;
