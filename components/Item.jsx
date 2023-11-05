'use client'

import SaveButton from '@/components/SaveButton'
import DeleteButton from '@/components/DeleteButton'

const Item = () => {
  

  return (
    <div>
      <textarea id="text-area" className="min-h-[10vh] outline-text border-accent rounded-xl m-4 pl-2 pt-2 text-text bg-background" placeholder="Enter your task here" />
      <div className="flex justify-center items-center pb-2">
        <SaveButton />
        <DeleteButton />
      </div>
    </div>
  )
}

export default Item