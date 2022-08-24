
import Navbar from './components/Navbar';
import './style/css/style.css';
import ItemListContainer from './components/ItemListContainer.jsx';

const Home = () => {
  return(
    <>
    <div className='app'>
    <Navbar />
      <h1>Aplicacion Web</h1>
      <hr/>
      <ItemListContainer greetin="Hola Mundo ItemListContainer!!!"/>
      <hr/>
    </div>
    </>
 );
}


export default Home;