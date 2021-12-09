import { Link } from 'react-router-dom'
import './item.css'

export const Item = ({ img, id, name, price, brand }) => {

    return (
        <div key={id} className='card'>
            <img src={img} alt={name} className='cardImg'/>
            <h3 className='cardTitle'>{brand} {name}</h3>
            <p className='cardPrice'>{price}</p>
            <Link className='cardButton' to={`/detail/${id}`}>DETAILS</Link>
        </div>
    )
}