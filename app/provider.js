import { Toaster } from "react-hot-toast"

export const Provider = ({ children }) => {
    return <>
        {children}
        <Toaster />
    </>
}