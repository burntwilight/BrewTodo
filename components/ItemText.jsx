'use client'

const ItemText = ( {item} ) => {
  return (
    <div>
      <p className="text-text text-sm">
        {item.task}
      </p>
      <div>
        {
          item.is_completed
        }
      </div>
    </div>
  )
}

export default ItemText