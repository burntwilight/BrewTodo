'use client'

import SaveButton from "./SaveButton"
import Item from './Item'
import getUserItems from '@/actions/getUserItems'
import DeleteButton from '@/components/DeleteButton'


const Box = () => {

  const userItems = getUserItems()

  return (
    <div>
      <div>
        {/* {userItems.map(item => <Item key={index} item={item} />)} */}
      </div>
      <div className="flex justify-center items-center">
        <SaveButton />
        <DeleteButton />
      </div>
    </div>
  )
}

export default Box