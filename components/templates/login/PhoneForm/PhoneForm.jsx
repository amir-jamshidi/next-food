import React from "react";
import LoginSubmitForm from "../LoginSubmitForm/LoginSubmitForm";
import { LocalPhoneRounded } from "@mui/icons-material";

const PhoneForm = ({ preUserAction, errors }) => {
  return (
    <form action={preUserAction} className="flex flex-col gap-1">
      <div className="rounded-2xl flex bg-gray-100 dark:bg-gray-700 items-center w-full gap-x-1.5 p-1.5">
        <span className="bg-gray-200 dark:bg-gray-500  rounded-xl p-1">
          <LocalPhoneRounded className="text-gray-700 dark:text-gray-300 " />
        </span>
        <input
          autoComplete="off"
          name="phone"
          type="text"
          className=" outline-none w-full text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
          placeholder="شماره همراه"
          required
        />
      </div>
      {errors?.length > 0 && (
        <div>
          <span className="text-sm bg-red-500 px-2 py-0.5 rounded text-white">
            {errors[0]?.message}
          </span>
        </div>
      )}
      <LoginSubmitForm value={"ارسال شماره همراه"} />
    </form>
  );
};





export default PhoneForm;
