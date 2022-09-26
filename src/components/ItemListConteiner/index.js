import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const ItemListConteiner = ({gretting}) => {
    return (
        <Container>
            <Row>
                <Col> <h2>{gretting}</h2></Col>
            </Row>
        </Container>
    );

}

export default ItemListConteiner;