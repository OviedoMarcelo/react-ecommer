import { useState } from "react";

export const Counter = ({ onAdd }) => {

    const [cant, setResult] = useState(0)

    const addItem = () => {
        if (cant < onAdd) {
            setResult(parseInt(cant + 1))
        }
    }

    const removeItem = () => {
        if (cant > 0) {
            setResult(parseInt(cant - 1))
        }
    }


    return (
        <div>
            <div>
                <button onClick={removeItem}>-</button>
                <span>{cant}</span>
                <button onClick={addItem}>+</button>
            </div>
            <div>
                <button>Agregar al Carrito</button>
            </div>
        </div>
    );

}

export default Counter;