"use client";
import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import axios from "axios";
import { useState } from "react";

const route = () => {
  const [fullAddress, setFullAddress] = useState("");
  const [reciver, setReciver] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const addAddress = (e) => {
    e.preventDefault();
    const data = {
      fullAddress,
      reciver,
      name,
      phone,
    };

    axios
      .post("/api/address", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <TitleUserPanel title={"اضافه کردن آدرس"} />
      <form className="mt-8" onSubmit={addAddress}>
        <div className="w-full border border-gray-700 p-2 rounded-2xl">
          <textarea
            value={fullAddress}
            onChange={(e) => setFullAddress(e.target.value)}
            placeholder="آدرس دقیق شما به همراه کوچه و پلاک و واحد"
            className="w-full h-full border-none outline-none bg-gray-800 min-h-40 max-h-44 text-gray-300"
          />
        </div>
        <div className="grid grid-cols-3 mt-2 gap-x-1">
          <div className="p-2 border border-gray-700 rounded-2xl">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full border-none outline-none bg-gray-800 text-gray-300"
              placeholder="نام دلخواه آدرس شما"
            />
          </div>
          <div className="p-2 border border-gray-700 rounded-2xl">
            <input
              value={reciver}
              onChange={(e) => setReciver(e.target.value)}
              type="text"
              className="w-full border-none outline-none bg-gray-800 text-gray-300"
              placeholder="نام گیرنده سفارش"
            />
          </div>
          <div className="p-2 border border-gray-700 rounded-2xl">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              className="w-full border-none outline-none bg-gray-800 text-gray-300"
              placeholder="شماره تلفن گیرنده"
            />
          </div>
        </div>
        <input
          type="submit"
          value="ذخیره"
          className="bg-green-500 rounded-2xl px-6 py-1.5 text-gray-200 mt-2"
        />
      </form>
    </>
  );
};

export default route;
