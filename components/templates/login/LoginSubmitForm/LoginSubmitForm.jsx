"use client";


import { useFormStatus } from "react-dom";
const LoginSubmitForm = ({ value }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending} 
      className={`${
        pending ? "bg-gray-300" : "bg-green-500 "
      } w-full rounded-2xl text-gray-100 h-11 transition-colors text-sm md:text-base`}
    >{`${pending ? "صبر کنید ..." : value}`}</button> 
  );
};

export default LoginSubmitForm;
