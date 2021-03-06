import { useState } from 'react'
import './itemCount.css'

export const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock){
            setCount(count + 1)
        }     
    }

    const decrement = () => {
        if(count > 1){
            setCount(count - 1)
        }    
    }

    return (
        <div className='counterContainer'>
            <div className='counter'>
                <button className={count === 0 ? 'outOfStockQuantityBtn' : 'quantityBtn'} onClick={decrement}>-</button>
                <p>{count}</p>
                <button className={count === 0 ? 'outOfStockQuantityBtn' : 'quantityBtn'}  onClick={increment}>+</button>
            </div>
            <div className='addToCartBtnContainer'>
                <button className={count === 0 ? 'outOfStockAddToCartBtn' : 'addToCartBtn'}  onClick={() => onAdd(count)}>ADD TO CART</button>
            </div>
        </div>
    )
}