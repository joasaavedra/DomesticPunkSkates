import { useState, useEffect } from 'react'
import { getProducts } from '../../products'
import { ItemList } from '../ItemList/ItemList'
import './itemListContainer.css'

export const ItemListContainer = () => {
    const [listProduct, setListProduct] = useState([])

    useEffect(() => {
        const list = getProducts()

        list.then(item => {
            setListProduct(item)
        }).catch(err => {
            console.log(err)
        })

        return (() => {
            setListProduct([])
        })

    }, [])

    return (
        <div className='itemListContainer'>
            <ItemList products={listProduct} />
        </div>
    )
} 