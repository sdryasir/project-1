import { useState } from 'react';
import { products } from '../data/products';

function Counter() {
    const [qty, setQty] = useState(1)

    const incHandler = () => {
        setQty(qty + 1)
    }
    const decHandler = () => {
        if (qty > 1)
            setQty(qty - 1)
    }

    return (
        <div className="input-group w-25">
            <button className="btn btn-outline-secondary" disabled={qty > 1 ? false : true} onClick={() => decHandler()} type="button">-</button>
            <input style={{ textAlign: 'center' }} type="text" className="form-control" value={qty} />
            <button className="btn btn-outline-secondary" onClick={() => incHandler()} type="button">+</button>
        </div>
    )
}

export default Counter;