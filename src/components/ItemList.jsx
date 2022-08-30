import React, {useEffect} from 'react';
import { useState } from 'react';
import promesa from '../utils/promesa';
import {data} from '../utils/data'
import ItemCount from "./ItemCount";

import swal from 'sweetalert';

const ItemList = () => {

  const onAdd = (qty) => {
    swal(`Has añadido ${qty} productos al carrito!`);
  }



    const [products, setProducts] = useState([]);

    useEffect(() =>{
      promesa(data)
          .then(result => setProducts(result))
          .catch(err => console.log(err))
    }, [])



  return ( 
    <> {
      products.map(item =>(
        <div className='product-card'>
            <h4>{item.name}</h4>
            <img src={item.image} alt="" />
            <p>Precio: ${item.price}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
        </div>

      )) }
     
    </>  
  )
}

export default ItemList;


