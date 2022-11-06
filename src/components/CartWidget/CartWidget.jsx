import cart from './asset/cart-shopping-solid.svg'
import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)

    return (
        <NavLink to={'/cart'}>
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
        </NavLink>

    );

}

export default CartWidget;