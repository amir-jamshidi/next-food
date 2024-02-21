import CartItemControl from "@/components/modules/CartItemControl/CartItemControl";
import BuyCartButton from "@/components/templates/BuyCartButton/BuyCartButton";
import { getAddresses, getCart } from "@/libs/requests";
import { isLogin } from "@/middlewares/isLogin";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const isLoginUser = await isLogin();

  const cart = await getCart();
  const addresses = await getAddresses();
  const totalPrice = cart.reduce((cur, acc) => cur + acc.totalPrice, 0);
  const sendPrice = 15000;
  return (
    <>
      {cart?.length > 0 && isLoginUser ? (
        <div>
          <div className="flex items-center mt-8">
            <span className="flex-1 inline-block h-px bg-black/5"></span>
            <h1 className="text-center text-3xl font-morabba-bold mx-5 text-red-500">
              سبد خریــد
            </h1>
            <span className="flex-1 inline-block h-px bg-black/5"></span>
          </div>
          <div className="bg-white mt-8 p-4 rounded-2xl flex gap-x-4">
            <div className="flex-1">
              <div className="bg-gray-100  p-2 rounded-2xl">
                <ul className="flex flex-col divide-y">
                  {cart.map((c) => (
                    <li key={c._id} className="py-2.5">
                      <div className="flex">
                        <div className="flex-1 flex items-center gap-x-2">
                          <div className="relative">
                            <Image
                              src={c.mealID.img}
                              height={100}
                              width={100}
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-lg text-red-500">
                              <Link href={`/meals/${c.mealID.href}`}>
                                {c.mealID.name}
                              </Link>
                            </p>
                            <p className="text-gray-700 text-sm">{c.size}</p>
                          </div>
                        </div>
                        <div className="flex-1 flex justify-center items-center">
                          <CartItemControl
                            count={c.count}
                            mealID={String(c.mealID._id)}
                            sizeID={String(c.sizeID)}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex h-full flex-col items-end justify-center pl-3">
                            <div className="flex items-center gap-x-0.5">
                              <p className="font-dana-bold text-red-500 text-lg ">
                                {Number(c.totalPrice).toLocaleString()}
                              </p>
                              <p className="text-red-500 text-sm">تومــان</p>
                            </div>
                            <div className="flex gap-x-1 items-center">
                              <p className="text-sm text-gray-700">
                                قیمت هر عدد{" "}
                              </p>
                              <p className="text-sm text-gray-700 font-dana-bold">
                                {Number(c.price).toLocaleString()}
                              </p>
                              <p className="text-sm text-gray-700">تــــ</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="w-96  bg-gray-100 p-2 rounded-2xl">
                <div className="flex justify-center items-center mb-3 border-b pb-2 border-b-gray-200">
                  <h2 className="mx-2 text-gray-700">جزئیات پرداخت</h2>
                </div>

                <div className="py-2 flex flex-col gap-y-2">
                  <p className="text-sm text-gray-600 px-1 text-center">
                    صورت حساب خرید
                  </p>

                  <div className="flex flex-col bg-white py-2 px-3 rounded-lg text-gray-700">
                    <div className="flex justify-between py-1">
                      <p>قیمت کل</p>
                      <div className="flex gap-x-0.5 ">
                        <p className="font-dana-bold text-red-500">
                          {totalPrice.toLocaleString()}
                        </p>
                        <p className="text-red-500">تومان</p>
                      </div>
                    </div>

                    <span className="w-full h-px bg-gray-200/50 my-2"></span>

                    <div className="flex justify-between py-1">
                      <p>هزینه پیک</p>
                      <div className="flex gap-x-0.5 ">
                        <p className="font-dana-bold text-red-500">
                          {sendPrice.toLocaleString()}
                        </p>
                        <p className="text-red-500">تومان</p>
                      </div>
                    </div>

                    <span className="w-full h-px bg-gray-200/50 my-2"></span>

                    <div className="flex justify-between py-1">
                      <p>جمع کل</p>
                      <div className="flex gap-x-0.5 ">
                        <p className="font-dana-bold text-red-500">
                          {(totalPrice + sendPrice).toLocaleString()}
                        </p>
                        <p className="text-red-500">تومان</p>
                      </div>
                    </div>
                  </div>
                  <BuyCartButton
                    addresses={addresses}
                    price={sendPrice + totalPrice}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div>
            <div className="flex items-center mt-8">
              <span className="flex-1 inline-block h-px bg-black/5"></span>
              <h1 className="text-center text-3xl font-morabba-bold mx-5 text-red-500">
                سبد خریــد
              </h1>
              <span className="flex-1 inline-block h-px bg-black/5"></span>
            </div>
            <div className="bg-white mt-8 p-4 py-36 flex justify-center rounded-2xl">
              <p>سبد خرید شما خالیه !!!</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default page;
