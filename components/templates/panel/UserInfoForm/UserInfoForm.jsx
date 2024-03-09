"use client";
import {
  AlternateEmailRounded,
  PersonRounded,
  PhoneRounded,
} from "@mui/icons-material";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const UserInfoForm = ({ newUserInfo: userInfo }) => {
  const [fullname, setFullname] = useState(userInfo.fullname);

  const updateInfos = async (e) => {
    e.preventDefault();
    if(fullname.length < 3) return toast.error('نام نباید کمتر از سه حرف باشه')
    const promise = axios
      .post("/api/user-info", { fullname })
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

  return (
    <form onSubmit={updateInfos}>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-800 rounded-2xl overflow-hidden flex items-center border border-gray-700">
          <span className="mr-4">
            <PersonRounded className="text-gray-300" />
          </span>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            className="bg-gray-800 text-gray-300 py-2.5 px-2 border-none outline-none w-full"
            placeholder="نام کامل شما"
          />
        </div>
        <div className="bg-gray-800 rounded-2xl overflow-hidden flex items-center border border-gray-700">
          <span className="mr-4">
            <AlternateEmailRounded className="text-gray-300" />
          </span>
          <input
            readOnly
            defaultValue={userInfo.email}
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
  );
};

export default UserInfoForm;
