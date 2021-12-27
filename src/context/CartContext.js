import React, { useState } from "react"

const Context = React.createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)

    const addItem = (item, quantity) => {
        setCart([...cart, { ...item, quantity }])
        total(quantity)
    }

    const removeItem = (itemId) => {
        setCart(cart.filter(p => p.id !== itemId))
    }

    const clear = () => {
        setCart([])
        setQuantity(0)
    }

    const isInCart = (itemId) => {
        
    }

    const total = () => {
        return cart.reduce((acc, product) => acc += product.quantity, 0)
    }
    
    return (
        <Context.Provider value={{ cart, quantity, addItem, removeItem, clear, isInCart, total }}>
            {children}
        </Context.Provider>
    )
}

export default Context