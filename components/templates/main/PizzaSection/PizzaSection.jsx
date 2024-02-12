import TitleSection from "@/components/modules/TitleSection/TitleSection";
import { getPizzas } from "@/libs/requests";
import Image from "next/image";
import React from "react";
//
import imgSam from "@/public/images/pizzasam.png";

const PizzaSection = async () => {
  const pizzas = await getPizzas();
  return (
    <div>
      <TitleSection title="پیتزا" />
      <div className="grid grid-cols-4">
        {pizzas.map((pizza) => (
          <div key={pizza._id} className="border rounded">
            <div className="relative h-60">
              <Image
                src={imgSam}
                style={{ objectFit: "contain" }}
                fill
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <h3 className="font-morabba-bold text-red-500">{pizza.name}</h3>
            </div>
            <div className="mt-5">
              <button className="py-1.5 px-8 bg-green-500 text-gray-100 rounded-full">مشاهده و خرید</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaSection;
