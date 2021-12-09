const products = [
    {
        id: 1,
        name: 'M12 LO UFS SPASSOV DOMESTIC PUNK',
        price: '€219.99',
        stock: 20,
        brand: 'ROCES',
        img: 'https://www.roces.com/pub/media/catalog/product/cache/c7f8b3057cd3dca920be537fa7ff27ff/1/0/101277_002.jpg'
    },
    {
        id: 2,
        name: 'M12 LO TIDES',
        price: '€219.99',
        stock: 17,
        brand: 'ROCES',
        img: 'https://www.roces.com/pub/media/catalog/product/cache/c7f8b3057cd3dca920be537fa7ff27ff/t/i/tides.jpg' 
    },
    {
        id: 3,
        name: 'FIFTH ELEMENT UFS GOTO KEMURI GRAY',
        price: '€279.99',
        stock: 15,
        brand: 'ROCES',
        img: 'https://www.roces.com/pub/media/catalog/product/cache/c7f8b3057cd3dca920be537fa7ff27ff/1/0/101279_002_1.jpg'
    },
    {
        id: 4,
        name: 'FIFTH ELEMENT JANSONS STORM',
        price: '€279.99',
        stock: 25,
        brand: 'ROCES',
        img: 'https://www.roces.com/pub/media/catalog/product/cache/c7f8b3057cd3dca920be537fa7ff27ff/n/i/nils_storm_fifth.jpg'
    },
    {
        id: 5,
        name: '909 PAT RIDDER PRO MODEL',
        price: '€299.99',
        stock: 17,
        brand: 'THEM GOODS',
        img: 'https://cdn.shopify.com/s/files/1/2645/1426/products/them-909-pat-ridder-brown-intuition_1024x1024.png?v=1637753554'
    },
    {
        id: 6,
        name: 'AEON BLADIES SKATES',
        price: '€289.99',
        stock: 15,
        brand: 'USD',
        img: 'https://cdn.shopify.com/s/files/1/2645/1426/products/USDAEONBLADIES1_1024x1024.jpg?v=1636211543'
    },
    {
        id: 7,
        name: 'HR 2.5',
        price: '€380.00',
        stock: 10,
        brand: 'REMZ',
        img: 'https://hedonskate.com/media/cache/remz-hr-25-white-2dc0f338e87b6d2e9b3979bacc6952c6.jpg'
    },
    {
        id: 8,
        name: 'SL DEREK HENDERSON 2',
        price: '€350.00',
        stock: 7,
        brand: 'RAZORS',
        img: 'https://hedonskate.com/media/cache/razors-sl-derek-henderson-2-blackbrown-cd885d8054cdc21f9ab3b12eaa25312c.jpg'
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {  
    return new Promise((resolve, reject) => {
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 1000)
    })
}