import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './cartWidget.css'

export const CartWidget = () => {

        const { total, cart } = useContext(CartContext)

        return (
                <>
                        {cart.length >= 1 && <div className='cartWidget'>
                                <FontAwesomeIcon icon={faShoppingCart} size='lg' className='cartIcon' />
                                <p className='cartNumber'>{total()}</p>
                        </div>}
                </>
        )
}