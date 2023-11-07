'use client'

import CompleteTaskButton from "./CompleteTaskButton"

const ToDoItem = ( { text } ) => {
  return (
    <div className="w-full border border-text rounded-xl flex flex-center items-center p-4 m-4 min-w-[30vw]">
      <CompleteTaskButton />
      <p className="text-text m-4">{text !== undefined && text !== '' ? text : ''}</p>
        
    </div>
  )
}

export default ToDoItem