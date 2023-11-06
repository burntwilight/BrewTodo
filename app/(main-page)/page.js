import ItemsBox from "@/components/ItemsBox"

const Page = () => {
  const user = false

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  if (user) {
    return (
      <main className="min-h-[80vh] w-full flex flex-col justify-between items-center p-24">
        <ItemsBox />
      </main>
    )
  } else {
    return (
    <main className="min-h-[80vh] w-full flex flex-col justify-between items-center p-24">
      <h1 className="text-text">Please sign in</h1>
    </main>
    )
  }
  
}

export default Page