import cart from './asset/cart-shopping-solid.svg'
import './CartWidget.css'

export const CartWidget = ({CartElement}) => {

    return (
        <div className='cart-conteiner'>
            <img
                src={cart}
                alt="cart"
                className='cart-image'
            />
            <span>
                {CartElement}
            </span>
        
        </div>

    );

}

export default CartWidget;