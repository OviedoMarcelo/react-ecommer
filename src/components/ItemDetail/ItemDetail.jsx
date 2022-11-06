import '../asyncMock'
import '../ItemDetail/itemDetail.css'
import Counter from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const ItemDetail = ({ id, img, name, category, price, description, stock }) => {

    const { addItem, isInCart } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd)
    }

    return (

        <div className='containerDetail'>
            <img src={img} alt={name} className="img-detail" />
            <div className='info-container'>
                <h2>{name}</h2>
                <h3>{category}</h3>
                <p> Precio ${price}</p>
                <p>{description}</p>
                <div>
                    {
                        !isInCart(id)
                        ?<Counter onAdd={handleOnAdd} stock={stock} />
                        :<Link to='/cart'>Finalizar compra</Link>
                        
                    }
                </div>
            </div>
        </div>

    )
}

export default ItemDetail;