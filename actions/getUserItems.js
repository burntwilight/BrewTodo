import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const getUserItems = async (userid) => {
    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore})
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .eq('user_id', userid)
    if (error) {
      console.log(error)
      return []
    }
    return data || []
}



export default getUserItems
