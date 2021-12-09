import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../products"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import './itemDetailContainer.css'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { paramId } = useParams()
    console.log(paramId)

    useEffect(() => {
        getProductById(paramId).then(item => {
            setProduct(item)
        }).catch(err => {
            console.log(err)
        })

        return (() => {
            setProduct()
        })

    }, [paramId])

    return (
        <section className='itemDetailContainer'>
            <ItemDetail product={product}/>
        </section>
    )
}