import CompleteTaskButton from "./CompleteTaskButton"

const ToDoItem = ( { item } ) => {
  return (
    <div className="shadow-sm shadow-text w-full border border-text rounded-xl flex flex-center items-center p-4 m-4 min-w-[30vw]">
      <CompleteTaskButton id={item.id} />
      <p className="text-text m-4">{item.task !== undefined && item.task !== '' ? item.task : ''}</p>
    </div>
  )
}

export default ToDoItem