import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const Cart = () => {

    const { cart } = useContext(CartContext)

    return (
        <div>
            <h1>Cart</h1>
            {
                cart.map(prod =>(
                    <div>
                        {prod.name}
                    </div>
                ))
            }

        </div>

    )
}

export default Cart