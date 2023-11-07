import { createClient } from "@supabase/supabase-js"


const ItemText = (props) => {
  return (
    <div>{props.item_text}{props.completed}</div>
  )
}

export default ItemText