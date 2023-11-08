
import getUserItems from "@/actions/getUserItems"
import getUser from "@/actions/getUser"
import ToDoItem from "@/components/ToDoItem"
import ItemInputBox from "@/components/ItemInputBox"
import { useRouter } from "next/navigation"

const Page = async () => {
  const router = useRouter
  
  const user = await getUser()

  if (user === null) {
    router.push('/account')
  } else {
    
    const userItems = await getUserItems(user.id)
    
    return (
      <main className="min-h-[80vh] w-full flex flex-col justify-between items-center p-24">
        <div className="animate-in-slow flex flex-col justify-center items-center pb-24">
          {userItems.map(
            (item) =>
              (
                <ToDoItem
                  key={item.id}
                  item={item}
                />
              )
            ) 
          }
        </div>
        <div className="flex flex-col justify-center items-center border-b-[1px] border-text w-full mb-4"></div>
        <ItemInputBox />
      </main>
    )
}
  }

export default Page