'use client'

import { PiSignOutThin } from 'react-icons/pi'

const SignOutButton = () => {
  return (
    <div>
        <button className='flex justify-center items-center w-8 h-8 hover:-translate-y-1 hover:shadow-md hover:shadow-text transition bg-transparent rounded-full p-1 border border-text'>
            <PiSignOutThin className='w-6 h-6' />
        </button>
    </div>
  )
}

export default SignOutButton