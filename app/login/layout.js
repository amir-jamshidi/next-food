import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { isLogin } from "@/middlewares/isLogin"

const layout = async ({ children }) => {

    //Check Is Login
    const isLoginUser = await isLogin();
    if (isLoginUser) {
        redirect('/')
    }

    return (
        <>
            {children}
        </>
    )
}
export default layout