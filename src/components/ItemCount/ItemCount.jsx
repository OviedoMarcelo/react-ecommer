import { useState } from "react";
import "./ItemCount.css";

export const Counter = ({ onAdd,stock }) => {

    const [quantity, setResult] = useState(0)

    const addItem = () => {
        if (quantity < stock) {
            setResult(parseInt(quantity + 1))
        }
    }

    const removeItem = () => {
        if (quantity > 0) {
            setResult(parseInt(quantity - 1))
        }
    }


    return (
        <div className="counter-conteiner">
            <div className="add-remove-conteiner">
                <button onClick={removeItem}>-</button>
                <span>{quantity}</span>
                <button onClick={addItem}>+</button>
            </div>
            <div>
                <button onClick={()=> onAdd(quantity)}>Agregar al Carrito </button>
            </div>
        </div>
    );

}

export default Counter;