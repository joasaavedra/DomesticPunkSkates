import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './cartWidget.css'

export const CartWidget = () => {

        const { total } = useContext(CartContext)

    return <div className='cartWidget'>
                <FontAwesomeIcon icon={faShoppingCart} size='lg' className='cartIcon'/>
                <p className='cartNumber'>{total()}</p>
        </div>
}