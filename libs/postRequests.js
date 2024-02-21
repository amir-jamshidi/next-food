import axios from "axios";
import toast from "react-hot-toast";

export const insertToCart = (cart, callback) => {
    const promis = axios
        .post("/api/cart", cart)
        .then((res) => {
            console.log(res.status);
            if (res.status === 201 || res.status === 200) {
                callback(res)
            }
        })
        .catch((err) => {
            console.log(err);
            if (err.response.status === 401) {
                toast.error('لطفا اول ثبت نام کنید')
            } else {
                toast.error('خطای ناشناخته')
            }
        });
    toast.promise(promis,
        {
            loading: 'صبر کنید ...',
            success: 'به سبد خرید اضافه شد',
            error: 'خطای ناشناخته',
        }
    )
}