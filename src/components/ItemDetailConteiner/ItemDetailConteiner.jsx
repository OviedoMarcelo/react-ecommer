import { useState, useEffect } from 'react'
import { getProductById } from '../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {productId} = useParams() /* Desectructuro use params y me quedo con product ID */


    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)

        }).finally(() => {
            setLoading(false)
        })

    }, [productId])

    if (loading) {
        return (

            <Loader/>

        );
    }

    return (
        <div>

            <ItemDetail key={product.id} {...product} />

        </div>
    )
}

export default ItemDetailContainer;