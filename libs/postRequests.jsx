import ToastPromise from "@/helpers/ToastPromise";
import axios from "axios";

export const insertToCart = (cart, callback) => {
  const promis = axios
    .post("/api/cart", cart)
    .then((res) => {
      if (res.status === 201 || res.status === 200) {
        callback(res);
      } else {
        throw new Error("خطای ناشناخته");
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        throw new Error("لطفا اول ثبت نام کنید");
      } else {
        throw new Error("خطای ناشناخته");
      }
    });
  ToastPromise(promis, {
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

export const UpdateInfos = (values) => {
  const promise = axios
    .post("/api/user-info", values)
    .then((res) => {
      if (res.status !== 200) throw new Error("خطای ناشناخته");
    })
    .catch((err) => {
      throw new Error("خطای ناشناخته");
    });

  ToastPromise(promise, {
    loading: "صبر کنید ...",
    success: "اطلاعات شما ویرایش شد",
    error: (e) => e.message,
  });
};

export const RemoveAddress = (addressID, callback) => {
  const promise = axios
    .delete(`/api/address/${addressID}`)
    .then((res) => {
      if (res.status !== 200) throw new Error("خطای ناشناخته");
      callback(res);
    })
    .catch((err) => {
      return new Error("خطای ناشناخته");
    });

  ToastPromise(promise, {
    loading: "لطفا صبر کنید ...",
    success: "آدرس حذف شد",
    error: (e) => e.message,
  });
};

export const AddCountCart = (values, callback) => {
  const promise = axios
    .post("/api/cart", values)
    .then((res) => {
      if (res.status !== 200) return new Error("خطای ناشناخته");
      callback(res);
    })
    .catch((err) => {
      return new Error("خطای ناشناخته");
    });
  ToastPromise(promise, {
    loading: "لطفا صبر کنید ...",
    success: "به تعداد اضافه شد",
    error: (e) => e.message,
  });
};

export const RemoveCart = (values, callback) => {
  const promise = axios
    .post("/api/cart", values)
    .then((res) => {
      if (res.status !== 200) throw new Error("خطای ناشناخته");
      callback(res);
    })
    .catch((err) => {
      throw new Error("خطای ناشناخته");
    });
  ToastPromise(promise, {
    loading: "لطفا صبر کنید ...",
    success: "محصول از سبد حذف شد",
    error: (e) => e.message,
  });
};

export const MinusCountCart = (values, callback) => {
  const promise = axios
    .post("/api/cart", values)
    .then((res) => {
      if (res.status !== 200) throw new Error("خطای ناشناخته");
      callback(res);
    })
    .catch((err) => {
      throw new Error("خطای ناشناخته");
    });
  ToastPromise(promise, {
    loading: "لطفا صبر کنید ...",
    success: "از تعداد محصول کم شد",
    error: (e) => e.message,
  });
};

export const AddToFavorite = (mealID, callback) => {
  const promise = axios
    .post(`/api/favorite/${mealID}`)
    .then((res) => {
      if (res.status !== 201) throw new Error("خطای ناشناخته");
      callback(res);
    })
    .catch((err) => {
      throw new Error("خطای ناشناخته");
    });
  ToastPromise(promise, {
    loading: "لطفا صبر کنید ...",
    success: "به علاقه مندی ها اضافه شد",
    error: (e) => e.message,
  });
};

export const RemoveFromFavorite = (mealID, callback) => {
  const promise = axios
    .delete(`/api/favorite/${mealID}`)
    .then((res) => {
      if (res.status !== 200) throw new Error("خطای ناشناخته");
      callback(res);
    })
    .catch((err) => {
      throw new Error("خطای ناشناخته");
    });
  ToastPromise(promise, {
    loading: "لطفا صبر کنید ...",
    success: "از علاقه مندی ها حذف شد",
    error: (e) => e.message,
  });
};

export const completeBuyCart = async (values, callback) => {
  const promise = axios
    .post("/api/order", values)
    .then((res) => {
      if (res.status !== 201) throw new Error("خطای ناشناخته");
      callback(res);
    })
    .catch((err) => {
      throw new Error("خطای ناشناخته");
    });
  ToastPromise(promise, {
    loading: "انتقال به درگاه بانکی ...",
    success: "پرداخت موفق",
    error: (e) => e.message,
  });
};

export const SeenNotification = (notificationID, callback) => {
  axios
    .put(`/api/notification/${notificationID}`)
    .then((res) => {
      if (res.status !== 200) throw new Error("خطای ناشناخته");
      callback(res);
    })
    .catch((err) => {
      throw new Error("خطای ناشناخته");
    });
};

export const Logout = (callback) => {
  const promise = axios
    .post("/api/logout")
    .then((res) => {
      if (res.status !== 200) throw new Error("خطای ناشناخته");
      callback(res);
    })
    .catch((err) => {
      throw new Error("خطای ناشناخته");
    });
  ToastPromise(promise, {
    loading: "لطفا صبر کنید ...",
    success: "از حساب کاربری خارج شدید",
    error: (e) => e.message,
  });
};
