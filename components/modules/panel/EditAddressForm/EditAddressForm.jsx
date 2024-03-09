"use client";

import axios from "axios";
import { useState } from "react";

const EditAddressForm = ({ address }) => {
  const [fullAddress, setFullAddress] = useState(address.fullAddress);
  const [reciver, setReciver] = useState(address.reciver);
  const [name, setName] = useState(address.name);
  const [phone, setPhone] = useState(address.phone);

  const editAddress = async (e) => {
    e.preventDefault();
    const data = { fullAddress, reciver, name, phone };
    axios
      .put(`/api/address/${address.id}`, data)
      .then((res) => {
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="mt-8" onSubmit={editAddress}>
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
  );
};

export default EditAddressForm;
