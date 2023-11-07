import getUserItems from "@/actions/getUserItems"
import ItemsBox from "@/components/ItemsBox"
import { redirect } from "next/navigation"

const Page = async () => {
  const userItems = await getUserItems()

  if (userItems[0] !== undefined) {
    return (
      <main className="min-h-[80vh] w-full flex flex-col justify-between items-center p-24">
        <ItemsBox items={...userItems} />
      </main>
    )
  } else {
    
    return redirect('/account')
  }
  
}

export default Page