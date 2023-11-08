'use client'

import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

const SaveButton = () => {
  const router = useRouter()
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  const handleClick = async () => {
    const { data, error } = await supabase
      .from('todos')
      // TODO NEED TO GET INPUT INFORMATION FROM FORM AND SEND IT HERE IN TASK
      // TODO NEED TO GET USER_ID IN ORDER TO APPLY TO CORRECT USER
      .insert([
        { task: 'take out trash', user_id: '399f229f-913f-4c6e-9db7-e8cc70c85727'}
      ])
    if (error) {
      console.log(error)
    }
    router.refresh()
  }

  return (
    <div className="">
      <button className='
        rounded-full
        p-4
        sm:p-6
        sm:text-lg
        w-6
        h-6
        bg-primary
        text-text
        border-none
        hover:-translate-y-1
        transition
        flex
        justify-center
        items-center
        text-sm
      '
      onClick={handleClick}
      >
        +
      </button>
    </div>
  )
}

export default SaveButton