import {useEffect, useState} from 'react';


const ItemCount = ({ stock=0, initial=1, onAdd}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock){
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > initial){
            setCount(count - 1);
        }
    }
    return(
        <div className="product-amount-container">
            <button variant="text" onClick={increment}>+</button>
            <div className="product-amount">{count}</div>
            <button variant="text" onClick={decrement}>-</button>
            {
                stock
                ? <button variant="contained" color="primary" onClick={() => onAdd(count)}>Add to Cart</button>
                : <button variant="contained" disabled>Add to Cart</button>
            }
        </div>
    );
}


export default ItemCount;