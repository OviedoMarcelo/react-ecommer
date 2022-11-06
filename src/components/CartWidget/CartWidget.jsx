import cart from './asset/cart-shopping-solid.svg'
import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)

    return (
        <div className='cart-conteiner'>
            <img
                src={cart}
                alt="cart"
                className='cart-image'
            />
            <span>
                {totalQuantity}
            </span>
        
        </div>

    );

}

export default CartWidget;