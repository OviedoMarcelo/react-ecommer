import Item from "../Item/Item";

export const ItemList = ({ products }) => {

    /* Listar */
    /* Map Transformando a items */
    return (
        products.map(prod =>

            <Item key={prod.id} {...prod} />
        )

    );

}

export default ItemList;