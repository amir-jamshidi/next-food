"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addressSchema } from "@/helpers/schemas";
import { useRouter, useSearchParams } from "next/navigation";
import { AddAddress } from "@/libs/postRequests";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";

const EditAddressForm = ({ address = {} }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [position, setPosition] = useState([35.6840616, 51.3881035]);
  const [chosePosition, setChosePosition] = useState(null);

  const startAddAddress = (values) => {
    AddAddress({ ...values, position : chosePosition }, address, (res) => {
      router.push("/panel/addresses");
      router.refresh();
    });
  };

  useEffect(() => {
    if (searchParams.get("lat") && searchParams.get("lng")) {
      setChosePosition([searchParams.get("lat"), searchParams.get("lng")]);
      setPosition([searchParams.get("lat"), searchParams.get("lng")]);
    }
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addressSchema),
  });

  return (
    <>
      <div className="app mt-14">
        <div className="w-full h-96 relative rounded-xl overflow-hidden">
          <MapContainer
            className="map"
            center={position}
            zoom={11}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
            {chosePosition && <Marker position={chosePosition}></Marker>}

            <ChangeCenter position={position} />
            <DetecktClick />
          </MapContainer>
        </div>
      </div>
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
      <form className="mt-4 text-sm" onSubmit={handleSubmit(startAddAddress)}>
        <div className="w-full border border-gray-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 p-2 rounded-2xl">
          <textarea
            autoComplete="off"
            defaultValue={address?.fullAddress} 
            {...register("fullAddress")}
            placeholder="آدرس دقیق شما به همراه کوچه و پلاک و واحد"
            className="w-full h-full border-none outline-none bg-gray-100 text-gray-700 dark:bg-gray-800 min-h-28 max-h-32 dark:text-gray-300"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-2 gap-1">
          <div className="p-2 border border-gray-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-2xl">
            <input
              autoComplete="off"
              defaultValue={address?.name}
              {...register("name")}
              type="text"
              className="w-full border-none outline-none bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              placeholder="نام دلخواه آدرس شما"
            />
          </div>
          <div className="p-2 border border-gray-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-2xl">
            <input
              autoComplete="off"
              defaultValue={address?.reciver}
              {...register("reciver")}
              type="text"
              className="w-full border-none outline-none bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              placeholder="نام گیرنده سفارش"
            />
          </div>
          <div className="p-2 border border-gray-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-2xl">
            <input
              autoComplete="off"
              defaultValue={address?.phone}
              {...register("phone")}
              type="text"
              className="w-full border-none outline-none bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
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

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetecktClick() {
  const router = useRouter();
  useMapEvent({
    click: (e) => {
      console.log(e);
      router.replace(
        `/panel/addresses/insert?lat=${e.latlng.lat}&lng=${e.latlng.lng}`
      );
    },
  });
  return null;
}

export default EditAddressForm;
