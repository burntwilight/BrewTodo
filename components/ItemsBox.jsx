import ItemText from './ItemText'
import ItemInput from '@/components/ItemInput'


const ItemsBox = ( { items } ) => {

  return (
    <div className="h-auto border border-text rounded-2xl flex flex-center items-center p-4 w-fit">
        {
          Object.keys(items).map((key) => (
            <ItemText
              key={key}
              item={items[key]}
            />
          ))
        }
        <ItemInput />
    </div>
  )
}

export default ItemsBox