import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Loader } from '../Loader/Loader';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase';

export const ItemListConteiner = ({ gretting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    /* Connect to Firestore */

    useEffect(() => {
        /* Category filter validation */
        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId)) /* If it exists I do the filter */
            : collection(db, 'products') /* If it doesn't exist I don't do the filter */

        /* Get firebase data */
        getDocs(collectionRef).then(response => {

            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                /* Falta el ID porque esta en un nivel superior (automatico de firebase), lo sumo */
                return { id: doc.id, ...data }
            })
            setProducts(productsAdapted)

        }).finally(() => {
            /* Guardo el state */
            setLoading(false);

        })

    }, [categoryId])

    /* Loading control */

    if (loading) {
        return (
            <Container>
                <Row>
                    <Col>
                        <Loader message={'Cargando los productos'}/>
                    </Col>
                </Row>
            </Container>
        );
    }

    /* Main return */

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