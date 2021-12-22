import { useContext } from "react"
import CartContext from '../../context/CartContext'
import './cart.css'

export const Cart = () => {
    const { cart } = useContext(CartContext)
    console.log(cart)

    return (
        <div className="cartContainer">
            {cart.map((i) => {
                return (
                    <article className="cartProductContainer" key={i.id}>
                        <img className="cartProductImg" src={i?.img} alt={i?.name}/>
                        <div className="cartProductDetails">
                            <p className="productName">{i?.name}</p>
                            <p>QUANTITY</p>
                            <p className="productPrice">{i?.price} EACH</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}