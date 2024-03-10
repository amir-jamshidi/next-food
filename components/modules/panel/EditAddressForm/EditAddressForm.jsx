"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import toast from "react-hot-toast";
import { addressSchema } from "@/helpers/schemas";

const EditAddressForm = ({ address = {} }) => {
  const addAddress = (data) => {
    let promise;
    if (Object.entries(address).length > 0) {
      promise = axios
        .put(`/api/address/${address.id}`, data)
        .then((res) => {})
        .catch((err) => {});
    } else {
      promise = axios
        .post(`/api/address`, data)
        .then((res) => {})
        .catch((err) => {});
    }
    toast.promise(promise, {
      loading: "لطفا صبر کنید ...",
      success: "درس با موفقیت اضافه شد",
      error: "خطای ناشناخته",
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

      <form className="mt-14" onSubmit={handleSubmit(addAddress)}>
        <div className="w-full border border-gray-700 p-2 rounded-2xl">
          <textarea
            defaultValue={address?.fullAddress}
            {...register("fullAddress")}
            placeholder="آدرس دقیق شما به همراه کوچه و پلاک و واحد"
            className="w-full h-full border-none outline-none bg-gray-800 min-h-40 max-h-44 text-gray-300"
          />
        </div>
        <div className="grid grid-cols-3 mt-2 gap-x-1">
          <div className="p-2 border border-gray-700 rounded-2xl">
            <input
              defaultValue={address?.name}
              {...register("name")}
              type="text"
              className="w-full border-none outline-none bg-gray-800 text-gray-300"
              placeholder="نام دلخواه آدرس شما"
            />
          </div>
          <div className="p-2 border border-gray-700 rounded-2xl">
            <input
              defaultValue={address?.reciver}
              {...register("reciver")}
              type="text"
              className="w-full border-none outline-none bg-gray-800 text-gray-300"
              placeholder="نام گیرنده سفارش"
            />
          </div>
          <div className="p-2 border border-gray-700 rounded-2xl">
            <input
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
          className="bg-green-500 rounded-2xl px-6 py-1.5 text-gray-200 mt-2"
        />
      </form>
    </>
  );
};

export default EditAddressForm;

/*

  const editAddress = async (e) => {
    e.preventDefault();
    const data = { fullAddress, reciver, name, phone };
    const promise = axios
      .put(`/api/address/${address.id}`, data)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    toast.promise(promise, {
      loading: "لطفا صبر کنید ...",
      success: "آدرس با موفقیت اضافه شد",
      error: "خطای ناشناخته",
    });
  };

*/
