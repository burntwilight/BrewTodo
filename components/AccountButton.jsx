'use client'

import { BsPerson } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

const AccountButton = () => {

  const router = useRouter()

  const navigateToAccountPage = () => {
    router.push('/account')
  }

  return (
    <div>
      <button className='flex justify-center items-center w-8 h-8 hover:-translate-y-1 hover:shadow-md hover:shadow-text transition bg-transparent rounded-full p-1 border border-text' onClick={navigateToAccountPage}>
        <BsPerson className='w-6 h-6'/>
      </button>
    </div>
  )
}

export default AccountButton