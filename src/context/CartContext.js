import React, { useState } from "react"

const Context = React.createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
            if(isInCart(item.id)) {
                addAmounts(item, quantity)
            } else {
                setCart([...cart, { ...item, quantity }])
            }
    }

    const removeItem = (itemId) => {
        const auxCart = [...cart]
        auxCart.filter(p => p.id !== itemId)
        setCart(auxCart)
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        const auxCart = cart.find(p => p.id === itemId)
        if(auxCart !== undefined) {
            return true
        } else {
            return false
        }
    }

    const addAmounts = (item, quantity) => {
        const prod = [...cart]
        prod.forEach(p => {
            (p.id === item.id) & (p.quantity <= (item.stock + 1))
                ? (p.quantity += quantity)
                : console.log('We dont have any more stock :(');
        })      
    }
    
    return (
        <Context.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
            {children}
        </Context.Provider>
    )
}

export default Context