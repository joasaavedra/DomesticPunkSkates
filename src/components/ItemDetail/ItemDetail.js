import { ItemCount } from '../ItemCount/ItemCount'
import './itemDetail.css'

export const ItemDetail = ({ img, name, brand, stock, price }) => {

    const addToCart = (count) => {
        console.log(`${count} products has been added`)
    }

    return (
        <article className='item'>
            <img src={img} alt={name} className='itemImg'/>
            <div className='itemDetail'>
                <h1 className='itemName'>{brand} {name}</h1>
                <h3 className='itemPrice'>{price}</h3>
                <p>Only {stock} units available</p>
                <ItemCount initial={1} stock={stock} onAdd={addToCart} /> 
                <div className='backButtonContainer'>
                    <button className='backButton'>GO BACK</button>
                </div>   
            </div>  
        </article>
    )
}