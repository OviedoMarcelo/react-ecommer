import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams() /* Desectructuro use params y me quedo con product ID */

    /* Connect to Firestore */
    useEffect(() => {
        /* con doc genero la referencia a lo que quiero obtener */
        const docRef = doc(db, 'products', productId)
        /* Con get DOC obtengo ese "documento" */
        getDoc(docRef).then(response => {

            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)

        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    /* Loading control */
    if (loading) {
        return (

            <Loader />

        );
    }

    return (
        <div>

            <ItemDetail key={product.id} {...product} />

        </div>
    )
}

export default ItemDetailContainer;