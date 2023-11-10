'use client'

import { PiCoffeeThin } from 'react-icons/pi'
import LightDarkButton from './LightDarkButton'
import AccountButton from './AccountButton'
import SignOutButton from './SignOutButton'
import { useRouter } from 'next/navigation'
import MiniSoundPlayer from './mini-sound-player/MiniSoundPlayer'

// TODO MAKE SIGNOUT APPEAR IF LOGGED IN

const Navbar = ( { user } ) => {
  const router = useRouter()

  const navigateToMainPage = () => {
    router.push('/')
  }

  return (
    <nav className="p-4 min-h-[10vh] flex justify-between text-text">
      <div className='flex justify-start items-start h-8 w-fit'>
        <button className='flex justify-start items-start w-6 h-6 hover:-translate-y-1 transition' onClick={navigateToMainPage}><PiCoffeeThin size={24} /></button>
        <button onClick={navigateToMainPage} className='hidden sm:flex justify-start items-start w-fit h-6 hover:-translate-y-1 transition'><p className="text-md font-bold hover:text-primary pl-4 pt-1 transition">BrewTodo</p></button>
      </div>
      <div className='flex justify-end h-8 gap-2'>
        <MiniSoundPlayer />
        <LightDarkButton />
        <AccountButton />
        <SignOutButton user={user}/>
      </div>   
    </nav>
  )
}

export default Navbar