import toast from "react-hot-toast";

const ToastPromise = (promise, successText) => {
    toast.promise(promise, {
        loading: "صبر کنید",
        success: successText,
        error: 'خطای ناشناخته',
    })
}

export default ToastPromise;