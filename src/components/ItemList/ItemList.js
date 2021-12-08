import { Item } from '../Item/Item'
import './itemList.css'

export const ItemList = ({ items }) => {

    return (
        <div className='itemList'>
            {items.map((i) => {
                return (
                    <Item key={i.id} img={i.img} name={i.name} price={i.price} brand={i.brand}/>
                )
            })}
        </div>
    )
}