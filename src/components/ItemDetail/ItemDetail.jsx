import '../asyncMock'
import '../ItemDetail/itemDetail.css'
import Counter from '../ItemCount/ItemCount'
import { useContext } from 'react'
import {CartContext} from '../../context/CartContext'


const ItemDetail = ({ id, img, name, category, price, description, stock }) => {

    const {addItem} = useContext(CartContext)

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
                <Counter onAdd={handleOnAdd} stock={stock} />
            </div>
        </div>

    )
}

export default ItemDetail;