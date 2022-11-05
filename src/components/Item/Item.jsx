import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import './item.css'

export const Item = ({ id, name, img, price, description }) => {


    return (

        <Card style={{ width: '18rem' }} className="m-4">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    ${price}
                </Card.Text>
                <Link to={`/detail/${id}`} className="detail-button">Ir al detalle</Link>
            </Card.Body>
        </Card>
    );
}


export default Item;