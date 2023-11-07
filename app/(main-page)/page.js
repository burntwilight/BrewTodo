import { redirect } from "next/navigation"

import getUserItems from "@/actions/getUserItems"
import ToDoItem from "@/components/ToDoItem"
import ItemInputBox from "@/components/ItemInputBox"

const Page = async () => {
  const userItems = await getUserItems()

  if (userItems[0] !== undefined) {
    return (
      <main className="min-h-[80vh] w-full flex flex-col justify-between items-center p-24">
        <div className="animate-in-slow flex flex-col justify-center items-center pb-24">
          {userItems.map(
            (item) =>
              (
                <ToDoItem
                  key={item.id}
                  text={item.task}
                />
              )
            ) 
          }
        </div>
        <div className="flex flex-col justify-center items-center border-b-[1px] border-text w-full mb-4"></div>
        <ItemInputBox />
      </main>
    )
  } else {
    return redirect('/account')
  }
  
}

export default Page