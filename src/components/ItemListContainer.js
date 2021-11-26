import { useState, useEffect } from 'react'
import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'
import './itemListContainer.css'

const getItems = () => {
    return new Promise((resolve, reject) => {
        const object = [
            {
                id: '1',
                name: 'M12 LO UFS SPASSOV DOMESTIC PUNK',
                price: '€219.99',
                stock: 20,
                img: 'https://www.roces.com/pub/media/catalog/product/cache/c7f8b3057cd3dca920be537fa7ff27ff/1/0/101277_002.jpg'
            },
            {
                id: '2',
                name: 'FIFTH ELEMENT UFS GOTO KEMURI GRAY',
                price: '€279.99',
                stock: 15,
                img: 'https://www.roces.com/pub/media/catalog/product/cache/c7f8b3057cd3dca920be537fa7ff27ff/1/0/101279_002_1.jpg'
            },
            {
                id: 3,
                name: 'M12 LO TIDES',
                price: '€219.99',
                stock: 17,
                img: 'https://www.roces.com/pub/media/catalog/product/cache/c7f8b3057cd3dca920be537fa7ff27ff/t/i/tides.jpg' 
            }
        ]
        setTimeout(() => resolve(object), 2000)
    })
}

export const ItemListContainer = ({greeting}) => {
    const [listProduct, setListProduct] = useState([])

    useEffect(() => {
        const list = getItems()

        list.then(response => {
            setListProduct(response)
        })
    }, [])


    const addToCart = (count) => {
        console.log(`${count} products has been added`)
    }

    return (
        <div className='itemListContainer'>
            <h1 className='title'>{greeting}</h1>
            <ItemList items={listProduct}/>
            <ItemCount stock='10' initial={1} onAdd={addToCart}/>
        </div>
    )
} 