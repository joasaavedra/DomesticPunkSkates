import { Item } from './Item'
import './itemList.css'

export const ItemList = ({items}) => {

    return (
        <div className='itemContainer'>
            {items.map((i) => {
                return (
                    <Item key={i.id} img={i.img} name={i.name} price={i.price}/>
                )
            })}
        </div>
    )
}