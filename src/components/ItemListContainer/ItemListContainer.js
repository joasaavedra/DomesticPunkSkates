import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firebase'
import { ItemList } from '../ItemList/ItemList'
import './itemListContainer.css'
import { Spinner } from '../Spinner/Spinner'

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        getProducts('type', '==', categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProducts([])
        })

    }, [categoryId])

    if(loading) {
        return (
            <Spinner />
        )
    }

    return (
        <div className='itemListContainer'>
            <ItemList products={products} />
        </div>
    )
} 