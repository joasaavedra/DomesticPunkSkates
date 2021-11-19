import './itemListContainer.css'

export const ItemListContainer = ({greeting}) => {

    return <div className='itemListContainer'>
        <h1 style={{ textDecoration: 'underline' }}>{greeting}</h1>
    </div>
} 