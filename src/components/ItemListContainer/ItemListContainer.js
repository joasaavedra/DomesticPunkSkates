import { useState, useEffect } from 'react'
import { getProducts } from '../../products'
import { ItemList } from '../ItemList/ItemList'
import './itemListContainer.css'

export const ItemListContainer = ({greeting}) => {
    const [listProduct, setListProduct] = useState([])

    useEffect(() => {
        const list = getProducts()

        list.then(response => {
            setListProduct(response)
        })
    }, [])

    return (
        <div className='itemListContainer'>
            <h1 className='title'>{greeting}</h1>
            <ItemList items={listProduct}/>
        </div>
    )
} 