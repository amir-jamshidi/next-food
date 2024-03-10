"use client";
import {
  AlternateEmailRounded,
  PersonRounded,
  PhoneRounded,
} from "@mui/icons-material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "@/helpers/schemas";
import toast from "react-hot-toast";

const UserInfoForm = ({ newUserInfo: userInfo }) => {
  const updateInfos = async (data) => {
    const promise = axios
      .post("/api/user-info", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    toast.promise(promise, {
      loading: "صبر کنید ...",
      success: "اطلاعات شما ویرایش شد",
      error: "خطای ناشناخته",
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
          <p className="bg-red-500 px-3 py-0.5 rounded-xl text-sm text-gray-100">
            {error[1]?.message}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit(updateInfos)}>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-800 rounded-2xl overflow-hidden flex items-center border border-gray-700">
            <span className="mr-4">
              <PersonRounded className="text-gray-300" />
            </span>
            <input
              defaultValue={userInfo.fullname}
              {...register("fullname")}
              className="bg-gray-800 text-gray-300 py-2.5 px-2 border-none outline-none w-full"
              placeholder="نام کامل شما"
              />
          </div>
          <div className="bg-gray-800 rounded-2xl overflow-hidden flex items-center border border-gray-700">
            <span className="mr-4">
              <AlternateEmailRounded className="text-gray-300" />
            </span>
            <input
              defaultValue={userInfo.email}
              {...register("email")}
              className="bg-gray-800 text-gray-300 py-2.5 px-2 border-none outline-none w-full"
              placeholder="ایمیل شما"
            />
          </div>
          <div className="bg-gray-800 rounded-2xl overflow-hidden flex items-center border border-gray-700">
            <span className="mr-4">
              <PhoneRounded className="text-gray-300" />
            </span>
            <input
              readOnly
              defaultValue={userInfo.phone}
              className="font-dana bg-gray-800 text-gray-300 py-2.5 px-2 border-none outline-none w-full"
              placeholder="شماره تلفن شما"
            />
          </div>
          <div className="px-4 flex items-center border rounded-2xl border-gray-700 justify-between">
            <p className="text-gray-300">نقش شما در سایت : </p>
            <span className="text-green-500 rounded py-1">
              {userInfo.role === "ADMIN" ? "مدیریت سایت" : "کاربر سایت"}
            </span>
          </div>
        </div>
        <div>
          <button className="bg-green-500 rounded-2xl px-6 py-1.5 text-gray-200 mt-2">
            ثبت تغییرات
          </button>
        </div>
      </form>
      <div className="flex text-gray-300 items-center gap-x-1 mt-8 pr-2  rounded-2xl py-2">
        <p>از</p>
        <p className="font-dana">{userInfo.createdAt}</p>
        <p>کنار مایی !</p>
      </div>
    </div>
  );
};

export default UserInfoForm;
