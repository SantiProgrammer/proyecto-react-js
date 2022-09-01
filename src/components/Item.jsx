import ItemCount from './ItemCount';

const Item = (props) =>{
    return(
        <>{
            <div className="card-container">
                <div className="card-title">{props.title}</div>
                <img className="card-img" src={props.img} alt={props.alt} />
                <div className="card-description">{props.description}</div>
                <div className="card-price">{"$" + props.price}</div>
                <div className="product-details">
                    <button>ver detalles</button>
                </div>
                <div>{"stock disponible" + props.stock}</div>
                <ItemCount stock={props.stock} initial={1} onAdd={onAdd}/>
            </div>
        }
 
        </>
    )
}


export default Item;