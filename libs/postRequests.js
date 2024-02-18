import axios from "axios";
import toast from "react-hot-toast";

export const insertToCart = (cart, callback) => {
    console.log('add ------------------------------------------------------');
    axios
        .post("/api/cart", cart)
        .then((res) => {
            console.log(res);
            if (res.status === 201 || res.status === 200) {
                callback(res)
            }
        })
        .catch((err) => {
            console.log(err);
            toast.error('خطای ناشناخته')
        });
}