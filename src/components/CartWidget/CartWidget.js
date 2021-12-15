import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './cartWidget.css'

export const CartWidget = () => {
    
    return <div className='cartWidget'>
                <FontAwesomeIcon icon={faShoppingCart} size='lg' className='cartIcon'/>
                <p className='cartNumber'>0</p>
        </div>
}