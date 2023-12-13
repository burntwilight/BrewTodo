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
    return (
    <main className="min-h-[80vh] w-full flex flex-col items-center p-24">
      <h1 className="text-4xl font-bold my-8 text-center text-text">Welcome to BrewTodo!</h1>
      <Link className="text-accent my-auto text-2xl hover:text-background hover:bg-primary border-accent transition border rounded-full p-4" href={'/account'}>Signin/Signup</Link>
    </main>
  )
  } else {
    
      redirect('/todo');

    }
  }

export default Page