import { useState } from "react"

export const usePost = () => {
    const [isLogin, setIsLogin] = useState(false)
    const call = (values) => {

    }
    return {
        isLogin
    }
}

