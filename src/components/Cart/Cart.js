import { useContext } from "react"
import { useHistory } from "react-router-dom"
import CartContext from '../../context/CartContext'
import './cart.css'

export const Cart = () => {
    const { cart, clear, removeItem } = useContext(CartContext)
    console.log(cart)
    const history = useHistory()

    return (
        <div>
            <div className="cartContainer">
                {cart.map((i) => {
                    return (
                        <article className="cartProductContainer" key={i.item.id}>
                            <img className="cartProductImg" src={i.item.img} alt={i.item.name} />
                            <div className="cartProductDetails">
                                <p className="productName">{i.item.name}</p>
                                <p>QUANTITY {i.quantity}</p>
                                <p className="productPrice">€{i.item.price} EACH</p>
                            </div>
                            <div className="removeProductBtnContainer">
                                <button className="removeProductBtn" onClick={removeItem}>X</button>
                            </div>
                        </article>
                    )
                })}
            </div>
            <div className="cartBtnsContainer">
                {cart.length >= 1 ? <div className="emptyCartBtnContainer"><button className="emptyCartBtn" onClick={clear}>EMPTY CART</button></div> : <div><h1>THERE IS NO ITEMS IN CART</h1><div className="keepShoppingBtnContainer"><button className="keepShoppingBtn" onClick={() => {history.push('/')}}>KEEP SHOPPING</button></div></div>}
                {cart.length >= 1 && <div className='buyBtnContainer'><button className="buyBtn">BUY</button></div>}
            </div>
        </div>
    )
}