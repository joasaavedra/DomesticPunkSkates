import React, { useState } from "react"

const Context = React.createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        let flag = isInCart(item.id)
        if(flag) {
            let repeated = cart.find(p => p.id === item.id)
            repeated.quantity += quantity
            setCart([...cart])
        } else {
            setCart([...cart, { ...item, quantity }])
        }
    }

    const removeItem = (itemId) => {
        setCart(cart.filter(p => p.id !== itemId))
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(p => p.id === itemId)
    }

    const total = () => {
        return cart.reduce((acc, product) => acc += product.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, product) => acc += (product.price * product.quantity), 0)
    }
    
    return (
        <Context.Provider value={{ cart, addItem, removeItem, clear, total, totalPrice }}>
            {children}
        </Context.Provider>
    )
}

export default Context