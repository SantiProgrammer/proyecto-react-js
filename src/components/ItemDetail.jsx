import ItemCount from './ItemCount';
import swal from 'sweetalert';


const ItemDetail = ({ item }) =>{

    const onAdd = (qty) => {
        swal(`Has añadido ${qty} productos al carrito!`);
      }

    return(
        <>
        {
            item.image
            ?
            <div>
                <img src={item.image[0]} alt="" />
                <div>{item.name}</div>
                <div>{item.description}</div>
                <div>{item.price}</div>
                <div>{item.stock}</div>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
            </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;