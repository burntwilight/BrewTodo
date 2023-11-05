'use client'

import { BsFillMoonStarsFill } from 'react-icons/bs'
import { BiSun } from 'react-icons/bi'
import { useState } from 'react'

const LightDarkButton = () => {
    const [currentMode, setCurrentMode] = useState(true)

    const toggleMode = () => {
        setCurrentMode(!currentMode)
        const html = document.querySelector('html')
        html.classList.toggle('dark')
    }
    
    return (
        <div>
            <button className='flex justify-center items-center w-8 h-8 hover:-translate-y-1 hover:shadow-md hover:shadow-text transition bg-transparent rounded-full p-1 border-2 border-text' onClick={toggleMode}>
                {currentMode ? <BsFillMoonStarsFill className='w-6 h-6'/> : <BiSun className='w-6 h-6'/>}
            </button>
        </div>
    )
}

export default LightDarkButton