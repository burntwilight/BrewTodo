'use client'

import { PiCoffeeThin } from 'react-icons/pi'
import LightDarkButton from './LightDarkButton'
import AccountButton from './AccountButton'
import SignOutButton from './SignOutButton'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()

  const navigateToMainPage = () => {
    router.push('/')
  }

  const user = true

  if (user) {
    return (
      <nav className="p-4 min-h-[10vh] flex justify-between text-text">
        <div className='flex justify-start'>
          <button className='w-6 h-6 hover:-translate-y-1 transition' onClick={navigateToMainPage}><PiCoffeeThin className="w-6 h-6" /></button>
          <p className="text-md font-bold pl-4 pt-0.5">BrewTodo</p>
        </div>
        <div className='flex justify-end h-8 w-8 gap-2'>
          <LightDarkButton />
          <AccountButton />
        </div>   
      </nav>
    )
  } else {
    return (
      <nav className="p-4 min-h-[10vh] flex justify-between text-text">
        <div className='flex justify-start'>
          <PiCoffeeThin className="w-6 h-6" />
          <p className="text-md font-bold pl-4 pt-0.5">BrewTodo</p>
        </div>
        <div className='flex justify-end h-8 w-8 gap-2'>
          <LightDarkButton />
          <SignOutButton />
        </div>   
      </nav>
    )    
  }

  
}

export default Navbar