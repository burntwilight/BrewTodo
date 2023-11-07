import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const deleteUserItem = async (id) => {
    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore})
    const { data, error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id)

    
    if (error) {
      console.log(error)
    }
    return data
}



export default deleteUserItem
