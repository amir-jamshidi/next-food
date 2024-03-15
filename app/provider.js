'use client'
import { ThemeContext } from "@emotion/react"
import { useEffect, useState } from "react"
import { Toaster } from "react-hot-toast"
import { QueryClient, QueryClientProvider } from "react-query"

export const Provider = ({ children }) => {

    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        document.documentElement.className = theme
    }, [theme])

    return <>
        <QueryClientProvider client={new QueryClient()}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                {children}
                <Toaster />
            </ThemeContext.Provider>
        </QueryClientProvider>
    </>
}