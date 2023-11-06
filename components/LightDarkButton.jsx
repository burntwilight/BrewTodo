'use client'

import { BsFillMoonStarsFill } from 'react-icons/bs'
import { BiSun } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'

const LightDarkButton = () => {
    const [currentMode, setCurrentMode] = useState(false)

    useEffect(() => {
        const html = document.querySelector('html')
        if (html) {
            if (currentMode) {
                html.classList.add('dark')
            } else {
                html.classList.remove('dark')
            }
        }
    }, [currentMode])

    const toggleMode = () => {
        setCurrentMode(!currentMode)
    }
    
    return (
        <div>
            <button className='flex justify-center items-center w-8 h-8 hover:-translate-y-1 hover:shadow-md hover:shadow-text transition bg-transparent rounded-full p-1 border border-text' onClick={toggleMode}>
                {currentMode ? <BsFillMoonStarsFill className='w-6 h-6'/> : <BiSun className='w-6 h-6'/>}
            </button>
        </div>
    )
}

export default LightDarkButton