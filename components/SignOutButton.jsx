'use client'

import { useRouter } from 'next/navigation'
import { PiSignOutThin } from 'react-icons/pi'
import { createBrowserClient } from '@supabase/ssr'
import { toast } from "react-hot-toast"


const SignOutButton = ({ user }) => {
  const router = useRouter()

  const signOut = async () => {

    if (user === null) {
      toast.error('No user currently signed in')
      return router.push('/account')
    }

    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
    
    const { error } = await supabase.auth.signOut()

    if (error) {
      toast.error(error.message)
      return router.push('/')
    } 

    toast.success("Successfully signed out!")
    return router.refresh()
  }

  return (
    <div>
        <button className='
          flex 
          justify-center 
          items-center 
          w-8 
          h-8 
          hover:-translate-y-1 
          hover:shadow-md 
          hover:shadow-text 
          transition 
          bg-transparent 
          rounded-full 
          p-1 
          border 
          border-text
        '
        onClick={signOut}
        >
            <PiSignOutThin className='w-6 h-6' />
        </button>
    </div>
  )
}

export default SignOutButton