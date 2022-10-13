import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../asyncMock';
import { Loader } from '../Loader/Loader';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListConteiner = ({ gretting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()


    useEffect(() => {

        const asyncFuntion = categoryId ? getProductsByCategory : getProducts

        asyncFuntion(categoryId).then(response => {
            setProducts(response)
        }).finally(() => {

            setLoading(false);

        })

    }, [categoryId])

    if (loading) {
        return (
            <Container>
                <Row>
                    <Col>
                        <Loader />
                    </Col>
                </Row>
            </Container>
        );
    }


    return (
        <Container>
            <Row>
                <Col> <h2>{gretting}</h2></Col>
            </Row>
            <Row>
                <ItemList products={products} />
            </Row>
        </Container>
    )

}

export default ItemListConteiner;