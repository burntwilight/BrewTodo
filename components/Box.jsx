'use client'

import SaveButton from "./SaveButton"
import Item from './Item'
import getUserItems from '@/actions/getUserItems'
import DeleteButton from '@/components/DeleteButton'


const Box = () => {

  const userItems = getUserItems()

  return (
    <div className="border border-accent rounded-2xl flex flex-center items-center p-4">
      <div className="">
        <Item />
        {/* {userItems.map(item => <Item key={index} item={item} />)} */}
      </div>
      <div className="flex justify-center items-center pb-2">
        <SaveButton />
        <DeleteButton />
      </div>
    </div>
  )
}

export default Box