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
      } w-full rounded-2xl text-gray-100 py-2.5 text-base transition-colors`}
    >{`${pending ? "صبر کنید ..." : value}`}</button> 
  );
};

export default LoginSubmitForm;
