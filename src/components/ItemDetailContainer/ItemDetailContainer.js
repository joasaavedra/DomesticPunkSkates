import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db, getProduct } from '../../services/firebase/firebase'
import { ItemDetail } from "../ItemDetail/ItemDetail"
import './itemDetailContainer.css'
import { Spinner } from "../Spinner/Spinner"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { paramId } = useParams()

    useEffect(() => {
        getProduct(db, 'products', paramId).then(product => {
            setProduct(product)
        }).catch(error => {
            console.log(error)
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