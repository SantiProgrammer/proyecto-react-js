import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "../components/ItemDetail";
const { products } = require('../utils/products');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        customFetch(2000, products[0])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);

    return  (
        <ItemDetail 
        item={dato} 
        img={dato.image}
 
        />
    );
}

export default ItemDetailContainer;