const products = [
    {
        id: "1",
        name: "Iphone 12",
        price: 1000,
        category: "celular",
        img: "https://img.freepik.com/foto-gratis/planta-serpiente-maceta-blanca_53876-95437.jpg?w=740&t=st=1667593208~exp=1667593808~hmac=2506494bfcc13e50a74dd452f39d2c95d9829aab03bd808b20afc2c998c70efc",
        stock: 23,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a mollitia asperiores nostrum! Dolorem sint."
    },
    {
        id: "2",
        name: "Iphone 13",
        price: 1000,
        category: "tablet",
        img: "https://itechstore.com.ar/wp-content/uploads/2022/06/iphone-13-pro-max-green-select.png",
        stock: 23,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a mollitia asperiores nostrum! Dolorem sint."
    },
    {
        id: "3",
        name: "Iphone 13",
        price: 1000,
        category: "celular",
        img: "https://itechstore.com.ar/wp-content/uploads/2022/06/iphone-13-pro-max-green-select.png",
        stock: 23,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a mollitia asperiores nostrum! Dolorem sint."
    },
    {
        id: "4",
        name: "Iphone 15",
        price: 1000,
        category: "tablet",
        img: "https://itechstore.com.ar/wp-content/uploads/2022/06/iphone-13-pro-max-green-select.png",
        stock: 23,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a mollitia asperiores nostrum! Dolorem sint."
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