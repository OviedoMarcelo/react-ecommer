import { createContext, useState, useEffect } from 'react';


export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    console.log(cart)

    /* Synchro update cart quantity control */
    useEffect(() => {
        const totalQ = getQuantity()
        setTotalQuantity(totalQ)

    }, [cart]) //eslint-disable-line

    useEffect(() => {
        const total = getTotal()
        setTotal(total)

    }, [cart]) //eslint-disable-line

    /* Action funtions */
    const addItem = (productToAdd, quantity) => {
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])

        }
        else {
            const cartUpdated = cart.map(prod => {
                if (prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: quantity
                    }
                    return productUpdated
                } else {
                    return prod
                }
            })
            setCart(cartUpdated)
        }
    }

    const removeItem = (id) => {
        const cartWithOutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithOutProduct)
    }

    const clearCart = () => {
        setCart([])
    }

    /* Validations funtions */

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const getQuantity = () => {

        let accu = 0
        cart.forEach(prod => {
            accu += prod.quantity
        }
        )
        return accu
    }

    const getTotal = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })

        return accu
    }

    const getProductQuantity = (id) => {

        const product = cart.find(prod => prod.id === id)

        return product?.quantity /* If is an object read the property */
    }


    return (
        <CartContext.Provider value={{ cart, totalQuantity, total, addItem, removeItem, isInCart, clearCart, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}