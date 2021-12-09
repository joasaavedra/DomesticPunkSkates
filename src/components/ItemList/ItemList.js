import { Item } from '../Item/Item'
import './itemList.css'

export const ItemList = ({ products = [] }) => {

    return (
        <div className='itemList'>
            {products.map(product => {
                return (
                    <Item key={product.id} product={product}/>
                )
            })}
        </div>
    )
}