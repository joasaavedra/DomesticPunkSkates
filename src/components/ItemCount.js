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
        <div className='productContainer'>
            <div className='product'>
                <img className='productImage' src='https://www.roces.com/pub/media/catalog/product/cache/c7f8b3057cd3dca920be537fa7ff27ff/1/0/101277_002.jpg' alt='Roces M12 LO'/>
                <p>ROCES M12 LO UFS SPASSOV DOMESTIC PUNK</p>
            </div>
            <div className='counter'>
                <button className='quantityBtn' onClick={decrement}>-</button>
                <p>{count}</p>
                <button className='quantityBtn' onClick={increment}>+</button>
            </div>
            <div className='addToCartBtnContainer'>
                <button className='addToCartBtn' onClick={() => onAdd(count)}>ADD TO CART</button>
            </div>       
        </div>
    )
}