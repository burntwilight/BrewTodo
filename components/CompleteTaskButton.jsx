'use client'

import { BsCheck2 } from 'react-icons/bs'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'

const CompleteTaskButton = ( { id } ) => {
  const router = useRouter()
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  const handleClick = async () => {
    const { data, error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id)
    if (error) {
      console.log(error)
    }
    router.refresh()  
  }

  return (
    <div>
      <button className='
      bg-background
      text-text
      rounded-xl
      h-12
      w-12
      m-4
      flex
      justify-center
      items-center
      hover:bg-secondary
      transition
      '
      key={id}
      onClick={handleClick}
      >
        <BsCheck2 
          size={32}
        />
      </button>
    </div>
  )
}

export default CompleteTaskButton