import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { isLogin } from "@/middlewares/isLogin"

export const metadata = {
    title: 'نکست فود | ورود یا ثبت نام'
  }
  

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