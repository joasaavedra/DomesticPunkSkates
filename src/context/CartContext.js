import React, { useState } from "react"

const Context = React.createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        
    }

    const removeItem = (itemId) => {

    }

    const clear = () => {

    }

    const isInCart = (itemId) => {

    }
    
    return (
        <Context.Provider value={{ addItem, removeItem, clear, isInCart }}>
            {children}
        </Context.Provider>
    )
}

export default Context