import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cart.css'



const Cart = () => {

    const { cart, removeItem, total, clearCart } = useContext(CartContext)

    return (
        <div>

            <h1>Carrito de compras</h1>
            <Container className="conteiner-cart">
                <Row >
                    <Col>Nombre</Col>
                    <Col>Cantidad</Col>
                    <Col>Precio</Col>
                    <Col>Eliminar</Col>
                </Row>
                {
                    cart.map(prod => (
                        <Row>
                            <Col>{prod.name}</Col>
                            <Col>x{prod.quantity}</Col>
                            <Col>${prod.price}</Col>
                            <Col>
                                <button class="delete-button" onClick={() => removeItem(prod.id)}> x
                                </button>
                            </Col>
                        </Row>
                    ))

                }
                <Row>
                    <Col >Precio Total: {total}</Col>                 
                </Row>
                <Col><button onClick={() => clearCart()}>
                        Eliminar todo
                    </button></Col>
                    <Col><NavLink to={'/checkout'}>Check Out</NavLink></Col>
            </Container>
            <Row></Row>
        </div>

    )
}

export default Cart