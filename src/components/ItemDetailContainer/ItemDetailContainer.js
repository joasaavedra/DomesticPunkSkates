import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebase'
import { ItemDetail } from "../ItemDetail/ItemDetail"
import './itemDetailContainer.css'
import { Spinner } from "../Spinner/Spinner"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { paramId } = useParams()

    useEffect(() => {
        getDoc(doc(db, 'products', paramId)).then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data() }
            setProduct(product)
        }).catch(err => {
            console.log('Error searching product', err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [paramId])

    if(loading) {
        return (
            <Spinner />
        )
    }

    return (
        <section className='itemDetailContainer'>
            <ItemDetail product={product}/>
        </section>
    )
}