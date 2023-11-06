'use client'

import { PiCoffeeThin } from 'react-icons/pi'
import LightDarkButton from './LightDarkButton'

const Navbar = () => {
  return (
    <nav className="p-4 min-h-[10vh] flex justify-between text-text">
      <div className='flex justify-start'>
        <PiCoffeeThin className="w-6 h-6" />
        <p className="text-md font-bold pl-4 pt-0.5">BrewTodo</p>
      </div>
      <div className='flex justify-end h-8 w-8'>
        <LightDarkButton />
      </div>
    </nav>
  )
}

export default Navbar