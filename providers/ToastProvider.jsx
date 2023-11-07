'use client'

import { Toaster } from "react-hot-toast"

const ToastProvider = () => {
    return (
        <Toaster
            toastOptions={{
                style:{
                    background: '#ffffff',
                    color: '#000000'
                }
            }}
        />
    )
}

export default ToastProvider