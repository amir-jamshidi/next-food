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
      <h1 className="text-4xl font-morabba-bold mb-10">
        نکستـــ <span className="text-red-500 mr-1">فـــود</span>
      </h1>
      <div className="w-96 p-4 rounded bg-white flex items-center flex-col">
        <h3 className="text-gray-800 text-xl font-morabba">
          فرم ورود به حساب کاربری
        </h3>
        <div className="w-full mt-4">
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
            <p className="text-sm text-blue-500 ">
              نیاز به راهنمایی بیشتر داری ؟
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Link
          href={"/"}
          className=" px-2 py-1 rounded transition-colors text-green-500 text-sm hover:bg-green-500 hover:text-gray-100"
        >
          برگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};
export default Login;
