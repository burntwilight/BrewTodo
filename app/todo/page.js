import getUserItems from "@/actions/getUserItems"
import getUser from "@/actions/getUser"
import ToDoItem from "@/components/ToDoItem"
import ItemInputBox from "@/components/ItemInputBox"
import Link from "next/link"
import { TbMoodSmileBeam } from 'react-icons/tb'
import { redirect } from "next/navigation"

const Page = async () => {

  const user = await getUser()

  if (user === null) {
    
    redirect('/')
  
  } else {
    
    const userItems = await getUserItems(user.id)
    
    return (
      <main className="min-h-[80vh] w-full flex flex-col justify-between items-center p-24">
        <div className="animate-in-slow flex flex-col justify-center items-center pb-24">
          {userItems[0] ? userItems.map(
            (item) =>
              (
                <ToDoItem
                  key={item.id}
                  item={item}
                />
              )
            )
            :
            <TbMoodSmileBeam className="text-text" size={64} />
          }
        </div>
        <div className="flex flex-col justify-center items-center border-b-[1px] border-text w-full mb-4"></div>
        <ItemInputBox user={user} />
      </main>
    )
}
  }

export default Page