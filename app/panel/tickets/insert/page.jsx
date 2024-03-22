"use client";
import BackButton from "@/components/modules/panel/BackButton/BackButton";
import TitleUserPanel from "@/components/modules/panel/TitleUserPanel/TitleUserPanel";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ticketSchema } from "@/helpers/schemas";
import { SendTicket } from "@/libs/postRequests";


const InsertTicket = () => {
  const router = useRouter();

  const { data: { sections = [], orders = [] } = {} } = useQuery(
    ["ticket/details"],
    () => axios.get("/api/ticket/details").then((res) => res.data)
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ticketSchema),
  });

  const startSendTicket = (values) => {
    SendTicket(values, (_) => {
      router.push("/panel/tickets");
      router.refresh();
    });
  };

  return (
    <div className="relative">
      <TitleUserPanel title={"ارسال تیکت جدید"} />
      <BackButton />
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
      <form className="mt-14" onSubmit={handleSubmit(startSendTicket)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1">
          <div className="border border-gray-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 px-2 rounded-2xl">
            <select
              autoComplete="off"
              {...register("sectionID")}
              className="w-full bg-gray-100 text-gray-700 dark:text-gray-200 dark:bg-gray-800  outline-none border-none h-10 rounded-2xl"
            >
              <option value={"-1"}>بخش مورد نظر</option>
              {sections.map((section) => (
                <option key={section._id} value={section._id}>
                  {section.name}
                </option>
              ))}
            </select>
          </div>

          <div className="border border-gray-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 px-2 rounded-2xl">
            <select
              autoComplete="off"
              {...register("orderID")}
              className="w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200  outline-none border-none h-10 rounded-2xl"
            >
              <option value={"-1"}>شناسه سفارش مورد نظر (اختیاری)</option>
              {orders.map((order) => (
                <option value={order._id} key={order._id} className="font-dana">
                  {order.code}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full border border-gray-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 p-2 rounded-2xl mt-2">
          <textarea
            autoComplete="off"
            {...register("body")}
            placeholder="متن تیکت"
            className="w-full h-full border-none outline-none bg-gray-100 dark:bg-gray-800 min-h-40 max-h-44 dark:text-gray-300 text-gray-700"
          />
        </div>
        <input
          type="submit"
          value="ارسال تیکت"
          className="cursor-pointer  bg-green-500 rounded-2xl px-6 py-1.5 text-gray-200 mt-2"
        />
      </form>
    </div>
  );
};

export default InsertTicket;
