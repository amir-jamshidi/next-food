import { redirect } from "next/navigation"
import { cookies } from "next/headers"

const layout = ({ children }) => {
    if (cookies().get('token')) {
        redirect('/');
    }
    return (
        <>
            {children}
        </>
    )
}
export default layout