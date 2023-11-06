'use client'

import React, { useEffect, useRef } from 'react'
import SaveButton from '@/components/SaveButton'
import DeleteButton from '@/components/DeleteButton'

const ItemInput = () => {
  const textAreaRef = useRef(null)

  useEffect(() => {
    const textArea = textAreaRef.current

    textArea.addEventListener('input', () => {
      textArea.style.height = 'auto';
      textArea.style.height = textArea.scrollHeight + 'px';
    });

    return () => {
      textArea.removeEventListener('input', () => {
        textArea.style.height = 'auto',
        textArea.style.height = textArea.scrollHeight + 'px'
      })
    }
  }, [])

  
  
  return (
    <div className='flex flex-center items-center p-4'>
      <textarea
        ref={textAreaRef}
        id="text-area"
        className="
        min-h-[10vh] 
        outline-text 
        outline-1
        rounded-xl 
        m-1
        px-2 
        pt-2 
        text-text 
        bg-background
        scroll
        resize-y
        h-auto
        text-sm
        " 
        placeholder="Enter your task here"
      />
      <div className="flex justify-center items-center">
        <SaveButton />
        <DeleteButton />
      </div>
    </div>
  )
}

export default ItemInput