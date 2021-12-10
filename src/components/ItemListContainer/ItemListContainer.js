import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../../products'
import { ItemList } from '../ItemList/ItemList'
import './itemListContainer.css'

export const ItemListContainer = () => {
    const [listProduct, setListProduct] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        if(categoryId){
            getProductsByCategory(categoryId).then(item => {
                setListProduct(item)
            }).catch(err => {
                console.log(err)
            })
        } else {
            getProducts().then(items => {
                setListProduct(items)
            }).catch(err => {
                console.log(err)
            })
        }

        return (() => {
            setListProduct([])
        })

    }, [categoryId])

    return (
        <div className='itemListContainer'>
            <ItemList products={listProduct} />
        </div>
    )
} 