'use client'

import ItemText from './ItemText'
import ItemInput from '@/components/ItemInput'


const ItemsBox = () => {

  const userItems = getUserItems()

  return (
    <div className="h-auto border border-text rounded-2xl flex flex-center items-center p-4 w-fit">
        {/* {userItems.map(item => <ItemText key={index} item={item} />)} */}
        <ItemInput />
    </div>
  )
}

export default ItemsBox