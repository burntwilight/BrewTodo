'use client'

import SaveButton from "./SaveButton"
import Item from './Item'
import getUserItems from '@/actions/getUserItems'
import DeleteButton from '@/components/DeleteButton'


const Box = () => {

  const userItems = getUserItems()

  return (
    <div className="border border-text rounded-2xl flex flex-center items-center p-4">
      <div className="">
        <Item />
        {/* {userItems.map(item => <Item key={index} item={item} />)} */}
      </div>
      
    </div>
  )
}

export default Box