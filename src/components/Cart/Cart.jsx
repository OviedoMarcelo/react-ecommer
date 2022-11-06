import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const Cart = () => {

    const { cart,removeItem,total,clearCart } = useContext(CartContext)

    return (
        <div>
            <h1>Cart</h1>
            {
                cart.map(prod =>(
                    <div>
                        {prod.name} - Cantidad: {prod.quantity} - Precio: {prod.price}
                        <button onClick={()=>removeItem(prod.id)}>Remover</button>
                    </div>
                ))
            }
            <div>
                Precio Total: {total}
            </div>
            <div>
                <button onClick={()=>clearCart()}>
                    Eliminar todo
                </button>
            </div>

        </div>

    )
}

export default Cart