'use client'

import React, { useEffect, useRef, useState } from 'react'
import SaveButton from '@/components/SaveButton'
// import DeleteButton from '@/components/DeleteInputButton'

const ItemInputBox = ({ user }) => {
  const textAreaRef = useRef(null)
  const [userInput, setUserInput] = useState('')

  useEffect(() => {
    const textArea = textAreaRef.current

    const handleInput = () => {
      const text = textArea.value; // Get the current value of the textarea
      textArea.style.height = 'auto';
      textArea.style.height = textArea.scrollHeight + 'px';
      setUserInput(text); // Update userInput with the textarea value
    };

    textArea.addEventListener('input', handleInput);

    return () => {
      textArea.removeEventListener('input', handleInput);
    }
  }, [])
  
  return (
    <div className='animate-in-side w-full border border-text rounded-xl flex flex-col sm:flex-row justify-center items-center p-4 min-w-[30vw]'>
      <textarea
        ref={textAreaRef}
        className="
        border
        border-secondary
        w-full
        min-h-[10vh] 
        outline-text 
        outline-1
        rounded 
        m-1
        px-2 
        pt-2 
        text-text 
        bg-background
        scroll
        h-auto
        resize-none
        "
        autoFocus
        placeholder="Enter your task here"
      />
      <div className="flex justify-center items-center sm:gap-12 gap-4 sm:pr-12 sm:pl-12 p-4">
      <SaveButton userInput={userInput} user={user} />
      {/* <DeleteButton /> */}
      </div>
    </div>
  )
}

export default ItemInputBox