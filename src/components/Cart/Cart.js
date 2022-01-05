import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { db } from '../../services/firebase/firebase'
import { addDoc, collection, Timestamp, doc, writeBatch, getDoc } from 'firebase/firestore'
import CartContext from '../../context/CartContext'
import './cart.css'

export const Cart = () => {
    const history = useHistory()

    const { cart, clear, removeItem, totalPrice } = useContext(CartContext)

    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        comment: ''
    })
    const [orderId, setOrderId] = useState('')

    const newOrder = () => {
        let contact = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            comment: document.getElementById('comment').value
        }
        setContact(contact)
        createNewOrder()
    }

    const createNewOrder = () => {
        const objOrder = {
            buyer: contact.name,
            items: cart,
            total: totalPrice(),
            phone: contact.phone,
            address: contact.address,
            comment: contact.comment,
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)
        const outOfStock = []

        cart.forEach((prod) => {
            getDoc(doc(db, 'products', prod.id)).then((documentSnapshot) => {
                if(documentSnapshot.data().stock >= prod.quantity) {
                    batch.update(doc(db, 'products', documentSnapshot.id), {
                        stock: documentSnapshot.data().stock - prod.quantity
                    })
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                } 
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), objOrder).then(({ id }) => {
                batch.commit().then(() => {
                    setOrderId(id)
                    console.log(orderId)
                }) 
            }).catch((err) => {
                console.log(`Error: ${err}`)
            })
        }
    }

    return (
        <div className="orderContainer">
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
            {cart.length >= 1 &&<div className="formCotainer">
                <h2>PLEASE COMPLETE THE FOLLOWING FORM TO FINISH THE ORDER</h2>
                <form className="form">
                    <label>NAME:</label><br/>
                    <input type='text' id="name"></input><br/>
                    <label>PHONE:</label><br/>
                    <input type='number' id="phone"></input><br/>
                    <label>ADDRESS:</label><br/>
                    <input type='text' id="address"></input><br/>
                    <label>ADDITIONAL COMMENT:</label><br/>
                    <input type='text' id='comment'></input>
                </form>
            </div>}
            <div className="cartBtnsContainer">
                {cart.length >= 1 ? <>
                                        <div className="emptyCartBtnContainer">
                                            <button className="emptyCartBtn" onClick={clear}>EMPTY CART</button>
                                        </div>
                                        <div className='buyBtnContainer'>
                                            <button className="buyBtn" onClick={newOrder}>BUY</button>
                                        </div> 
                                    </> :
                                    <div className="emptyCartMessage">
                                        <h1>THERE IS NO ITEMS IN CART</h1>
                                        <div className="keepShoppingBtnContainer">
                                            <button className="keepShoppingBtn" onClick={() => { history.push('/') }}>KEEP SHOPPING</button>
                                        </div>
                                    </div>}
            </div>
        </div>
    )
}