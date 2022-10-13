import '../asyncMock'
import '../ItemDetail/itemDetail.css'
import Counter from '../Counter/Counter'

const ItemDetail = ({ img, name, category, price, description, stock }) => {
    return (

        <div className='containerDetail'>
            <img src={img} alt={name} className="img-detail" />
            <div className='info-container'>
                <h2>{name}</h2>
                <h3>{category}</h3>
                <p> ${price}</p>
                <p>{description}</p>
                <Counter onAdd={stock} />
            </div>

        </div>

    )
}

export default ItemDetail;