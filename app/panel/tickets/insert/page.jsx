"use client";

import BackButton from "@/components/modules/panel/BackButton/BackButton";
import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useQuery } from "react-query";

const InsertTicket = () => {
  const [sectionID, setSectionID] = useState("-1");
  const [orderID, setOrderID] = useState("-1");
  const [body, setBody] = useState("");

  const router = useRouter();

  const { data: { sections = [], orders = [] } = {} } = useQuery(
    ["ticket/details"],
    () => axios.get("/api/ticket/details").then((res) => res.data)
  );

  const sendTicket = async (e) => {
    e.preventDefault();
    try {
      let data;
      orderID !== "-1"
        ? (data = { orderID, sectionID, body })
        : (data = { body, sectionID });
      const { status } = await axios.post("/api/ticket", data);
      if (status === 201) {
        router.refresh();
        router.push("/panel/tickets");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="relative">
      <TitleUserPanel title={"ارسال تیکت جدید"} />
      <BackButton />
      <form className="mt-14" onSubmit={sendTicket}>
        <div className="grid grid-cols-2 gap-x-2">
          <div className="border border-gray-700 p-2 rounded-2xl">
            <select
              value={sectionID}
              onChange={(e) => setSectionID(e.target.value)}
              className="w-full bg-gray-800 text-gray-200 outline-none border-none"
            >
              <option value={"-1"}>بخش مورد نظر</option>
              {sections.map((section) => (
                <option value={section._id}>{section.name}</option>
              ))}
            </select>
          </div>

          <div className="border border-gray-700 p-2 rounded-2xl">
            <select
              value={orderID}
              onChange={(e) => setOrderID(e.target.value)}
              className="w-full bg-gray-800 text-gray-200 outline-none border-none"
            >
              <option>شناسه سفارش مورد نظر</option>
              {orders.map((order) => (
                <option value={order._id} className="font-dana">
                  {order.code}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full border border-gray-700 p-2 rounded-2xl mt-2">
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="متن تیکت"
            className="w-full h-full border-none outline-none bg-gray-800 min-h-40 max-h-44 text-gray-300"
          />
        </div>
        <input
          type="submit"
          value="ارسال تیکت"
          className="bg-green-500 rounded-2xl px-6 py-1.5 text-gray-200 mt-2"
        />
      </form>
    </div>
  );
};

export default InsertTicket;
