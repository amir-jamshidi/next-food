import axios from "axios";
import toast from "react-hot-toast";

export const insertToCart = (cart, callback) => {
    axios
        .post("/api/cart", cart)
        .then((res) => {
            if (res.status === 201) {
                callback(res)
            }
        })
        .catch((err) => {
            toast.error('خطای ناشناخته')
        });
}