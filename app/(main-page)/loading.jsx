"use client"

import { BarLoader } from "react-spinners"

const Loading = () => {
    return (
        <div className="h-full flex items-center justify-center">
            <BarLoader height={4} width={200} color="#8fb2ff"/>
        </div>
    )
}

export default Loading