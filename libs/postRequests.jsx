import ToastPromise from "@/helpers/ToastPromise";
import axios from "axios";
import { useState } from "react";

export const insertToCart = (cart, callback) => {
  const promis = axios
    .post("/api/cart", cart)
    .then((res) => {
      if (res.status === 201 || res.status === 200) {
        callback(res);
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        throw new Error("لطفا اول ثبت نام کنید");
      } else {
        toast.error("خطای ناشناخته");
      }
    });
  toast.promise(promis, {
    loading: "صبر کنید ...",
    success: "به سبد خرید اضافه شد",
    error: (err) => err.message,
  });
};

export const SendTicket = (values, callback) => {
  let data;
  values.orderID !== "-1"
    ? (data = {
        orderID: values.orderID,
        sectionID: values.sectionID,
        body: values.body,
      })
    : (data = { body: values.body, sectionID: values.sectionID });
  const promise = axios
    .post("/api/ticket", data)
    .then((res) => {
      if (res.status !== 201) throw new Error("خطای ناشناخته");
      callback(res);
    })
    .catch((err) => {
      throw new Error("خطای ناشناخته");
    });
  ToastPromise(promise, {
    loading: "لطفا صبر کنید ...",
    success: "تیکت ارسال شد",
    error: (e) => `${e.message}`,
  });
};

export const AddAddress = (values, address, callback) => {
  let promise;
  if (Object.entries(address).length > 0) {
    promise = axios
      .put(`/api/address/${address.id}`, values)
      .then((res) => {
        if (res.status !== 200) throw new Error("خطای ناشناخته");
        callback(res);
      })
      .catch((err) => {
        throw new Error("خطای ناشناخته");
      });
  } else {
    promise = axios
      .post(`/api/address`, values)
      .then((res) => {
        if (res.status !== 201) throw new Error("خطای ناشناخته");
        callback(res);
      })
      .catch((err) => {
        throw new Error("خطای ناشناخته");
      });
  }
  ToastPromise(promise, {
    loading: "لطفا صبر کنید ...",
    success: "عملیات آدرس موفق",
    error: (e) => `${e.message}`,
  });
};


