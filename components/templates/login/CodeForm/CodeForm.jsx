import { LocalPhoneRounded } from "@mui/icons-material";
import React from "react";
import LoginSubmitForm from "../LoginSubmitForm/LoginSubmitForm";

const CodeForm = ({ loginUserAction, phone, errors }) => {
  
  return (
    <form action={loginUserAction} className="flex flex-col gap-1">
      <div className=" rounded-2xl flex bg-gray-100 dark:bg-gray-700 items-center w-full gap-x-1.5 p-1.5">
        <span className="bg-gray-200 rounded-xl p-1 dark:bg-gray-500">
          <LocalPhoneRounded className="text-gray-700 dark:text-gray-300" />
        </span>
        <span></span>
        <input
          name="code"
          type="text"
          className="outline-none w-full text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
          placeholder="کد فعالسازی"
          required
        />
        <input
          name="phone"
          type="text"
          value={phone}
          readOnly
          className="outline-none w-full text-gray-700 bg-gray-100 hidden"
          placeholder="کد فعالسازی"
          required
        />
        <span></span>
      </div>
      {errors?.length > 0 && (
        <div>
          <span className="text-sm bg-red-500 px-2 py-0.5 rounded text-white">
            {errors[0]?.message}
          </span>
        </div>
      )}
      <LoginSubmitForm value={"ارسال کد فعالسازی"} />
    </form>
  );
};

export default CodeForm;
