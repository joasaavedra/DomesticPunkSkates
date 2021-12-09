import { ItemCount } from '../ItemCount/ItemCount'
import './itemDetail.css'

export const ItemDetail = ({ product }) => {

    const addToCart = (count) => {
        console.log(`${count} products has been added`)
    }

    return (
        <article className='item'>
            <img src={product?.img} alt={product?.name} className='itemImg'/>
            <div className='itemDetail'>
                <h1 className='itemName'>{product?.brand} {product?.name}</h1>
                <h3 className='itemPrice'>{product?.price}</h3>
                <p>Style: {product?.type}</p>
                <p>Only {product?.stock} units available</p>
                <ItemCount initial={1} stock={product?.stock} onAdd={addToCart} /> 
                <div className='backButtonContainer'>
                    <button className='backButton'>GO BACK</button>
                </div>   
            </div>  
        </article>
    )
}