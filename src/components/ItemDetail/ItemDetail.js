import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import './itemDetail.css'

export const ItemDetail = ({ product }) => {
    const history = useHistory()
    const [quantity, setQuantity] = useState()
    const { addItem } = useContext(CartContext)

    const addToCart = (count) => {
        setQuantity(count)
        addItem(product, count)
    }

    return (
        <article className='item'>
            <img src={product?.img} alt={product?.name} className='itemImg'/>
            <div className='itemDetail'>
                <h1 className='itemName'>{product?.brand} {product?.name}</h1>
                <h3 className='itemPrice'>€{product?.price}</h3>
                <p>Style: {product?.type}</p>
                <p>Only {product?.stock} units available</p>
                {quantity > 0 ? <div className='goToCartButtonContainer'><button className='goToCartButton' to='/cart' onClick={() => {history.push('/cart')}}>GO TO CART</button></div> : <ItemCount initial={1} stock={product?.stock} onAdd={addToCart} />}
                <div className='backButtonContainer'>
                    <button className='backButton'>GO BACK</button>
                </div>   
            </div>  
        </article>
    )
}