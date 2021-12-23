import React, { useState } from "react"

const Context = React.createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [item, setItem] = useState({})
    const [quantity, setQuantity] = useState('')

    const addItem = (item, quantity) => {
            setCart([...cart, {item, quantity}])
            setQuantity(quantity)
    }

    const removeItem = (itemId) => {
        
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        
    }
    
    return (
        <Context.Provider value={{ cart, quantity, addItem, removeItem, clear, isInCart }}>
            {children}
        </Context.Provider>
    )
}

export default Context