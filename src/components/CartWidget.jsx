
import carritoimg from "../img/carrito.png";

function CartWidget() {
  return ( 
    <>
    <div className="cart-widget">
      <a href="#app">
        <img src={carritoimg} className="carrito" alt="carrito"  />
      </a>
    <p>5</p>
    </div>
    </>  
  );
}

export default CartWidget;
