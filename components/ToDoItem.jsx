'use client'

const ToDoItem = ( { text } ) => {
  return (
    <div className="w-full border border-text rounded-xl flex flex-center items-center p-4 m-4 min-w-[30vw]">
        <p className="text-text">{text !== undefined && text !== '' ? text : ''}</p>
    </div>
  )
}

export default ToDoItem