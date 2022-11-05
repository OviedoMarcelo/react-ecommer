import { createContext, useState, useEffect } from 'react';


export const CartContext = createContext(0)


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    console.log(cart)

    /* Synchro update cart quantity control */
    useEffect(() => {
        const totalQ = getQuantity()
        setTotalQuantity(totalQ)

    }, [cart])

    /* Action funtions */
    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])

        }
        else {
            console.log('Ya esta en el carrito')
        }
    }

    const removeItem = (id) => {
        const cartWithOutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithOutProduct)
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


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}