'use client'

const SaveButton = () => {

  const handleClick = () => {
    return
  }

  return (
    <div className="p-4">
      <button className='
        rounded-full
        p-4
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