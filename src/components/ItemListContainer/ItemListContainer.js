import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebase'
import { ItemList } from '../ItemList/ItemList'
import './itemListContainer.css'

export const ItemListContainer = () => {
    const [listProduct, setListProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        if(!categoryId){
            getDocs(collection(db, 'products')).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return  { id: doc.id, ...doc.data() }
                })
                setListProduct(products)
            }).catch(err => {
                console.log('Error searching products', err)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getDocs(query(collection(db, 'products'), where('type', '==', categoryId))).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return  { id: doc.id, ...doc.data() }
                })
                setListProduct(products)
            }).catch(err => {
                console.log('Error searching products', err)
            }).finally(() => {
                setLoading(false)
            })
        }

        return (() => {
            setListProduct([])
        })

    }, [categoryId])

    if(loading) {
        return (
            <h1>LOADING..</h1>
        )
    }

    return (
        <div className='itemListContainer'>
            <ItemList products={listProduct} />
        </div>
    )
} 