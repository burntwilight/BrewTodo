'use client'

import { createBrowserClient } from "@supabase/ssr"
import { useRouter } from 'next/navigation'

const SaveButton = ({ userInput, user }) => {
  const router = useRouter()
  const id = user.id

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  const insertTask = async () => {
    const { data, error } = await supabase
      .from('todos')
      .insert([
        { task: userInput, user_id: id}
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
      onClick={insertTask}
      >
        +
      </button>
    </div>
  )
}

export default SaveButton