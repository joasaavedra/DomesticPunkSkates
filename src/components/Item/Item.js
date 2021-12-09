import { Link } from 'react-router-dom'
import './item.css'

export const Item = ({ product }) => {

    return (
        <div key={product.id} className='card'>
            <img src={product.img} alt={product.name} className='cardImg'/>
            <h3 className='cardTitle'>{product.brand} {product.name}</h3>
            <p className='cardPrice'>{product.price}</p>
            <Link className='cardButton' to={`/detail/${product.id}`}>DETAILS</Link>
        </div>
    )
}