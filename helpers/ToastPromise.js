import toast from "react-hot-toast"

const ToastPromise = (promise, values) => {
    toast.promise(promise, values);
}

export default ToastPromise