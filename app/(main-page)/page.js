
import getUserItems from "@/actions/getUserItems"
import getUser from "@/actions/getUser"
import ToDoItem from "@/components/ToDoItem"
import ItemInputBox from "@/components/ItemInputBox"
import Link from "next/link"
import { TbMoodSmileBeam } from 'react-icons/tb'

const Page = async () => {

  const user = await getUser()

  if (user === null) {
    return (
    <main className="min-h-[80vh] w-full flex flex-col justify-between items-center p-24">
      <p className="text-text animate-in font-bold text-2xl">No user found. Signin/Signup <Link className="text-accent text-3xl hover:text-primary transition underline" href={'/account'}>here!</Link></p>
      <div className="flex flex-col justify-center items-center border-b-[1px] border-text w-full mb-4"></div>
    </main>
  )
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
            <TbMoodSmileBeam className="text-text" size={32} />
          }
        </div>
        <div className="flex flex-col justify-center items-center border-b-[1px] border-text w-full mb-4"></div>
        <ItemInputBox />
      </main>
    )
}
  }

export default Page