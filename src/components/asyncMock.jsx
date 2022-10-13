const products = [
    {
        id: "1",
        name: "Iphone 12",
        price: 1000,
        category: "celular",
        img: "https://itechstore.com.ar/wp-content/uploads/2022/06/iphone-13-pro-max-green-select.png",
        stock: 23,
        description: "Descripcion de iphone 12"
    },
    {
        id: "2",
        name: "Iphone 13",
        price: 1000,
        category: "tablet",
        img: "https://itechstore.com.ar/wp-content/uploads/2022/06/iphone-13-pro-max-green-select.png",
        stock: 23,
        description: "Descripcion de iphone 12"
    },
    {
        id: "3",
        name: "Iphone 13",
        price: 1000,
        category: "celular",
        img: "https://itechstore.com.ar/wp-content/uploads/2022/06/iphone-13-pro-max-green-select.png",
        stock: 23,
        description: "Descripcion de iphone 12"
    },
    {
        id: "4",
        name: "Iphone 15",
        price: 1000,
        category: "tablet",
        img: "https://itechstore.com.ar/wp-content/uploads/2022/06/iphone-13-pro-max-green-select.png",
        stock: 23,
        description: "Descripcion de iphone 12"
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}