const products = [
    {
        id: 1,
        name: 'M12 LO UFS SPASSOV DOMESTIC PUNK',
        price: '€219.99',
        stock: 20,
        brand: 'ROCES',
        type: 'AGGRESSIVE',
        img: 'https://www.roces.com/pub/media/catalog/product/cache/c7f8b3057cd3dca920be537fa7ff27ff/1/0/101277_002.jpg'
    },
    {
        id: 2,
        name: 'M12 LO TIDES',
        price: '€219.99',
        stock: 17,
        brand: 'ROCES',
        type: 'AGGRESSIVE',
        img: 'https://www.roces.com/pub/media/catalog/product/cache/c7f8b3057cd3dca920be537fa7ff27ff/t/i/tides.jpg' 
    },
    {
        id: 3,
        name: 'FIFTH ELEMENT UFS GOTO KEMURI GRAY',
        price: '€279.99',
        stock: 15,
        brand: 'ROCES',
        type: 'AGGRESSIVE',
        img: 'https://www.roces.com/pub/media/catalog/product/cache/c7f8b3057cd3dca920be537fa7ff27ff/1/0/101279_002_1.jpg'
    },
    {
        id: 4,
        name: 'FIFTH ELEMENT JANSONS STORM',
        price: '€279.99',
        stock: 25,
        brand: 'ROCES',
        type: 'AGGRESSIVE',
        img: 'https://www.roces.com/pub/media/catalog/product/cache/c7f8b3057cd3dca920be537fa7ff27ff/n/i/nils_storm_fifth.jpg'
    },
    {
        id: 5,
        name: '909 PAT RIDDER PRO MODEL',
        price: '€299.99',
        stock: 17,
        brand: 'THEM GOODS',
        type: 'AGGRESSIVE',
        img: 'https://cdn.shopify.com/s/files/1/2645/1426/products/them-909-pat-ridder-brown-intuition_1024x1024.png?v=1637753554'
    },
    {
        id: 6,
        name: 'AEON BLADIES SKATES',
        price: '€289.99',
        stock: 15,
        brand: 'USD',
        type: 'AGGRESSIVE',
        img: 'https://cdn.shopify.com/s/files/1/2645/1426/products/USDAEONBLADIES1_1024x1024.jpg?v=1636211543'
    },
    {
        id: 7,
        name: 'HR 2.5',
        price: '€380.00',
        stock: 10,
        brand: 'REMZ',
        type: 'AGGRESSIVE',
        img: 'https://hedonskate.com/media/cache/remz-hr-25-white-2dc0f338e87b6d2e9b3979bacc6952c6.jpg'
    },
    {
        id: 8,
        name: 'SL DEREK HENDERSON 2',
        price: '€350.00',
        stock: 7,
        brand: 'RAZORS',
        type: 'AGGRESSIVE',
        img: 'https://hedonskate.com/media/cache/razors-sl-derek-henderson-2-blackbrown-cd885d8054cdc21f9ab3b12eaa25312c.jpg'
    },
    {
        id: 9,
        name: '1992 ORANGE',
        price: '€189.99',
        stock: 13,
        brand: 'ROCES',
        type: 'ROLLERBLADING',
        img: 'https://www.roces.com/pub/media/catalog/product/cache/c7f8b3057cd3dca920be537fa7ff27ff/1/9/1992-orange.jpg'
    },
    {
        id: 10,
        name: 'ZOOM PRO 100',
        price: '€189.99',
        stock: 15,
        brand: 'POWERSLIDE',
        type: 'ROLLERBLADING',
        img: 'https://cdn.shopify.com/s/files/1/2645/1426/products/Powerslide_Zoom_Pro_Black_100_1024x1024.jpg?v=1636198028'
    },
    {
        id: 11,
        name: 'NEXT 90',
        price: '€209.99',
        stock: 7,
        brand: 'POWERSLIDE',
        type: 'ROLLERBLADING',
        img: 'https://cdn.shopify.com/s/files/1/2645/1426/products/DSC02312_For_shutter_stock_01_1024x1024.jpg?v=1636201966'
    },
    {
        id: 12,
        name: 'HIGH LIGHT 80',
        price: '€299.99',
        stock: 3,
        brand: 'SEBA',
        type: 'ROLLERBLADING',
        img: 'https://cdn.shopify.com/s/files/1/2645/1426/products/Seba-HIGH-LIGHT-SKATES_1024x1024.jpg?v=1602679559'
    },
    {
        id: 13,
        name: 'F4 RAVEN PURPLE',
        price: '€169.99',
        stock: 16,
        brand: 'FLYING EAGLE',
        type: 'ROLLERBLADING',
        img: 'https://cdn.shopify.com/s/files/1/2645/1426/products/FlyingEagleF4RavenPurpleSkates02591_1024x1024.jpg?v=1636202738'
    },
    {
        id: 14,
        name: '2021 CRUISER W',
        price: '€179.99',
        stock: 19,
        brand: 'ROLLERBLADE',
        type: 'ROLLERBLADING',
        img: 'https://cdn.shopify.com/s/files/1/2645/1426/products/Rollerblade2021CruiserWSkates_1024x1024.jpg?v=1636212426'
    },
    {
        id: 15,
        name: 'NEXT BROWN 125',
        price: '€229.99',
        stock: 8,
        brand: 'POWERSLIDE',
        type: 'ROLLERBLADING',
        img: 'https://cdn.shopify.com/s/files/1/2645/1426/products/Poowerslide-next-125-brown-1_1024x1024.jpg?v=1599233376'
    },
    {
        id: 16,
        name: 'SWELL 110 TRIPLE',
        price: '€234.99',
        stock: 4,
        brand: 'POWERSLIDE',
        type: 'ROLLERBLADING',
        img: 'https://cdn.shopify.com/s/files/1/2645/1426/products/Powerslide_Swell_110_Triple_Black_2020_Skates_1024x1024.jpg?v=1636199496'
    },
    {
        id: 17,
        name: 'BEACH BUNNY WATERMELON',
        price: '€199.95',
        stock: 17,
        brand: 'MOXI',
        type: 'QUAD',
        img: 'https://media.rollerderbyhouse.eu/CommerceManager/Products/1513/product_1513_5dfa237284cb6_medium.jpg'
    },
    {
        id: 18,
        name: 'RAINBOW RIDER',
        price: '€89.95',
        stock: 14,
        brand: 'ROOKIE',
        type: 'QUAD',
        img: 'https://media.rollerderbyhouse.eu/CommerceManager/Products/1633/product_1633_607aa8a2402a3_medium.jpg'
    },
    {
        id: 19,
        name: 'MELROSE DELUXE PASTEL',
        price: '€119.95',
        stock: 11,
        brand: 'CHAYA',
        type: 'QUAD',
        img: 'https://media.rollerderbyhouse.eu/CommerceManager/Products/1642/product_1642_60964788ad81d_medium.jpg'
    },
    {
        id: 20,
        name: 'KARMA PRO PARK',
        price: '€359.95',
        stock: 5,
        brand: 'CHAYA',
        type: 'QUAD',
        img: 'https://media.rollerderbyhouse.eu/CommerceManager/Products/1505/product_1505_5db1ac5997e24_medium.jpg'
    },
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