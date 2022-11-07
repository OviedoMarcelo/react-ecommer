import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase"
import { Loader } from "../Loader/Loader"
import {useNavigate } from "react-router-dom"



const CheckOut = () => {

    const { cart, total , clearCart} = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    /* CREATE ORDER WITH MOCK */
    const createOrder = async () => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name: 'Marcelo',
                    phone: '123',
                    mail: 'prueba@prueba.com'
                },
                items: cart,
                total: total
            }
            const collectionRef = collection(db, 'orders')
            addDoc(collectionRef, objOrder).then(response => {
                console.log(response.id)
            }).catch(error => {
                console.log(error)
            })

            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id) /* Obtain all products Ids */
            const productRef = collection(db, 'products') /* Obtain all products */
            const productsAddedFromFirestore = await getDocs(query(productRef, where(documentId(), 'in', ids))) /* Filter all products by ID and wait for the answer*/

            const { docs } = productsAddedFromFirestore /* Obtain docs */

            docs.forEach(doc => {
                const dataDoc = doc.data() /* Data of docs */
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity }) /* Direct reference to the document (doc.ref)*/

                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }

            })

            if (outOfStock.length === 0) { /* Operation succesfull*/
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                clearCart()
                setTimeout(()=>{
                    navigate('/')
                },3000)
                console.log(`El Id de su orden es: ${orderAdded.id}`)
            } else {
                console.log('Hay productos que estan fueras de stock')
            }


        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    if (loading) {
        return <Loader message={'Se esta generando orden, por favor aguarde'} />
    }


    return (
        <div>
            <h1>Checkout</h1>
            <h2>Formulario</h2>
            <button onClick={createOrder}>Generar orden</button>
        </div>
    )
}
export default CheckOut;