import image from "../img/logo192.png";
import CartWidget from "./CartWidget"

function Navbar() {
  return (
    <div className="Navbar">
      <header>
        <nav className="navbar" id="app">
          <img src={image} className="logo" alt="logo"/>
          <a href="#app">Inicio</a>
          <a href="#app">About</a>
          <a href="#app">Productos</a>
          <a href="#app">Contacto</a>
          <CartWidget/>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
