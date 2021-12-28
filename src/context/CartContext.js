import React, { useState } from "react"

const Context = React.createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        setCart([...cart, { ...item, quantity }])
    }

    const removeItem = (itemId) => {
        setCart(cart.filter(p => p.id !== itemId))
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        
    }

    const total = () => {
        return cart.reduce((acc, product) => acc += product.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, product) => acc += (product.price * product.quantity), 0)
    }
    
    return (
        <Context.Provider value={{ cart, addItem, removeItem, clear, isInCart, total, totalPrice }}>
            {children}
        </Context.Provider>
    )
}

export default Context