import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'
import './itemListContainer.css'

export const ItemListContainer = ({greeting}) => {
    const addToCart = (count) => {
        console.log(`${count} products has been added`)
    }

    return (
        <div className='itemListContainer'>
            <h1>{greeting}</h1>
            <ItemList />
            <ItemCount stock='10' initial={1} onAdd={addToCart}/>
        </div>
    )
} 