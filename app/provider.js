'use client'
import { Toaster } from "react-hot-toast"
import { QueryClient, QueryClientProvider } from "react-query"

export const Provider = ({ children }) => {
    return <>
        <QueryClientProvider client={new QueryClient()}>
            {children}
            <Toaster />
        </QueryClientProvider>
    </>
}