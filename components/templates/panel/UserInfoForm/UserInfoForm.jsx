"use client";
import { userSchema } from "@/helpers/schemas";
import { UpdateInfos } from "@/libs/postRequests";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  AlternateEmailRounded,
  PersonRounded,
  PhoneRounded,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { useForm } from "react-hook-form";

const UserInfoForm = ({ newUserInfo: userInfo }) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const startUpdateInfos = async (values) => {
    setIsSubmitting(true);
    UpdateInfos(values, () => {
      setIsSubmitting(false);
      router.refresh();
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  return (
    <div>
      <div className="flex absolute top-9 right-0 flex-wrap ml-10 gap-1">
        {Object.entries(errors).map((error) => (
          <p
            key={error[1].message}
            className="bg-red-500 px-3 py-0.5 rounded-xl text-sm text-gray-100"
          >
            {error[1]?.message}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit(startUpdateInfos)}>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-2">
          <div className="dark:bg-gray-800 py-1 bg-gray-100 rounded-2xl overflow-hidden flex items-center border border-gray-200 dark:border-gray-700">
            <span className="mr-4">
              <PersonRounded className="dark:text-gray-300 text-gray-700" />
            </span>
            <input
              autoComplete="off"
              defaultValue={userInfo.fullname}
              {...register("fullname")}
              className="dark:bg-gray-800 bg-gray-100 text-sm md:text-base  text-gray-700 dark:text-gray-300 h-9 px-2 border-none outline-none w-full"
              placeholder="نام کامل شما"
            />
          </div>
          <div className="dark:bg-gray-800 bg-gray-100 py-1 rounded-2xl overflow-hidden flex items-center border border-gray-200 dark:border-gray-700">
            <span className="mr-4">
              <AlternateEmailRounded className="dark:text-gray-300 text-gray-700" />
            </span>
            <input
              autoComplete="off"
              defaultValue={userInfo.email}
              {...register("email")}
              className="dark:bg-gray-800 bg-gray-100 text-sm md:text-base text-gray-700 dark:text-gray-300 h-9 px-2 border-none outline-none w-full"
              placeholder="ایمیل شما"
            />
          </div>
          <div className="dark:bg-gray-900 py-1 cursor-not-allowed bg-gray-300 rounded-2xl overflow-hidden flex items-center border border-gray-200 dark:border-gray-700">
            <span className="mr-4">
              <PhoneRounded className="dark:text-gray-300 text-gray-700" />
            </span>
            <input
              readOnly
              disabled={true}
              defaultValue={userInfo.phone}
              className="font-dana cursor-not-allowed text-sm md:text-base dark:bg-gray-900 bg-gray-300 text-gray-700 dark:text-gray-300 h-9 px-2 border-none outline-none w-full"
              placeholder="شماره تلفن شما"
            />
          </div>
        </div>
        <div>
          <button
            disabled={isSubmitting}
            className="bg-green-500 rounded-2xl h-[45px] text-gray-100 mt-2 w-full text-sm md:text-base"
          >
            {isSubmitting ? "لطفا صبر کنید" : "ثبت تغییرات"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfoForm;
