import { useContext } from "react"
import { useHistory } from "react-router-dom"
import CartContext from '../../context/CartContext'
import './cart.css'

export const Cart = () => {
    const { cart, clear, removeItem, totalPrice } = useContext(CartContext)

    const history = useHistory()

    return (
        <div>
            <div className="cartContainer">
                {cart.map((i) => {
                    return (
                        <article className="cartProductContainer" key={i.id}>
                            <img className="cartProductImg" src={i.img} alt={i.name} />
                            <div className="cartProductDetails">
                                <p className="productName">{i.name}</p>
                                <p>QUANTITY {i.quantity}</p>
                                <p className="productPrice">€{i.price} EACH</p>
                            </div>
                            <div className="removeProductBtnContainer">
                                <button className="removeProductBtn" onClick={() => removeItem(i.id)}>X</button>
                            </div>
                        </article>
                    )
                })}
            </div>
            <div className="totalPriceContainer">
            {cart.length >= 1 && <p className="totalPrice">TOTAL €{totalPrice()}</p>}
            </div>
            <div className="cartBtnsContainer">
                {cart.length >= 1 ? <div className="emptyCartBtnContainer">
                    <button className="emptyCartBtn" onClick={clear}>EMPTY CART</button>
                </div> :
                    <div className="emptyCartMessage">
                        <h1>THERE IS NO ITEMS IN CART</h1>
                        <div className="keepShoppingBtnContainer">
                            <button className="keepShoppingBtn" onClick={() => { history.push('/') }}>KEEP SHOPPING</button>
                        </div>
                    </div>}
                {cart.length >= 1 && <div className='buyBtnContainer'>
                    <button className="buyBtn">BUY</button>
                </div>}
            </div>
        </div>
    )
}