import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const getUserItems = async () => {
    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore})
    const { data, error } = await supabase
      .from('todos')
      .select('*')
    
    if (error) {
      console.log(error)
      return []
    }
    return data || []
}



export default getUserItems
