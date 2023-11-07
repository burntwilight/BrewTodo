import { BsCheck2 } from 'react-icons/bs'

const CompleteTaskButton = () => {
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
      hover:text-background
      hover:bg-primary
      transition
      '>
        <BsCheck2 
          size={32}
        />
      </button>
    </div>
  )
}

export default CompleteTaskButton