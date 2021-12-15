import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import './itemDetail.css'

export const ItemDetail = ({ product }) => {
    const [quantity, setQuantity] = useState()

    const addToCart = (count) => {
        setQuantity(count)
        console.log(count)
    }

    return (
        <article className='item'>
            <img src={product?.img} alt={product?.name} className='itemImg'/>
            <div className='itemDetail'>
                <h1 className='itemName'>{product?.brand} {product?.name}</h1>
                <h3 className='itemPrice'>{product?.price}</h3>
                <p>Style: {product?.type}</p>
                <p>Only {product?.stock} units available</p>
                {quantity > 0 ? <Link className='goToCartButton' to='/cart'>GO TO CART</Link> : <ItemCount initial={1} stock={product?.stock} onAdd={addToCart} />}
                <div className='backButtonContainer'>
                    <button className='backButton'>GO BACK</button>
                </div>   
            </div>  
        </article>
    )
}