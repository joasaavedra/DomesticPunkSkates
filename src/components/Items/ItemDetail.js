import { useState } from 'react'
import './itemDetail.css'

export const ItemDetail = ({ product }) => {
    const [count, setCount] = useState(1)

    const increment = () => {
        if(count < product.stock){
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    return (
        <article className='item'>
            <img src={product.img} alt={product.name} className='itemImg'/>
            <div className='itemDetail'>
                <h1 className='itemName'>{product.brand} {product.name}</h1>
                <h3>{product.price}</h3>
                <p>Only {product.stock} units available</p>
                <div className='detailButtons'>
                    <div className='quantityButtons'>
                        <button onClick={decrement} className='quantityBtn'>-</button>
                        <p>{count}</p>
                        <button onClick={increment} className='quantityBtn'>+</button>
                    </div>
                    <div className='addToCartButtonContainer'>
                        <button className='addToCartBtn'>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </article>
    )
}