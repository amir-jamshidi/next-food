"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addressSchema } from "@/helpers/schemas";
import { useRouter } from "next/navigation";
import { AddAddress } from "@/libs/postRequests";

const EditAddressForm = ({ address = {} }) => {
  const router = useRouter();

  const startAddAddress = (values) => {
    AddAddress(values, address, (res) => {
      router.push("/panel/addresses");
      router.refresh();
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addressSchema),
  });

  return (
    <>
      <div className="flex absolute top-9 right-0 flex-wrap ml-10 gap-1">
        {Object.entries(errors).map((error) => (
          <p className="bg-red-500 px-3 py-0.5 rounded-xl text-sm text-gray-100">
            {error[1]?.message}
          </p>
        ))}
      </div>
      <form className="mt-14" onSubmit={handleSubmit(startAddAddress)}>
        <div className="w-full border border-gray-700 p-2 rounded-2xl">
          <textarea
            autoComplete="off"
            defaultValue={address?.fullAddress}
            {...register("fullAddress")}
            placeholder="آدرس دقیق شما به همراه کوچه و پلاک و واحد"
            className="w-full h-full border-none outline-none bg-gray-800 min-h-40 max-h-44 text-gray-300"
          />
        </div>
        <div className="grid grid-cols-3 mt-2 gap-x-1">
          <div className="p-2 border border-gray-700 rounded-2xl">
            <input
              autoComplete="off"
              defaultValue={address?.name}
              {...register("name")}
              type="text"
              className="w-full border-none outline-none bg-gray-800 text-gray-300"
              placeholder="نام دلخواه آدرس شما"
            />
          </div>
          <div className="p-2 border border-gray-700 rounded-2xl">
            <input
              autoComplete="off"
              defaultValue={address?.reciver}
              {...register("reciver")}
              type="text"
              className="w-full border-none outline-none bg-gray-800 text-gray-300"
              placeholder="نام گیرنده سفارش"
            />
          </div>
          <div className="p-2 border border-gray-700 rounded-2xl">
            <input
              autoComplete="off"
              defaultValue={address?.phone}
              {...register("phone")}
              type="text"
              className="w-full border-none outline-none bg-gray-800 text-gray-300"
              placeholder="شماره تلفن گیرنده"
            />
          </div>
        </div>
        <input
          type="submit"
          value="ذخیره"
          className="bg-green-500 rounded-2xl px-6 py-1.5 text-gray-200 mt-2 cursor-pointer"
        />
      </form>
    </>
  );
};

export default EditAddressForm;
